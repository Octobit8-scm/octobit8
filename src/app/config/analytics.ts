// Analytics Configuration
export const analyticsConfig = {
  // Microsoft Clarity Project ID
  // Get this from: https://clarity.microsoft.com/
  clarity: {
    projectId: process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID || 'sppznywgwu',
    enabled: process.env.NODE_ENV === 'production' || process.env.NEXT_PUBLIC_CLARITY_ENABLED === 'true',
  },
  
  // Google Analytics (if you want to add it later)
  googleAnalytics: {
    measurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '',
    enabled: process.env.NODE_ENV === 'production' || process.env.NEXT_PUBLIC_GA_ENABLED === 'true',
  },
}; 