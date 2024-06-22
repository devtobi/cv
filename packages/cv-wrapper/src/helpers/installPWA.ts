export const installPWA = async (event: BeforeInstallPromptEvent) => {
  if (event) {
    await event.prompt();
    await event.userChoice;
  }
};
