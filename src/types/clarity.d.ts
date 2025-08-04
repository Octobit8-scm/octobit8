// Microsoft Clarity TypeScript declarations
declare global {
  interface Window {
    clarity?: (
      command: string,
      ...args: any[]
    ) => void;
  }
}

export {}; 