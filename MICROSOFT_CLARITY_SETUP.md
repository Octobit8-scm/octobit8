# Microsoft Clarity Analytics Setup

This project includes Microsoft Clarity analytics for user behavior tracking and heatmaps.

## What is Microsoft Clarity?

Microsoft Clarity is a free analytics tool that provides:

- **Heatmaps**: Visual representation of user clicks, scrolls, and mouse movements
- **Session Recordings**: Record user sessions to understand behavior
- **User Journey Analysis**: Track how users navigate through your site
- **Performance Insights**: Identify slow-loading pages and user frustration points

## Setup Instructions

### 1. Create a Microsoft Clarity Account

1. Go to [Microsoft Clarity](https://clarity.microsoft.com/)
2. Sign in with your Microsoft account
3. Click "Create Project"
4. Enter your project details:
   - **Project Name**: `Octobit8 Website`
   - **Website URL**: `https://octobit8.azurestaticapps.net`
   - **Industry**: Technology/Software
5. Click "Create Project"

### 2. Get Your Project ID

After creating the project:

1. Go to your project dashboard
2. Click on "Settings" in the left sidebar
3. Copy the **Project ID** (it looks like: `abc123def456`)

### 3. Configure Environment Variables

#### Option A: Using Environment Variables (Recommended)

Create a `.env.local` file in your project root:

```bash
# Microsoft Clarity
NEXT_PUBLIC_CLARITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_CLARITY_ENABLED=true
```

#### Option B: Direct Configuration

Update `src/app/config/analytics.ts`:

```typescript
export const analyticsConfig = {
  clarity: {
    projectId: "your_project_id_here", // Replace with your actual project ID
    enabled: true,
  },
  // ... other config
};
```

### 4. Verify Installation

1. Build and deploy your application
2. Visit your website
3. Go to your Microsoft Clarity dashboard
4. You should see data starting to appear within a few minutes

## Features Included

### ✅ Heatmaps

- **Click Heatmaps**: Shows where users click most
- **Scroll Heatmaps**: Shows how far users scroll
- **Mouse Movement Heatmaps**: Shows user mouse patterns

### ✅ Session Recordings

- **User Sessions**: Record actual user interactions
- **Privacy Controls**: Automatically masks sensitive data
- **Filtering**: Filter sessions by various criteria

### ✅ Analytics Dashboard

- **User Behavior**: Understand how users interact with your site
- **Performance**: Identify slow-loading pages
- **Engagement**: Track user engagement metrics

## Privacy and Compliance

### GDPR Compliance

Microsoft Clarity is GDPR compliant and includes:

- **Data Processing Agreement**: Available in Clarity settings
- **Privacy Controls**: Automatic masking of sensitive data
- **User Consent**: Built-in consent management

### Data Collection

Clarity collects:

- ✅ Page views and navigation
- ✅ Mouse movements and clicks
- ✅ Scroll depth and time on page
- ✅ Device and browser information
- ❌ Personal information (automatically masked)

## Customization Options

### 1. Enable/Disable Analytics

```typescript
// In src/app/config/analytics.ts
export const analyticsConfig = {
  clarity: {
    projectId: "your_project_id",
    enabled: process.env.NODE_ENV === "production", // Only in production
  },
};
```

### 2. Add Custom Events

```typescript
// Track custom events
if (typeof window !== "undefined" && window.clarity) {
  window.clarity("set", "custom_event", "button_clicked");
}
```

### 3. Exclude Specific Pages

```typescript
// In your page components
useEffect(() => {
  if (typeof window !== "undefined" && window.clarity) {
    window.clarity("set", "page_view", {
      page: window.location.pathname,
      title: document.title,
    });
  }
}, []);
```

## Troubleshooting

### Common Issues

1. **No Data Appearing**

   - Check if the project ID is correct
   - Verify the script is loading (check browser console)
   - Ensure the site is live and accessible

2. **Script Not Loading**

   - Check if `NEXT_PUBLIC_CLARITY_ENABLED` is set to `true`
   - Verify the project ID format
   - Check browser console for errors

3. **Privacy Concerns**
   - Review Microsoft Clarity's privacy policy
   - Configure data masking in Clarity settings
   - Add privacy notice to your website

### Debug Mode

Enable debug mode to see Clarity events in console:

```typescript
// Add this to your layout or page
if (typeof window !== "undefined" && window.clarity) {
  window.clarity("set", "debug", true);
}
```

## Useful Commands

```bash
# Check if environment variables are loaded
echo $NEXT_PUBLIC_CLARITY_PROJECT_ID

# Build and test locally
npm run build
npm start

# Deploy to production
git add .
git commit -m "Add Microsoft Clarity analytics"
git push origin main
```

## Support

- **Microsoft Clarity Documentation**: [https://docs.microsoft.com/en-us/clarity/](https://docs.microsoft.com/en-us/clarity/)
- **Clarity Community**: [https://clarity.microsoft.com/community](https://clarity.microsoft.com/community)
- **Privacy Policy**: [https://clarity.microsoft.com/terms](https://clarity.microsoft.com/terms)

## Next Steps

1. ✅ Set up Microsoft Clarity project
2. ✅ Configure environment variables
3. ✅ Deploy and verify tracking
4. 🔄 Monitor analytics dashboard
5. 🔄 Optimize based on insights
6. 🔄 Set up custom events for important actions
