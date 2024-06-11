import { PrimeIcons } from 'primevue/api';

import type { MenuItem } from 'primevue/menuitem';

import i18n from '@/plugins/i18n';

const t = i18n.global.t;

const menuLinks: MenuItem[] = [
  {
    icon: PrimeIcons.CODE,
    key: 'projects',
    label: t('TheMenubar.links.projects.label'),
    url: t('static.TheMenubar.links.projects.url'),
    color: 'primary',
  },
  {
    icon: PrimeIcons.GITHUB,
    key: 'github',
    label: t('static.TheMenubar.links.github.label'),
    url: t('static.TheMenubar.links.github.url'),
    color: 'contrast',
  },
  {
    icon: PrimeIcons.LINKEDIN,
    key: 'linkedin',
    label: t('static.TheMenubar.links.linkedin.label'),
    url: t('static.TheMenubar.links.linkedin.url'),
    color: 'info',
  },
];

export default menuLinks;
