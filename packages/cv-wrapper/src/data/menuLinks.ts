import { PrimeIcons } from 'primevue/api'
import type { MenuItem } from 'primevue/menuitem'

const menuLinks: MenuItem[] = [
  {
    icon: PrimeIcons.CODE,
    key: 'website',
    label: 'My projects',
    url: 'https://devtobi.de',
    color: 'primary'
  },
  {
    icon: PrimeIcons.GITHUB,
    key: 'github',
    label: 'GitHub (@devtobi)',
    url: 'https://github.com/devtobi',
    color: 'contrast'
  },
  {
    icon: PrimeIcons.LINKEDIN,
    key: 'linkedin',
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/tobias-stadler/',
    color: 'info'
  }
]

export default menuLinks
