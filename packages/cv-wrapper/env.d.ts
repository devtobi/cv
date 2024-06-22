/// <reference types="vite/client" />
/// <reference types="user-agent-data-types" />
/// <reference types="vite-plugin-pwa/vue" />
/// <reference types="vite-plugin-pwa/info" />

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

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

interface WindowEventMap {
  beforeinstallprompt: BeforeInstallPromptEvent;
}
