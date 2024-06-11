import constants from '@/config/constants';
import i18n from '@/plugins/i18n';

const t = i18n.global.t;

const localizedStrings = {
  TheMenubar: {
    title: `${constants.authorName} - ${t('TheMenubar.cv')}`,
    profilePictureAlt: `${t('TheMenubar.profilePictureAltPrefix')} ${constants.authorName}`,
  },
};

export default localizedStrings;
