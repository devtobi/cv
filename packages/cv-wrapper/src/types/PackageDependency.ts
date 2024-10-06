export enum PackageDependencyType {
  PRODUCTION = 'prod',
  DEVELOPMENT = 'dev',
}

export enum PackageDependencyComponentType {
  CV_CONTENT = 'cv-content',
  CV_WRAPPER = 'cv-wrapper',
  ALL = 'all',
}

export interface PackageDependency {
  name: string;
  version: string;
  type: PackageDependencyType;
  component: PackageDependencyComponentType;
}
