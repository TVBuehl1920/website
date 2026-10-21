# Gatsby Blog Website

This repo contains a static website written with [GatsbyJS](https://www.gatsbyjs.org/), integrated with content coming from [DatoCMS](https://www.datocms.com).

[See the live demo](https://datocms-gatsby-blog-demo.netlify.app/)

If you want to use try this out yourself, you first need to set up a project on DatoCMS which will host your data.

You can [sign up for a free account](https://dashboard.datocms.com/signup) and then you can simply click this button:

[![Deploy with DatoCMS](https://dashboard.datocms.com/deploy/button.svg)](https://dashboard.datocms.com/deploy?repo=datocms/gatsby-blog-demo:main)

## Repo usage

Use Node.js 24.22.1 (the version pinned in `.nvmrc`), then install the exact dependency tree from `package-lock.json`:

```
nvm install
nvm use
npm ci
```

Add an `.env` file containing the read-only API token of your DatoCMS site:

```
DATO_CMS_API_TOKEN=your_read_only_token
# DATO_ENVIRONMENT=your_environment # optional; defaults to the primary environment
```

Then, to run this website in development mode (with live-reload):

```
npm run dev
```

To build the final, production ready static website:

```
npm run build
```

The final result will be saved in the `public` directory. The build reads real content from DatoCMS, so it requires a valid read-only token and network access. Keep `.env` local and out of Git.

Tailwind stays on the latest 3.x release to preserve the existing CSS and PostCSS configuration. Upgrading to Tailwind 4 requires a separate CSS migration and visual verification.

## Security updates

Run `npm run test:security` after dependency changes. It uses a local HTTP server to check that the DatoCMS client’s request dependency still uploads text and files correctly and rejects multipart field-name header injection. No CMS credentials or test dependencies are needed.

The scoped `request` overrides keep `form-data` on patched 2.5.6 and `qs` on 6.16.1. Other same-major overrides update Gatsby’s pinned Webpack, Immutable, Lodash, and Express route parser. These overrides need review when their parent packages are upgraded. `npm audit` still reports unresolved upstream dependencies in Gatsby and the legacy DatoCMS client; installing the newest direct versions does not resolve all inherited advisories.

## About

The goal of this project is to show how easily you can create static sites using the content (text, images, links, etc.) stored on [DatoCMS](https://www.datocms.com). This project is configured to fetch data from a specific administrative area using [the API DatoCMS provides](https://www.datocms.com/docs/content-management-api).

You can find further information about how to integrate DatoCMS with Gatsby in [our documentation](https://www.datocms.com/docs/static-generators/gatsbyjs).

This websites uses:

- [GatsbyJS](https://github.com/gatsbyjs/gatsby) as website generator;
- [gatsby-source-datocms](https://github.com/datocms/gatsby-source-datocms) to integrate the website with DatoCMS.
