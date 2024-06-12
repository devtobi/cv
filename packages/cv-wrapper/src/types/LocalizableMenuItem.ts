import { MenuItem } from 'primevue/menuitem';

export type LocalizableMenuItem = MenuItem & {
  localeLabel?: string;
};
