# Developer Portfolio

![Vercel Deploy](https://deploy-badge.vercel.app/vercel/developer-portfolio-a5rwtx3gh-chazmcgrills-projects)
[![GitHub Release](https://img.shields.io/github/v/release/chazmcgrill/developer-portfolio)](https://github.com/chazmcgrill/developer-portfolio/releases)

[![Follow me on Bluesky](https://img.shields.io/badge/Bluesky-0285FF?logo=bluesky&logoColor=fff&label=Follow%20me%20on&color=0285FF)](https://bsky.app/profile/charlietaylor.dev)
![GitHub Repo stars](https://img.shields.io/github/stars/chazmcgrill/developer-portfolio)

Developer portfolio website built using Next.js. A single page website featuring bio, projects and recent repo updates. Visit the site here:
[charlietaylor.dev](https://charlietaylor.dev)

## Tech Stack

![Next JS](https://img.shields.io/badge/Next-black?style=flat&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-%23007ACC.svg?style=flat&logo=typescript&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=flat&logo=SASS&logoColor=white)

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
