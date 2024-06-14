import {
  iosPlatforms,
  macOSPlatforms,
  OperatingSystem,
  windowsPlatforms,
} from '@/types/OperatingSystem';

export const getOperatingSystem = () => {
  const userAgent = window.navigator.userAgent;
  const platform =
    window.navigator?.userAgentData?.platform || window.navigator.platform;

  switch (true) {
    case macOSPlatforms.includes(platform):
      return OperatingSystem.MACOS;
    case iosPlatforms.includes(platform):
      return OperatingSystem.IOS;
    case windowsPlatforms.includes(platform):
      return OperatingSystem.WINDOWS;
    case /Android/.test(userAgent):
      return OperatingSystem.ANDROID;
    case /Linux/.test(platform):
      return OperatingSystem.LINUX;
    default:
      return OperatingSystem.OTHER;
  }
};
