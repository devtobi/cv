import constants from '@/config/constants';

const combinedStrings = {
  TheMenubar: {
    links: {
      projects: {
        url: constants.projectsUrl,
      },
      github: {
        label: `GitHub (@${constants.githubName})`,
        url: `https://github.com/${constants.githubName}`,
      },
      linkedin: {
        label: 'LinkedIn',
        url: `https://www.linkedin.com/in/${constants.linkedinName}`,
      },
    },
  },
  TheFooter: {
    copyright: (year: string) =>
      `© ${year} ${constants.authorName} (@${constants.githubName})`,
  },
};

export { combinedStrings };
