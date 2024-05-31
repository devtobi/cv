[![Last commit][commit-shield]][commit-url]

[![License][license-shield]][license-url]

<br />
<p align="center">
  <h3 align="center">cv</h3>

  <p align="center">
    My <a href="https://jsonresume.org">JSONResume</a> based CV and automatic generation with <a href="https://github.com/rbardini/resumed">resumed</a> with interchangeble themes.
    <br />
    <br />
    <a href="https://devtobi.de/cv/">View CV</a>
    ·
    <a href="https://github.com/devtobi/cv/issues/new/choose">Report Bug</a>
    ·
    <a href="https://github.com/devtobi/cv/issues/new/choose">Request Feature</a>
  </p>
</p>

## Table of Contents

- [About the Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Authors](#authors)
- [License](#license)

## About The Project

This project contains my <a href="https://jsonresume.org">JSONResume</a> based CV and automatic generation as `.html` and `.pdf` with [resumed](https://github.com/rbardini/resumed). Deployment is automated using GitHub Actions to GitHub Pages.

You can use this repository as starting point and inspiration to write your own CV with JSONResume.

**Notice**: However please provide your own `resume.json` file and do not reuse my file without modification as it contains personal information.

### Built With

- [JSONResume](https://jsonresume.org) (to define JSON content for CV)
- [resumed](https://github.com/rbardini/resumed) (to generate .html files of CV)
- [html-minifier-terser](https://github.com/terser/html-minifier-terser) (to optimize .html files)
- [puppeteer](https://pptr.dev/) (to generate .pdf file of CV)
- [prettier](https://prettier.io) (to format `resume.json` and other files)

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This project requires [Node.js](https://nodejs.org/) to run. It uses [pnpm](https://pnpm.io) to manage dependencies. You need to have both tools installed

To locally generate the CV as `.pdf` file you additionally need to have a current version of the Chrome browser installed on your system.

**Info**: If you want to use `npm` as alternative to `pnpm`, just replace all commands in this guide with `npm` instead of `pnpm`.

### Installation

1. Clone the repository

```sh
git clone https://github.com/devtobi/cv.git
```

2. Install dependencies

```sh
pnpm install
```

## Usage

To get started using this repository, you need to edit the `resume.json` inside the `src` for your own CV.

### Local Usage

**Info**: Please note your `resume.json` file needs to be written in JSONResume schema. You can use `pnpm run format` to format your file and `pnpm run validate` to check if your edits are valid according to JSONResume.

If you want to build your CV locally you need to install a theme onto your system, as this repository does not come with one by default. Themes are published as npm packages in the format `jsonresume-theme-*`. Take a look at the available themes [here](https://www.npmjs.com/search?q=jsonresume-theme-).

Install your desired theme as development dependency using `pnpm install -D jsonresume-theme-*` (or `npm install -D jsonresume-theme-*`).
Then set your theme by exporting a environment variable named `THEME` to the name of your theme (e.g. `export THEME=jsonresume-theme-basic`).

**Info**: Keep in note the commands for exporting environment variables might differ depending on your operating system.

The following npm scripts are available for generation:

- `pnpm run build-html`: Builds a `.html` version thats easily readable and can be further manually edited (but not recommended)
- `pnpm run build-web`: Builds a minified and optimized `.html` version ready to deploy as static website.
- `pnpm run build-pdf`: Builds a `.pdf` version by launching a headless chrome browser and using its built-in print functionality using puppeteer.

### Usage with GitHub actions

This repository provides custom workflows to validate or build and deploy your CV. You can find the workflows under `.github/workflows`.

The validation will run on every push to any branch. Build and deployment can only be triggered on your `main` branch via a manual trigger through the GitHub Actions GUI.

The workflows use a custom action to setup required tooling for running inside CI/CD environments. It uses caching to speed up execution time when no changes inside `pnpm-lock.yaml` were found.

**Info**: As you will not change any dependencies as a normal user of this repository, you will greatly benefit from the caching mechanism.

You can set run options via the GUI for the workflow execution like:

- `theme`: Theme to use for building website and/or PDF document (`jsonresume-theme-<theme>`), required
- `build-website`: Whether to build the website and create artifact or not, default `true`
- `deploy-website`: Whether to deploy the website or not, default `false`
- `build-pdf`: Whether to build PDF document and create artifact or not, default `true`
- `node-version`: NodeJS version to use, default is `lts/*`
- `pnpm-version`: PNPM version to use, default is `9`
- `chrome-version`: Chrome version to use, default is `stable`

**Note**: To deploy as GitHub Pages you need to have it correctly configured and enabled. See GitHub documentation for more information.

## Authors

- **Tobias Stadler** - [devtobi](https://github.com/devtobi)

## License

Distributed under a customized MIT License. See [LICENSE][license-url] for more information.

**Important**: The file `resume.json` located inside the `src` directory contains personal data.
Permission to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of this specific file is granted on the condition that users must replace
the personal data with their own. The `resume.json` file must not be used as is
without modification using their own personal data.

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[license-shield]: https://img.shields.io/github/license/devtobi/cv.svg?style=for-the-badge&logo=github
[license-url]: https://github.com/devtobi/cv/blob/main/LICENSE
[commit-shield]: https://img.shields.io/github/last-commit/devtobi/cv?style=for-the-badge&logo=github
[commit-url]: https://github.com/devtobi/cv/commit/main
