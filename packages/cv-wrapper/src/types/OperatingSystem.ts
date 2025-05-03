import { OS } from 'ua-parser-js/enums';

export enum OperatingSystem {
  APPLE,
  MICROSOFT,
  ANDROID,
  OTHER,
}

export const appleList = [OS.IOS, OS.MACOS, OS.WATCHOS] as string[];

export const microsoftListList = [
  OS.WINDOWS,
  OS.WINDOWS_PHONE,
  OS.WINDOWS_IOT,
  OS.WINDOWS_MOBILE,
  OS.XBOX,
] as string[];

export const androidList = [
  OS.ANDROID,
  OS.ANDROID_X86,
  OS.CHROMECAST_ANDROID,
] as string[];
