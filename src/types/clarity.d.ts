// Microsoft Clarity TypeScript declarations
declare global {
  interface Window {
    clarity?: (
      command: string,
      ...args: unknown[]
    ) => void;
  }
}

export {}; 