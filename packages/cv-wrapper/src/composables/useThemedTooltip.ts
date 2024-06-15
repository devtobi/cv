import { computed, Ref } from 'vue';

import { useThemedClass } from '@/composables/useThemedClass';

export const useThemedTooltip = (
  text: Ref<string>,
  direction: 'Left' | 'Right' | 'Bottom' | 'Top' = 'Bottom',
) => {
  const textClass = useThemedClass(
    'text-gray-100 bg-black',
    'text-gray-700 bg-white',
  );

  const arrowColor = 'var(--text-color)';
  const borderAttribute = `border${direction}Color`;

  return computed(() => {
    return {
      value: text.value,
      pt: {
        arrow: {
          style: {
            [borderAttribute]: arrowColor,
          },
        },
        text: textClass.value,
      },
    };
  });
};
