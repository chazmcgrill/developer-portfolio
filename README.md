# Developer Portfolio

<!-- TODO: add vercel deploy badge -->

[![GitHub Release](https://img.shields.io/github/v/release/chazmcgrill/developer-portfolio)](https://github.com/chazmcgrill/developer-portfolio/releases)
[![Twitter Follow](https://img.shields.io/twitter/follow/charlietcoder.svg?style=social)](https://twitter.com/charlietcoder)

Developer portfolio website built using Next.js. A single page website featuring bio, projects and recent repo updates. Visit the site here:

[charlietaylor.dev](https://charlietaylor.dev)

## Tech Stack

-   [Next.js](https://nextjs.org/)
-   [Sass](https://sass-lang.com/)
-   [Typescript](https://www.typescriptlang.org/)

## To Run Locally

1. Fork or clone this repo
2. Install dependencies

```
npm install
```

3. Start the dev server

```
npm run dev
```

## Deployment

This site is continuosly deployed to [Vercel](https://vercel.com/) from merges made to the master branch.

<!-- TODO: add deployment info https://nextjs.org/docs/deployment -->

## Bugs & Issues

If you find any bugs or issues feel free to raise them in the issues section of this repo.

## Other scripts

Create a build

```
npm run build
```

Run the linter

```
npm run lint
```

## Feature Flags

To aide continuous delivery this projects makes use of feature flags. These can be added to a `.env.local` in the route of the project, for example:

```
# .env.local

NEXT_PUBLIC_FEATURE_PAGES=true

```

So we create new features in small PRs without having to expose to users.

> **_NOTE:_** In Nextjs the variables must be preceeded with `NEXT_PUBLIC_` to work.
