import { PrimeIcons } from 'primevue/api';

import { getOperatingSystem } from '@/helpers/getOperatingSystem';
import { OperatingSystem } from '@/types/OperatingSystem';

export const getOperatingSystemIcon = () => {
  const os = getOperatingSystem();

  const iconMap: Record<OperatingSystem, string> = {
    [OperatingSystem.MACOS]: PrimeIcons.APPLE,
    [OperatingSystem.WINDOWS]: PrimeIcons.MICROSOFT,
    [OperatingSystem.LINUX]: PrimeIcons.DESKTOP,
    [OperatingSystem.IOS]: PrimeIcons.APPLE,
    [OperatingSystem.ANDROID]: PrimeIcons.ANDROID,
    [OperatingSystem.OTHER]: PrimeIcons.DESKTOP,
  };

  return iconMap[os];
};
