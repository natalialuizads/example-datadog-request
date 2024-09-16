
export const getServiceDataDog = (type: string): any => {
  return window[type as any];
}
