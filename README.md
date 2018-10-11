# Poort80 Vue SPA learing

*By Dennis Burger, Poort80 Amsterdam, october 2018*

This is a short setup introduction on how to get started with a (clean / new) Nuxt SPA boilerplate starter project we'll use during the **Poort80 Vue SPA frontend hack meeting**.

## Prerequisites

* [NodeJS](https://nodejs.org/en/)

This installation will also give you the NodeJS package-manager **NPM** and the `npx` command we'll need below.

## Generate the Nuxt boilerplate starter project

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

## Run the project

Still on the Terminal, run the suggested commands to **start up the Nuxt development server**.

```bash
cd p80-vue-spa-learning
npm run dev
```

Keep this Terminal window running (open) during development. **Open your web browser and go the URL shown on the Terminal**. Usually that's:

	http://localhost:3000

You'll be greated by the Nuxt SPA homepage.

## Open project in code editor

Now open the project folder in you **code editor** of choice.

## Short explanation of the Nuxt SPA directory structure

## Adding Sass and Pug

``` bash
npm i --save-dev node-sass sass-loader pug pug-plain-loader
```

In a `.*vue` file change the `<style>` -block to the one below. Now can write Scss inside the style `<style>` -block.

```html
<style lang="scss">
```