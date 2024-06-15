<template>
  <Button
    :icon="appearanceIcon"
    :aria-label="ariaLabel"
    v-tooltip.bottom="tooltipObject"
    severity="contrast"
    @click="toggleTheme"
  />
</template>

<script setup lang="ts">
  import { PrimeIcons } from 'primevue/api';
  import { computed } from 'vue';
  import { useI18n } from 'vue-i18n';

  import { useSelectedAppearance } from '@/composables/useSelectedAppearance';
  import { useThemedTooltip } from '@/composables/useThemedTooltip';
  import { getOperatingSystemIcon } from '@/helpers/getOperatingSystemIcon';
  import { Appearance } from '@/types/Appearance';

  const { t } = useI18n();

  const ariaLabel = computed(() =>
    t(`CvAppearanceToggleButton.label`, {
      appearance: tooltipLabel.value,
    }),
  );

  const tooltipLabel = computed(() =>
    t(`CvAppearanceToggleButton.appearances.${selectedAppearance.value}`),
  );
  const tooltipObject = useThemedTooltip(tooltipLabel, 'Bottom');

  const themeOrder = [Appearance.LIGHT, Appearance.DARK, Appearance.SYSTEM];

  const operatingSystemIcon = getOperatingSystemIcon();

  const icons: Record<Appearance, string> = {
    [Appearance.LIGHT]: PrimeIcons.SUN,
    [Appearance.DARK]: PrimeIcons.MOON,
    [Appearance.SYSTEM]: operatingSystemIcon,
  };

  const appearanceIcon = computed<string>(
    () => icons[selectedAppearance.value as Appearance],
  );

  const { selectedAppearance } = useSelectedAppearance();

  const toggleTheme = () => {
    const currentAppearanceIndex = themeOrder.indexOf(
      selectedAppearance.value as Appearance,
    );
    const newAppearanceIndex = (currentAppearanceIndex + 1) % themeOrder.length;
    selectedAppearance.value = themeOrder[newAppearanceIndex];
  };
</script>
