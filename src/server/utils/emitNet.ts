export const emit = (eventName: string, ...args: any[]) => {
  return new Promise<void>((resolve) => {
    emitNet(eventName, args);

    setTimeout(() => {
      resolve();
    }, 500);
  });
};
