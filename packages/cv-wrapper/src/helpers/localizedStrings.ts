import { AUTHOR_NAME } from '@/config/constants';
import i18n from '@/plugins/i18n';

const t = i18n.global.t;

const localizedStrings = {
  TheMenubar: {
    title: `${AUTHOR_NAME} - ${t('TheMenubar.cv')}`,
    profilePictureAlt: `${t('TheMenubar.profilePictureAltPrefix')} ${AUTHOR_NAME}`,
  },
};

export default localizedStrings;
