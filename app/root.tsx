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
import AdminBar from './components/AdminBar'
import Footer from './components/Footer'
import Header from './components/Header'
import { ShowAfterFirstRender } from './components/ShowAfterFirstRender'
import type { FooterProps } from './types/footer'
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
  cmsURL: string
  apiURL: string
}

export const loader: LoaderFunction = async ({ request }) => {
  // const cookieString = request.headers.get('Cookie')
  // const userId = await authCookie.parse(cookieString)
  const menuItems = await getNavigation()
  const { footerProps, siteOptions } = await getSiteOptions()
  const socialLinks = await getSocialLinks()

  return json<LoaderData>({
    menuItems,
    footerProps,
    siteOptions,
    cmsURL: process.env.CMS_URL as string,
    apiURL: process.env.API_URL as string,
    socialLinks
  })
}

export default function App() {
  const { menuItems, footerProps, siteOptions, socialLinks, cmsURL, apiURL } =
    useLoaderData() as LoaderData

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
        {/* <PayloadAdminBar
          cmsURL='http://localhost:3000'
          adminPath='/admin'
          apiPath='/api'
          collection='pages'
          id='652ef7953a4beb120ddede6a'
          // devMode
        /> */}

        <AdminBar
          collection='pages'
          id='652ef7953a4beb120ddede6a'
          cmsURL={cmsURL}
          apiURL={apiURL}
        />

        <ShowAfterFirstRender>
          <Header
            menuItems={menuItems}
            logo={{ url: siteOptions.logo.url, alt: siteOptions.logo.alt }}
            siteOptions={siteOptions}
          />
        </ShowAfterFirstRender>

        <Outlet context={siteOptions satisfies siteOptionsProps} />

        <Footer props={footerProps} siteOptions={siteOptions} socialLinks={socialLinks} />

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
