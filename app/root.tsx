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

import stylesheet from '~/styles/root.css'
import { getFooterNavigation, getNavigation } from './api/general'
import Footer from './components/Footer'
import Header from './components/Header'
import { ShowAfterFirstRender } from './components/ShowAfterFirstRender'
import type { FooterProps } from './types/footer'
import type { MenuItems } from './types/menu'

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
}

export const loader: LoaderFunction = async () => {
  const menuItems = await getNavigation()
  const footerProps = await getFooterNavigation()

  return json<LoaderData>({ menuItems, footerProps })
}

export default function App() {
  const { menuItems, footerProps } = useLoaderData() as LoaderData

  return (
    <html lang='en' className='min-h-screen'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <Meta />
        <Links />
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
