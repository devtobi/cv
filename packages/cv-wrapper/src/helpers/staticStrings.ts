import {
  authorName,
  githubName,
  linkedinName,
  websiteUrl,
} from '@/config/constants';

const staticStrings = {
  CvMenubar: {
    links: {
      website: {
        url: websiteUrl,
      },
      github: {
        label: `GitHub (@${githubName})`,
        url: `https://github.com/${githubName}`,
      },
      linkedin: {
        label: 'LinkedIn',
        url: `https://www.linkedin.com/in/${linkedinName}`,
      },
    },
  },
  CvFooter: {
    copyright: (year: string) => `© ${year} ${authorName} (@${githubName})`,
  },
};

export { staticStrings };
