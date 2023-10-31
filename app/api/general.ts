import type { FooterData } from '~/types/footer'
import type { MenuItem, MenuItems } from '~/types/menu'
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

export const getFooterOptions = async () => {
  const footerResponse = await fetch(`${process.env.API_URL}/globals/site-options?locale=en`, {
    headers: {
      Authorization: `users API-Key ${process.env.API_KEY}`
    }
  })

  const { Footer: footerJson }: FooterData = (await footerResponse.json()) as FooterData
  const footerProps = {
    copyright: footerJson.copyright,
    logoUrl: footerJson.footerLogo.url,
    logoAltText: footerJson.footerLogo.alt,
    menu: await getNavigation()
  }

  return footerProps
}
