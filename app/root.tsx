import { cssBundleHref } from '@remix-run/css-bundle'
import type { LinksFunction, LoaderFunction, MetaFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData
} from '@remix-run/react'

import React from 'react'
import stylesheet from '~/styles/root.css'
import { getNavigation, getSiteOptions, getSocialLinks } from './api/general'
import Footer from './components/Footer'
import Header from './components/Header'
import { ShowAfterFirstRender } from './components/ShowAfterFirstRender'
import type { FooterProps, socialTypes } from './types/footer'
import type { MenuItems } from './types/menu'
import type { siteOptionsProps } from './types/site-options'
import type { SocialLink } from './types/social-icons'
import { DynamicLinks } from './utils/dinamycLinks'

export const links: LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;900&family=Roboto:wght@300;400;500;700&display=swap'
  },
  { rel: 'stylesheet', href: stylesheet },
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : [])
]

const dynamicLinks = ({ data }: any) => {
  const faLink =
    data.siteOptions.fontAwesome && data.siteOptions.fontAwesomeOverride !== ''
      ? data.siteOptions.fontAwesomeOverride
      : data.siteOptions.fontAwesomeLink

  if (data.siteOptions.fontAwesome) {
    return [
      {
        rel: 'stylesheet',
        href: faLink
      }
    ]
  }

  return []
}

export const handle = {
  dynamicLinks
}

export const meta: MetaFunction = () => {
  return [
    { title: 'Logoipsum.com' },
    { name: 'description', content: 'Website description' },
    { name: 'keywords', content: 'logoipsum' }
  ]
}

type LoaderData = {
  menuItems: MenuItems[]
  socialLinks: SocialLink[]
  footerProps: FooterProps
  siteOptions: siteOptionsProps
}

export const loader: LoaderFunction = async () => {
  const menuItems = await getNavigation()
  const { footerProps, siteOptions } = await getSiteOptions()
  const socialLinks = await getSocialLinks()

  return json<LoaderData>({ menuItems, footerProps, siteOptions, socialLinks })
}

export default function App() {
  const { menuItems, footerProps, siteOptions, socialLinks } = useLoaderData() as LoaderData
  const socialType: socialTypes = siteOptions.fontAwesome ? 'fa' : 'regular'

  return (
    <html lang='en' className='min-h-screen'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <Meta />
        <Links />
        <DynamicLinks />
      </head>
      <body className='min-h-screen'>
        <ShowAfterFirstRender>
          <Header
            menuItems={menuItems}
            logo={{ url: siteOptions.logo.url, alt: siteOptions.logo.alt }}
          />
        </ShowAfterFirstRender>

        <Outlet />

        <Footer props={footerProps} socialType={socialType} socialLinks={socialLinks} />

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
