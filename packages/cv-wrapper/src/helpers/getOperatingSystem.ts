import { UAParser } from 'ua-parser-js';

import {
  androidList,
  appleList,
  microsoftListList,
  OperatingSystem,
} from '@/types/OperatingSystem';

export const getOperatingSystem = () => {
  const parser = new UAParser(window.navigator.userAgent);
  const operatingSystem = parser.getOS();

  if (!operatingSystem.name) {
    return OperatingSystem.OTHER;
  }

  switch (true) {
    case appleList.includes(operatingSystem.name):
      return OperatingSystem.APPLE;
    case androidList.includes(operatingSystem.name):
      return OperatingSystem.ANDROID;
    case microsoftListList.includes(operatingSystem.name):
      return OperatingSystem.MICROSOFT;
    default:
      return OperatingSystem.OTHER;
  }
};
