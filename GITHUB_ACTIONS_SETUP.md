# GitHub Actions Setup for Azure Static Web Apps

This repository uses GitHub Actions to automatically deploy to Azure Static Web Apps.

## Workflows

### 1. Main Deployment Workflow (`.github/workflows/azure-static-web-apps.yml`)

- **Triggers**: Push to `main` or `develop` branches, Pull requests to `main`
- **Purpose**: General deployment with environment detection
- **Environments**:
  - `production` for `main` branch
  - `staging` for `develop` branch

### 2. Production Deployment (`.github/workflows/azure-static-web-apps-production.yml`)

- **Triggers**: Push to `main` branch only
- **Purpose**: Dedicated production deployment
- **Environment**: `production`

### 3. Staging Deployment (`.github/workflows/azure-static-web-apps-staging.yml`)

- **Triggers**: Push to `develop` branch only
- **Purpose**: Dedicated staging deployment
- **Environment**: `staging`

## Required GitHub Secrets

Add these secrets to your GitHub repository:

### `AZURE_STATIC_WEB_APPS_API_TOKEN`

1. Go to your Azure Static Web App in Azure Portal
2. Navigate to **Configuration** → **Deployment tokens**
3. Copy the **Deployment token** value
4. Add it to GitHub repository secrets

## Setup Instructions

### 1. Create Azure Static Web App

```bash
# Using Azure CLI
az staticwebapp create \
  --name "octobit8" \
  --resource-group "octobit8-rg" \
  --location "eastus2" \
  --source "https://github.com/your-username/octobit8" \
  --branch "main" \
  --app-location "/" \
  --output-location "out"
```

### 2. Configure GitHub Repository

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Add the `AZURE_STATIC_WEB_APPS_API_TOKEN` secret

### 3. Configure Environments (Optional)

1. Go to your GitHub repository
2. Navigate to **Settings** → **Environments**
3. Create `production` and `staging` environments
4. Add environment protection rules if needed

## Deployment Process

### Automatic Deployment

- **Push to `main`**: Deploys to production environment
- **Push to `develop`**: Deploys to staging environment
- **Pull Request**: Creates a preview deployment

### Manual Deployment

You can also trigger deployments manually:

1. Go to **Actions** tab in GitHub
2. Select the workflow you want to run
3. Click **Run workflow**
4. Select the branch and click **Run workflow**

## Environment URLs

After deployment, your app will be available at:

- **Production**: `https://octobit8.azurestaticapps.net`
- **Staging**: `https://octobit8-staging.azurestaticapps.net`

## Troubleshooting

### Common Issues

1. **Build Failures**

   - Check Node.js version compatibility
   - Verify all dependencies are installed
   - Review build logs in GitHub Actions

2. **Deployment Failures**

   - Verify `AZURE_STATIC_WEB_APPS_API_TOKEN` is correct
   - Check Azure Static Web App exists and is accessible
   - Review deployment logs in GitHub Actions

3. **Environment Issues**
   - Ensure environments are configured in GitHub
   - Check environment protection rules
   - Verify branch permissions

### Useful Commands

```bash
# Check Azure Static Web App status
az staticwebapp show --name "octobit8" --resource-group "octobit8-rg"

# List deployments
az staticwebapp deployment list --name "octobit8" --resource-group "octobit8-rg"

# Get deployment token
az staticwebapp deployment-token show --name "octobit8" --resource-group "octobit8-rg"
```

## Security Notes

- The `AZURE_STATIC_WEB_APPS_API_TOKEN` should be kept secure
- Never commit the token to the repository
- Rotate the token periodically for security
- Use environment protection rules for production deployments
