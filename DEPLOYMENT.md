# GitHub Pages Deployment Guide

This guide will help you set up automatic deployment of your SU ACM website to GitHub Pages using GitHub Actions.

## 🚀 **Setup Steps**

### 1. **Enable GitHub Pages**
1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. Click **Save**

### 2. **Repository Settings**
- Ensure your repository is public (required for free GitHub Pages)
- Make sure you have a `main` or `master` branch
- Verify the repository name matches the base path in `vite.config.ts`

### 3. **GitHub Actions Permissions**
The workflow automatically sets the required permissions:
- `contents: read` - Read repository content
- `pages: write` - Deploy to GitHub Pages
- `id-token: write` - Authentication for deployment

## 📁 **File Structure**
```
.github/
  workflows/
    deploy.yml          # GitHub Actions workflow
SUACM_site/
  vite.config.ts       # Vite configuration with base path
  package.json         # Dependencies and build scripts
  src/                 # React source code
```

## ⚙️ **Configuration**

### **Vite Config (`SUACM_site/vite.config.ts`)**
```typescript
base: '/seattleuacm.github.io/', // Update this to match your repo name
```

**Important:** Update the `base` path to match your actual repository name:
- If your repo is `my-website`, use `base: '/my-website/'`
- If your repo is `username.github.io`, use `base: '/'`

### **Package.json Scripts**
Ensure these scripts exist in `SUACM_site/package.json`:
```json
{
  "scripts": {
    "build": "tsc -b && vite build",
    "preview": "vite preview"
  }
}
```

## 🔄 **How It Works**

### **Automatic Triggers**
- **Push to main/master** - Automatically builds and deploys to production
- **Pull Request to test branch** - Builds and deploys to preview environment for testing

### **Build Process**
1. **Checkout** - Gets your latest code
2. **Setup Node.js** - Installs Node.js 18 with npm caching
3. **Install Dependencies** - Runs `npm ci` for fast, reliable installs
4. **Build Project** - Runs `npm run build` to create production files
5. **Upload Artifact** - Prepares files for deployment
6. **Deploy** - Publishes to GitHub Pages

### **Deployment Types**

#### **Production Deployment**
- **Trigger**: Push to `main` or `master` branch
- **Environment**: Production GitHub Pages
- **URL**: Your main site URL
- **Purpose**: Live production site

#### **Preview Deployment**
- **Trigger**: Creating or updating a pull request **to the `test` branch**
- **Environment**: Preview GitHub Pages
- **URL**: Preview URL (shown in Actions logs)
- **Purpose**: Test changes before merging to test branch

### **Testing Workflow**
1. **Create a feature branch** from test branch
2. **Make your changes** and commit them
3. **Create a pull request** to the `test` branch
4. **GitHub Actions automatically** builds and deploys a preview
5. **Get the preview URL** from the Actions tab
6. **Test your changes** on the preview site
7. **Merge to test branch** when satisfied
8. **When ready for production**, merge test branch to main (triggers production deployment)

## 📱 **Accessing Your Site**

### **Production Site**
After deployment from main branch:
```
https://[username].github.io/[repository-name]/
```

### **Preview Sites**
After creating a pull request **to the test branch**:
- Check the **Actions tab** for the preview URL
- Each PR to test branch gets its own preview deployment
- Perfect for testing changes before merging to test branch

## 🛠️ **Troubleshooting**

### **Common Issues**

1. **Build Fails**
   - Check Actions logs for error details
   - Verify all dependencies are in `package.json`
   - Ensure build script works locally (`npm run build`)

2. **Site Not Loading**
   - Verify base path in `vite.config.ts`
   - Check if GitHub Pages is enabled
   - Wait a few minutes for deployment to complete

3. **Routing Issues**
   - GitHub Pages doesn't support client-side routing by default
   - Consider using HashRouter instead of BrowserRouter

### **Local Testing**
```bash
cd SUACM_site
npm run build
npm run preview
```

## 🔧 **Customization**

### **Environment Variables**
Add environment-specific configurations:
```typescript
// vite.config.ts
export default defineConfig({
  base: process.env.NODE_ENV === 'production' 
    ? '/seattleuacm.github.io/' 
    : '/',
  // ... rest of config
})
```

### **Build Optimization**
The workflow includes:
- **Dependency caching** for faster builds
- **Manual chunk splitting** for better performance
- **Source map disabling** for production builds

## 📊 **Monitoring**

- **Actions Tab** - View build and deployment status
- **Pages Tab** - Monitor deployment history
- **Repository Insights** - Track deployment frequency

## 🎯 **Next Steps**

1. **Push your code** to trigger the first deployment
2. **Check Actions tab** to monitor the build process
3. **Visit your site** once deployment completes
4. **Customize** the workflow as needed

---

**Need Help?** Check the [GitHub Actions documentation](https://docs.github.com/en/actions) or [GitHub Pages documentation](https://docs.github.com/en/pages).
