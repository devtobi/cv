export const installPWA = async (event: BeforeInstallPromptEvent) => {
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (event) {
    await event.prompt();
    await event.userChoice;
  }
};
