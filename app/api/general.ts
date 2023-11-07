import type { MenuItem, MenuItems } from '~/types/menu'
import type { SiteOptionsData } from '~/types/site-options'
import { addSlashIfMissing } from '~/utils/strings'

export const getNavigation = async (): Promise<MenuItems[]> => {
  const navigationResponse = await fetch(`${process.env.API_URL}/globals/navigation?locale=en`, {
    headers: {
      Authorization: `users API-Key ${process.env.API_KEY}`
    }
  })

  const { menuItems: navigation } = await navigationResponse.json()

  const menuItems: MenuItems[] = navigation.map(({ link: item }: MenuItem) => {
    const label = item.label
    const href =
      item.type === 'page' ? addSlashIfMissing(item.page.slug) : addSlashIfMissing(item.url)

    return { label, href }
  })

  return menuItems
}

export const getSiteOptions = async () => {
  const optionsResponse = await fetch(`${process.env.API_URL}/globals/site-options?locale=en`, {
    headers: {
      Authorization: `users API-Key ${process.env.API_KEY}`
    }
  })

  const { Footer: footer, General: options }: SiteOptionsData =
    (await optionsResponse.json()) as SiteOptionsData

  const siteOptions = {
    title: options.title,
    adminEmail: options.adminEmail,
    logo: {
      url: options.logo.url,
      alt: options.logo.alt,
      title: options.logo.title
    },
    fontAwesome: options.fontAwesome === 'enable',
    fontAwesomeLink: options.fontAwesomeLink,
    fontAwesomeOverride: options.fontAwesomeOverride
  }

  const footerProps = {
    copyright: footer.copyright,
    logoUrl: footer.footerLogo.url,
    logoAltText: footer.footerLogo.alt,
    menu: await getNavigation()
  }

  return { footerProps, siteOptions }
}
