# A 15 minute quick start blog template using React and Next.js

If you're tired of forking generic blog templates, look no further. Get your new project started faster than ever with a production ready React website.

Get started with [part 1 of our in-depth blog series](https://thereactstartup.com/blog/nextjs-react-blog-quick-start) to set up and customize your very own NextJs blog and add all features marked (+).

## Features

- [x] Ultra Fast Page Loading
- [x] Basic SEO Optimization
- [x] Auto Optimized Images
- [x] 5 Customizable Themes
- [x] Minimalist UI
- [ ] MailChimp Integration (+)
- [ ] EmailJs Integration (+)
- [ ] Twitter Integration (+)

## Demo

### [https://next-blog-graphcms.now.sh/](https://next-blog-graphcms.now.sh/)

### Related examples

- [WordPress](/examples/cms-wordpress)
- [DatoCMS](/examples/cms-datocms)
- [Sanity](/examples/cms-sanity)
- [TakeShape](/examples/cms-takeshape)
- [Prismic](/examples/cms-prismic)
- [Contentful](/examples/cms-contentful)
- [Strapi](/examples/cms-strapi)
- [Agility CMS](/examples/cms-agilitycms)
- [Cosmic](/examples/cms-cosmic)
- [ButterCMS](/examples/cms-buttercms)
- [Storyblok](/examples/cms-storyblok)
- [Blog Starter](/examples/blog-starter)

## How to use

### Using `create-next-app`

Execute [`create-next-app`](https://github.com/zeit/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example cms-graphcms cms-graphcms-app
# or
yarn create next-app --example cms-graphcms cms-graphcms-app
```

### Download manually

Download the example:

```bash
curl https://codeload.github.com/zeit/next.js/tar.gz/canary | tar -xz --strip=2 next.js-canary/examples/cms-graphcms
cd cms-graphcms
```

## Configuration

### Step 1. Create an account and a project in GraphCMS

First, [create an account in GraphCMS](https://app.graphcms.com).

### Step 2. Create a new GraphCMS project

After creating an account, create a new project from the **Blog Starter template** - be sure to include the example content.

### Step 3. Set up environment variables

Copy the `.env.local.example` file in this directory to `.env.local` (which will be ignored by Git):

```bash
cp .env.local.example .env.local
```

Inside your project dashboard, navigate to **Settings > API Access page**.

Then set each variable in `.env.local`:

- `GRAPHCMS_PROJECT_API`: Set it to the API endpoint under **Endpoints**, at the top of the page.
- `GRAPHCMS_PROD_AUTH_TOKEN`: Copy the `NEXT_EXAMPLE_CMS_GCMS_PROD_AUTH_TOKEN` token under **Existing tokens**, at the bottom of the page. This will only query content that is published.
- `GRAPHCMS_DEV_AUTH_TOKEN`: Copy the `NEXT_EXAMPLE_CMS_GCMS_DEV_AUTH_TOKEN` token under **Existing tokens**, at the bottom of the page. This will only query content that is in draft.
- `GRAPHCMS_PREVIEW_SECRET` can be any random string (but avoid spaces), like `MY_SECRET` - this is used for [Preview Mode](https://nextjs.org/docs/advanced-features/preview-mode).

### Step 4. Run Next.js in development mode

```bash
npm install
npm run dev

# or

yarn install
yarn dev
```

Your blog should be up and running on [http://localhost:3000](http://localhost:3000)! If it doesn't work, post on [GitHub discussions](https://github.com/zeit/next.js/discussions).

### Step 5. Deploy on Vercel

You can deploy this app to the cloud with [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

#### Deploy Your Local Project

To deploy your local project to Vercel, push it to GitHub/GitLab/Bitbucket and [import to Vercel](https://vercel.com/import/git?utm_source=github&utm_medium=readme&utm_campaign=next-example).

**Important**: When you import your project on Vercel, make sure to click on **Environment Variables** and set them to match your `.env.local` file.

#### Deploy from Our Template

Alternatively, you can deploy using our template by clicking on the Deploy button below.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)
