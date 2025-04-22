---
title: "Founder Mode: How StartEase builds in public"
description: "See behind the scenes of StartEase's journey as we share our progress openly.
 "
image: https://r2.startease.dev/blog-hero2.png
published: 2024/11/18
author: Evelyn Grace
avatarUrl: https://i.pravatar.cc/150?img=32
---

> This article was created using ChatGPT and meant as a placeholder

---

## What is Nuxt 3?

Nuxt 3 is a modern framework built on Vue 3 that simplifies the process of building high-performance web applications. It supports features like server-side rendering (SSR), static site generation (SSG), and seamless developer experiences.

In this guide, we’ll create a Nuxt 3 project, integrate Nuxt UI for ready-to-use components, and deploy the project using NuxtHub.

---

## Step 1: Setting Up Your Environment

Ensure you have Node.js (v16 or higher) installed. You can download it from the [Node.js official website](https://nodejs.org/).

Create a new Nuxt 3 project:

```bash
npx nuxi init my-nuxt-app
cd my-nuxt-app
npm install
```

This initializes a Nuxt 3 project and installs all necessary dependencies.

---

## Step 2: Running the Development Server

Run the development server to verify the setup:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the default Nuxt 3 starter page.

---

## Step 3: Installing Nuxt UI

To speed up development, integrate Nuxt UI for pre-designed components:

1. Install the Nuxt UI package:

   ```bash
   npm install @nuxthq/ui
   ```

2. Update the `nuxt.config.ts` file to include the Nuxt UI module:

   ```ts
   export default defineNuxtConfig({
     modules: ['@nuxthq/ui']
   })
   ```

3. Restart the development server.

You can now use Nuxt UI components in your project. For example, add a button to the home page:

```vue
<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <h1 class="mb-4 text-3xl font-bold">Welcome to Nuxt 3</h1>
    <n-button variant="primary">Explore</n-button>
  </div>
</template>
```

---

## Step 4: Building for Production

Prepare your project for deployment by building the application:

```bash
npm run build
```

This command generates the `.output` directory, containing your production-ready application.

---

## Step 5: Deploying with NuxtHub

NuxtHub is a deployment platform optimized for Nuxt projects, making it easy to host and manage your application.

### Step 5.1: Push Your Project to a Repository

Ensure your project is version-controlled and pushed to a repository (e.g., GitHub):

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-repository-url>
git push -u origin main
```

### Step 5.2: Deploy via NuxtHub

1. Log in to [NuxtHub](https://nuxthub.com).
2. Connect your Git repository.
3. Select your project and configure the deployment settings.
4. Click “Deploy.”

NuxtHub will handle the deployment process and provide you with a live URL to access your Nuxt 3 application.

---

## Conclusion

With Nuxt 3 and Nuxt UI, you can quickly build and deploy modern web applications. Deploying through NuxtHub simplifies the process, making it ideal for developers looking to launch projects with minimal configuration. Now your Nuxt 3 app is live and ready to scale!