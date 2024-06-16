import {
  PackageDependency,
  PackageDependencyComponentType,
  PackageDependencyType,
} from '@/types/PackageDependency';

export const generatePackageDependencyList = (
  dependencies: Record<string, string>,
  type: PackageDependencyType,
  component: PackageDependencyComponentType,
) => {
  return Object.entries(dependencies).map(
    ([name, version]) =>
      ({
        name,
        version,
        type,
        component,
      }) as PackageDependency,
  );
};
