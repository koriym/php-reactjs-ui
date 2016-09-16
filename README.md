# php-reactjs-ui

[Japanese 日本語](README.ja.md)

**php-reactjs-ui** is a framework agnostic React UI boilerplate for PHP projects. The compilation of the assets/JS, test, lint and browser sync are available in this boilerplate.

 * [React](https://facebook.github.io/react/) UI framework
 * [Gulp](http://gulpjs.com/) Build system
 * [Webpack](https://webpack.github.io/) Moudle bundler
 * [Babel](https://babeljs.io/) JS transpiler
 * [Karma](https://karma-runner.github.io/0.13/index.html) Test Runner
 * [Mocha](http://mochajs.org/) Test framework
 * [Chai](http://chaijs.com/) BDD / TDD assertion framework 
 * [Enzyme](https://github.com/airbnb/enzyme) JavaScript Testing utilities for React
 * [Eslint](http://eslint.org/) Linting utility for JS and JSX
 * [Phantomjs](http://phantomjs.org/) Scriptable Headless WebKit
 * [react-php-v8js](https://github.com/reactjs/react-php-v8js) PHP library that renders React components on the server

 
## Prerequisite

 * [Node](https://nodejs.org/en/)
 * [V8Js PHP extension](https://github.com/phpv8/v8js) (Optional for SSR)
 
## Installation

First, place the `ui` directory and `package.json` into the root of the existing PHP project.

```
cp -r ui /path/to/yourapp
cp package.json /path/to/yourapp
```

Then, install the dependencies.

```
cd /path/to/yourapp
npm install
```

If you want SSR(Server Side Rendering), Install `react-php-v8js`.

```
composer require reactjs/react-php-v8js
```
 
### Directory Structure
 
```
├── src                  # php
├── tests                # php
├── composer.json
├── package.json          # JS
├── node_modules          # JS
├── ui
│   ├── .babelrc
│   ├── .eslintrc
│   ├── .babelrc
│   ├── .babelrc
│   ├── gulpfile.js
│   ├── karma.conf.js
│   ├── src               # JS
│   ├── test              # JS
│   ├── ui.config.js
│   └── webpack.config.js
└── vendor
```

It's easy to be integrated into any existing PHP projects.

## Config

You can configure with `ui/ui.config.js`.

```
module.exports = {
  // web root
  htdocs: base + 'var/www',
  // webpack output.path
  path: base + 'var/www/build',
  // webpack outout.publicPath
  publicPath: "http://cdn.example.com/assets/[hash]/",
  // watch to sync folder
  watch: [
    base + 'var/www/build/*',
    base + '**/*.twig',
  ],
  // webpack entry
  entry: {
    react: 'src/react.js',
    helloworld: 'src/testing_examples/helloworld.jsx',
    ssr: 'src/testing_examples/ssr.js',
  }
};
```

**Important:** You need the `react` entry in case for SSR.

## Run

A server start with http://127.0.0.1:8080/

```
npm start
```


## Browsersync + HMR

It automatically reloads when PHP, JS, and Twig templates are updated.

```
npm run dev
```

## Test

It test your JS code with Karma + Mocha + Chai. To change the config, edit `karma.conf.js` in the `ui` directory.

```
npm test      
```

## Linting

```
npm run lint
```

It runs [ESLint](http://eslint.org/). [Airbnb](http://mitsuruog.github.io/javascript-style-guide/) 's ESLint rules is configured by default. To change the rules, edit the `.eslintrc` in the `ui` directory.


## PHP QA

Watch [phpcs](https://github.com/squizlabs/PHP_CodeSniffer) and [phpmd](https://phpmd.org/) for PHP files.

```
npm run php
```



## Demo

You can use this repository to try commands and the operation of `v8js`.
It contains the official `react-php-v8js` demo [example](https://github.com/reactjs/react-php-v8js/tree/master/example) which is rewritten as ES6 + Airbnb style.

```
git clone https://github.com/koriym/php-reactjs-ui.git
cd php-reactjs-ui
npm install
composer install // optional for SSR
npm run lint
npm test
[^C]
npm start
```

 * `http://127.0.0.1/`        client side rendering (CSR)
 * `http://127.0.0.1/ssr.php` server side rendering (SSR)
