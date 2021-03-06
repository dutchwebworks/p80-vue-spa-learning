# Poort80 Vue SPA learing

*By Dennis Burger, Poort80 Amsterdam, october 2018*

This is a short setup introduction on how to get started with a (clean / new) Nuxt SPA boilerplate starter project we'll use during the **Poort80 Vue SPA frontend hack meeting**.

## Prerequisites

* [NodeJS](https://nodejs.org/en/)

This installation will also give you the NodeJS package-manager **NPM** and the `npx` command we'll need below.

## To get started from scratch

### Generate the Nuxt boilerplate starter project

Open a Terminal and `cd` to the proper (parent) directory where you want your Nuxt project (as a sub-directory) to be saved. 

Run the following command to **create a Nuxt boilerplate starter project** that we'll use:

```bash
npx create-nuxt-app p80-vue-spa-learning
```

A few questions are going to be asked. Choose:

* Framework: **none**
* UI framework: **none**
* Rendering mode: **SPA**
* Axios module: **yes**
* ESLint: **no**
* Prettier: **no**
* Package Manager: **npm**

After pressing `enter` the boilerplate starter project will be created for you. When that process is done it'll show you what to do next.

### Run the project

Still on the Terminal, run the suggested commands to **start up the Nuxt development server**.

```bash
cd p80-vue-spa-learning
npm run dev
```

Keep this Terminal window running (open) during development. **Open your web browser and go the URL shown on the Terminal**. Usually that's:

	http://localhost:3000

You'll be greated by the Nuxt SPA homepage.

### Open project in code editor

Now open the project folder in you **code editor** of choice.

### Adding Sass and Pug

On the Terminal install the following packages to be able to write **Pug** and **Sass** in your project.

``` bash
npm i --save-dev node-sass sass-loader nuxt-sass-resources-loader pug pug-plain-loader
```

To have global Sass, like Sass variables, mixins and helpers, available in all your `*.vue` files open the `nuxt.config.js` file. Scroll to the `modules` section. ANd add the new `nuxt-sass-resources-loader` -part below after the `axois` part that is already there. 

Make sure the paths to the `*.scss` files are correct.

```javascript
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    ['nuxt-sass-resources-loader', [
      '@/assets/scss/helpers/_config.scss',
      '@/assets/scss/helpers/_flexbox.scss',
      '@/assets/scss/helpers/_grid.scss',
      '@/assets/scss/helpers/_respond-to.scss'
    ]]
  ],
```

In a `.*vue` file change the `<style>` -block to the one below. Now can write Scss inside the style `<style>` -block.

```html
<style lang="scss">
```

To use Pug in the `*.vue` file's `<template>` -block make sure to change it to:

```html
<template lang="pug">
```

## Using this project as reference

Now you can use this project as reference for your above new project.

### Nuxt build for production

Run the command below to have production ready build in the `./docs` directory. 

``` bash
npm run build
```

For this **demo** I used the `./docs` directory for build output because this demo is hosted on **Github Pages** and accessible via a custom **domain name**: https://p80-vue-spa-learning.dutchwebworks.nl

#### Testing the production build locally

Now that the `./docs` directory contains the production build you can test that version using a simple HTTP server. First you have to install it if you don't already have it.

```bash
npm i -g http-server
```

After installing run the command below inside the same directory where this project's `package.json` file resides.

```bash
http-server docs
```

This will start a simple HTTP server and will give you a new URL to test on your local machine. Open the URL mentioned on the command-line, usually it's:

	http://localhost:8080

This `./docs` directory can be uploaded to a FTP server root directory to serve your static SPA web site.