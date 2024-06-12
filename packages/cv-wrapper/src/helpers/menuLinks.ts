import { PrimeIcons } from 'primevue/api';

import { staticStrings } from '@/helpers/staticStrings';
import { LocalizableMenuItem } from '@/types/LocalizableMenuItem';

const menuLinks: LocalizableMenuItem[] = [
  {
    icon: PrimeIcons.CODE,
    key: 'website',
    localeLabel: 'CvMenubar.links.website.label',
    url: staticStrings.CvMenubar.links.website.url,
    color: 'primary',
  },
  {
    icon: PrimeIcons.GITHUB,
    key: 'github',
    label: staticStrings.CvMenubar.links.github.label,
    url: staticStrings.CvMenubar.links.github.url,
    color: 'contrast',
  },
  {
    icon: PrimeIcons.LINKEDIN,
    key: 'linkedin',
    label: staticStrings.CvMenubar.links.linkedin.label,
    url: staticStrings.CvMenubar.links.linkedin.url,
    color: 'info',
  },
];

export default menuLinks;
