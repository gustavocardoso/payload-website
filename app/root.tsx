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
import { getNavigation, getSiteOptions } from './api/general'
import Footer from './components/Footer'
import Header from './components/Header'
import { ShowAfterFirstRender } from './components/ShowAfterFirstRender'
import type { FooterProps } from './types/footer'
import type { MenuItems } from './types/menu'
import type { siteOptionsProps } from './types/site-options'
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
  // console.log(data)
  return [
    {
      rel: 'canonical',
      href: 'http://teste.com'
    }
  ]
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
  footerProps: FooterProps
  siteOptions: siteOptionsProps
}

export const loader: LoaderFunction = async () => {
  const menuItems = await getNavigation()
  const { footerProps, siteOptions } = await getSiteOptions()

  return json<LoaderData>({ menuItems, footerProps, siteOptions })
}

export default function App() {
  const { menuItems, footerProps, siteOptions } = useLoaderData() as LoaderData

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
          <Header menuItems={menuItems} />
        </ShowAfterFirstRender>

        <Outlet />

        <Footer props={footerProps} />

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
