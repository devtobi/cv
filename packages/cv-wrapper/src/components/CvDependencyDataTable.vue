<template>
  <DataTable
    v-model:selection="selectedRow"
    :value="dependencies"
    size="small"
    table-style="min-width: 50%"
    :sort-order="-1"
    scrollable
    scroll-height="flex"
    selection-mode="single"
    @row-click="openNpmPage"
  >
    <Column
      field="name"
      :header="t('CvDependencyDataTable.columnNames.name')"
    />
    <Column
      field="version"
      :header="t('CvDependencyDataTable.columnNames.version')"
    />
    <Column
      field="type"
      :header="t('CvDependencyDataTable.columnNames.type')"
    >
      <template #body="slotProps">
        <Tag
          :value="
            t(
              `CvDependencyDataTable.dependencyTypeNames.${slotProps.data.type}`,
            )
          "
          :severity="getTypeTagSeverity(slotProps.data.type)"
          class="flex flex-row"
        />
      </template>
    </Column>
    <Column
      v-if="!hideSoftwareComponentColumn"
      field="component"
      :header="t('CvDependencyDataTable.columnNames.component')"
    >
      <template #body="slotProps">
        <Tag
          :value="
            t(
              `CvDependencyDataTable.dependencyComponentNames.${slotProps.data.component}`,
            )
          "
          :severity="getComponentTagSeverity(slotProps.data.component)"
          class="flex flex-row"
        />
      </template>
    </Column>
  </DataTable>
</template>

<script setup lang="ts">
  import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';
  import { DataTableRowClickEvent } from 'primevue/datatable';
  import { ref } from 'vue';
  import { useI18n } from 'vue-i18n';

  import { npmPackageUrl } from '@/config/constants';
  import { generatePackageDependencyList } from '@/helpers/generatePackageDependencyList';
  import {
    PackageDependencyComponentType,
    PackageDependencyType,
  } from '@/types/PackageDependency';

  const { t } = useI18n();

  const breakpoints = useBreakpoints(breakpointsTailwind);
  const hideSoftwareComponentColumn = breakpoints.smaller('sm');

  const devDependenciesData = import.meta.env.PACKAGE_DEV_DEPENDENCIES;
  const contentDevDependenciesData = import.meta.env
    .CV_CONTENT_PACKAGE_DEV_DEPENDENCIES;
  const wrapperDevDependenciesData = import.meta.env
    .CV_WRAPPER_PACKAGE_DEV_DEPENDENCIES;

  const wrapperDependenciesData = import.meta.env
    .CV_WRAPPER_PACKAGE_DEPENDENCIES;

  const devDependencies = generatePackageDependencyList(
    devDependenciesData,
    PackageDependencyType.DEVELOPMENT,
    PackageDependencyComponentType.ALL,
  );
  const contentDevDependencies = generatePackageDependencyList(
    contentDevDependenciesData,
    PackageDependencyType.DEVELOPMENT,
    PackageDependencyComponentType.CV_CONTENT,
  );
  const wrapperDevDependencies = generatePackageDependencyList(
    wrapperDevDependenciesData,
    PackageDependencyType.DEVELOPMENT,
    PackageDependencyComponentType.CV_WRAPPER,
  );

  const wrapperDependencies = generatePackageDependencyList(
    wrapperDependenciesData,
    PackageDependencyType.PRODUCTION,
    PackageDependencyComponentType.CV_WRAPPER,
  );

  const dependencies = [
    ...devDependencies,
    ...contentDevDependencies,
    ...wrapperDevDependencies,
    ...wrapperDependencies,
  ];

  const selectedRow = ref();

  const getTypeTagSeverity = (type: PackageDependencyType) => {
    switch (type) {
      case PackageDependencyType.DEVELOPMENT:
        return 'warning';
      case PackageDependencyType.PRODUCTION:
        return 'info';
    }
  };

  const getComponentTagSeverity = (type: PackageDependencyComponentType) => {
    switch (type) {
      case PackageDependencyComponentType.ALL:
        return 'info';
      case PackageDependencyComponentType.CV_CONTENT:
        return 'warning';
      case PackageDependencyComponentType.CV_WRAPPER:
        return 'error';
    }
  };

  const openNpmPage = (event: DataTableRowClickEvent) => {
    const packageName = event.data.name;
    const url = `${npmPackageUrl}${packageName}`;
    window.open(url, '_blank')?.focus();
  };
</script>
