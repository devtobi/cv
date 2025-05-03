import { PrimeIcons } from '@primevue/core/api';

import { getOperatingSystem } from '@/helpers/getOperatingSystem';
import { OperatingSystem } from '@/types/OperatingSystem';

export const getOperatingSystemIcon = () => {
  const os = getOperatingSystem();

  const iconMap: Record<OperatingSystem, string> = {
    [OperatingSystem.APPLE]: PrimeIcons.APPLE,
    [OperatingSystem.MICROSOFT]: PrimeIcons.MICROSOFT,
    [OperatingSystem.ANDROID]: PrimeIcons.ANDROID,
    [OperatingSystem.OTHER]: PrimeIcons.DESKTOP,
  };

  return iconMap[os];
};
