import { PrimeIcons } from 'primevue/api';

import type { MenuItem } from 'primevue/menuitem';

import { combinedStrings } from '@/helpers/combinedStrings';
import i18n from '@/plugins/i18n';

const t = i18n.global.t;

const menuLinks: MenuItem[] = [
  {
    icon: PrimeIcons.CODE,
    key: 'projects',
    label: t('TheMenubar.links.projects.label'),
    url: combinedStrings.TheMenubar.links.projects.url,
    color: 'primary',
  },
  {
    icon: PrimeIcons.GITHUB,
    key: 'github',
    label: combinedStrings.TheMenubar.links.github.label,
    url: combinedStrings.TheMenubar.links.github.url,
    color: 'contrast',
  },
  {
    icon: PrimeIcons.LINKEDIN,
    key: 'linkedin',
    label: combinedStrings.TheMenubar.links.linkedin.label,
    url: combinedStrings.TheMenubar.links.linkedin.url,
    color: 'info',
  },
];

export default menuLinks;
