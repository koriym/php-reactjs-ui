# php-react-ui

[Japanese 日本語](README.ja.md)

**php-react-ui** is a framework agnostic React UI boilerplate for PHP projects. The compilation of the assets/JS, test, lint and browser sync are available in this boilerplate.

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
 * [react-hot-loader](https://github.com/gaearon/react-hot-loader) Tweak React components in real time

 
## Prerequisite

 * [Node](https://nodejs.org/en/)
 * [V8Js PHP extension](https://github.com/phpv8/v8js) (Optional)
 
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

If you are going to implement Server Side Rendering (SSR) with React, please install `react-php-v8js`.
you will need [V8Js PHP extension](https://github.com/phpv8/v8js) as well.

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
│   ├── entry.js
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

You can configure the application settings in `ui/ui.config.js`.

**ui/ui.config.js**

 * **public** Public directory
 * **watch\_to\_sync** Target directory for the browser sync
 * **cleanup_dir** Directory to be cleared when you update the PHP file

Specify the JS file on page-by-page basis in the `ui/entry.js`. Bundled js/css file is output in `public/dist` path.

```
module.exports = {
  react: 'src/react.js',
  helloworld: 'src/testing_examples/helloworld.js',
};
```

You will need the `react` entry in case for Server Side Rendering (SSR) with React.

## Run

```
npm start
```

Firstly, it erase the `cleanup_dir` directory.
Secondly, it bundles CSS and JS by webpack, and output to `build` directory.
Lastly, it runs built-in server specified in `server` of the `ui/ui.config.js`.


```
npm run dev
```

Use `start-hot` for hot-reloading. It automatically reloads when PHP, JS, and Twig templates are updated.


## Test

```
npm test      
```

It test your JS code with Karma + Mocha + Chai. To change the config, edit `karma.conf.js` in the `ui` directory.


```
npm run lint
```

It runs [ESLint](http://eslint.org/). [Airbnb](http://mitsuruog.github.io/javascript-style-guide/) 's ESLint rules is configured by default. To change the rules, edit the `.eslintrc` in the `ui` directory.


## Demo

You can use this repository to try commands and the operation of `v8js`.
It contains the official `react-php-v8js` demo [example](https://github.com/reactjs/react-php-v8js/tree/master/example) which is rewritten as ES6 + Airbnb style.

```
npm install
composer install
npm run lint
npm test
[^C]
npm start
```

 * `http://127.0.0.1/`        client side rendering (CSR)
 * `http://127.0.0.1/ssr.php` server side rendering (SSR)
