export function sleep(time: number) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(null), Math.abs(time));
  });
}
