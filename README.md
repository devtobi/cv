[![Last commit][commit-shield]][commit-url]
[![License][license-shield]][license-url]

<br />
<div style="text-align: center;">
  <h3>cv</h3>

  <p>
    My <a href="https://jsonresume.org">JSONResume</a> based CV and generation with <a href="https://github.com/rbardini/resumed">resumed</a> with interchangeable themes and support for multiple languages.
    <br />
    <br />
    <a href="https://devtobi.de/cv/">View CV</a>
    ·
    <a href="https://github.com/devtobi/cv/issues/new/choose">Report Bug</a>
    ·
    <a href="https://github.com/devtobi/cv/issues/new/choose">Request Feature</a>
  </p>
</div>

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

This project contains my CV application based on [JSONResume](https://jsonresume.org). Furthermore, variants of the CV are generated automatically as `.html` (using [resumed](https://github.com/rbardini/resumed)) and `.pdf` (using [puppeteer](https://pptr.dev/)). Tons of themes are supported. Custom build scripts allow generation for multiple languages (which is a missing feature in JSONSchema itself). Deployment is automated using GitHub Actions to GitHub Pages.

You can use this repository as a starting point and inspiration to write your own CV with JSONResume.

**Notice**: However, please provide your own `json` files and do not reuse my files without modification as those contain personal information as described in the `LICENSE`.

### Features

- Auto-generated HTML content for the CV based on [JSONResume](https://jsonresume.org) and [resumed](https://github.com/rbardini/resumed)
- Auto-generated PDF content for the CV based on [puppeteer](https://pptr.dev/)
- Support for thousands of themes and custom ones
- Vue-based Single Page Application (SPA) for dynamically viewing the CV
- Easily extensible Multi-language support
- Dark mode support
- Progressive Web App Support (App installation, Offline usage)
- PWA installation notification (Chromium-based browsers only)
- Accessibility tested

### Built With

This project is built as a monorepo. Currently, it only contains the following packages
- `cv-content`: Generation for multiple static html files using JSONSchema and resumed
- `cv-wrapper`: Vue based SPA used as entrypoint to dynamically serve `cv-content` and provide additional features

The following lists contain the important technologies used to implement this application.

#### `cv-content`:

- [JSONResume](https://jsonresume.org) (to define JSON content for CV)
- [resumed](https://github.com/rbardini/resumed) (to generate .html files of CV and validate JSON Schema)
- [html-minifier-terser](https://github.com/terser/html-minifier-terser) (to optimize .html files)
- [puppeteer](https://pptr.dev/) (to generate .pdf file of CV)
- [prettier](https://prettier.io) (to format `.json` files)
- [concurrently](https://github.com/open-cli-tools/concurrently) (to allow for parallel build execution and speed increase)

#### `cv-wrapper`:

- [Vue](https://vuejs.org) (JavaScript framework used to implement the application)
- [vue-i18n](https://vue-i18n.intlify.dev) (Internationalization support for Vue)
- [PrimeVue](https://primevue.org) (UI components library)
- [PrimeIcons](https://github.com/primefaces/primeicons) (Icon set used for PrimeVue)
- [PrimeFlex](https://primeflex.org) (CSS utility library)
- [Pinia](https://pinia.vuejs.org) (State management solution for Vue)
- [VueUse](https://vueuse.org) (Collection of useful Vue Composition API helpers)
- [flag-icons](https://flagicons.lipis.dev) (Predefined flag icons based on ISO standard)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

This project requires [Node.js](https://nodejs.org/) to run. It uses [bun](https://bun.io) to manage dependencies. You need to have both tools installed.

**Info**: If you want to use `npm` as alternative to `bun`, just replace all commands in this guide with `npm` instead of `bun`.

### Installation

1. Clone the repository

```sh
git clone https://github.com/devtobi/cv.git
```

2. Install dependencies

```sh
bun install
```

3. **Optional**: Install puppeteer Chrome browser on your machine (only required `.pdf` generation)

```sh
bun run prepare
```

## Usage

To get started using this repository, you need to edit the `.json` files inside the `data` directory for your own CV.

**Tip**: Each file represents the data for generation a CV in a specific language. You can create as many `.json` files as you want. The build tools will automatically handle them. Keep in mind that the filename is used as a path inside the generated assets for web deployment.

**Example**: `es.json` will generate a file `index.html` under the `es` directory and thus be served under `/es/index.html`.

### Local Usage

**Info**: Please note your `.json` files need to be written in JSONResume schema. You can use `bun run format` to format your files and `bun run validate` to check if your edits are valid, according to JSONResume.

If you want to build your CV locally, you need to install a theme onto your system, as this repository does not come with one by default. Themes are published as npm packages in the format `jsonresume-theme-*`. Take a look at the available themes [here](https://www.npmjs.com/search?q=jsonresume-theme-).

Install your desired theme as development dependency using `bun install -D jsonresume-theme-*` (or `npm install -D jsonresume-theme-*`).
Then set your theme by exporting an environment variable named `THEME` to the name of your theme (e.g. `export THEME=jsonresume-theme-basic`).

**Info**: Keep in note the commands for exporting environment variables might differ depending on your operating system.

To build the whole monorepo use the command `bun run build`.
The command builds an `.html` version and a `.pdf` version and places those files into specific subdirectories for each language your CV was written in. On top of that, it builds the Vue based wrapper application. In the end both build folders are combined into a single `dist` folder. This folder can be served as is.

### Usage with GitHub actions

This repository provides custom workflows to validate or build and deploy your CV. You can find the workflows under `.github/workflows`.

The validation will run on every push to any branch. Build and deployment can only be triggered on your `main` branch via a manual trigger through the GitHub Actions GUI.

The workflows use a custom action to set up required tooling for running inside CI/CD environments. It uses caching to speed up execution time when no changes inside `bun.lockb` were found.

**Info**: As you will not change any dependencies as a normal user of this repository, you will greatly benefit from the caching mechanism.

You can set run options via the GUI for the workflow execution like:

- `theme`: Theme to use for building website and/or PDF document (`jsonresume-theme-<theme>`), required
- `deploy`: Whether to deploy the website or not, default `false`
- `node-version`: NodeJS version to use, default is `lts/*`
- `bun-version`: Bun version to use, default is `latest`
- `chrome-version`: Chrome version to use, default is `stable`

**Note**: To deploy as GitHub Pages, you need to have it correctly configured and enabled. See GitHub documentation for more information.

## Authors

- **Tobias Stadler** - [devtobi](https://github.com/devtobi)

## License

Distributed under a customized MIT License. See [LICENSE][license-url] for more information.

**Important**: The files contained in the `data` directory include personal data.
Permission to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of these specific files is granted on the condition that users must replace
the personal data with their own. The files in the `data` directory must not be used
as is without modification using their own personal data.

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[license-shield]: https://img.shields.io/badge/license-MIT_(customized)-orange?style=for-the-badge&logo=github
[license-url]: https://github.com/devtobi/cv/blob/main/LICENSE
[commit-shield]: https://img.shields.io/github/last-commit/devtobi/cv?style=for-the-badge&logo=github
[commit-url]: https://github.com/devtobi/cv/commit/main
