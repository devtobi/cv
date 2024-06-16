/// <reference types="vite/client" />
/// <reference types="user-agent-data-types" />

interface ImportMetaEnv {
  readonly PACKAGE_REPOSITORY_URL: string;
  readonly PACKAGE_DEV_DEPENDENCIES: Record<string, string>;
  readonly CV_CONTENT_PACKAGE_DEV_DEPENDENCIES: Record<string, string>;
  readonly CV_WRAPPER_PACKAGE_DEV_DEPENDENCIES: Record<string, string>;
  readonly CV_WRAPPER_PACKAGE_DEPENDENCIES: Record<string, string>;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
