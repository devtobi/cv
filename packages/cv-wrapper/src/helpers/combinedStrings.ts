import {
  AUTHOR_NAME,
  GITHUB_NAME,
  LINKEDIN_NAME,
  PROJECTS_URL,
} from '@/config/constants';

const combinedStrings = {
  TheMenubar: {
    links: {
      projects: {
        url: PROJECTS_URL,
      },
      github: {
        label: `GitHub (@${GITHUB_NAME})`,
        url: `https://github.com/${GITHUB_NAME}`,
      },
      linkedin: {
        label: 'LinkedIn',
        url: `https://www.linkedin.com/in/${LINKEDIN_NAME}`,
      },
    },
  },
  TheFooter: {
    copyright: (year: string) => `© ${year} ${AUTHOR_NAME} (@${GITHUB_NAME})`,
  },
};

export { combinedStrings };
