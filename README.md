# Koriym.Ui

[Japanese 日本語](README.ja.md)

## Integrating React UI into PHP app

 * [React](https://facebook.github.io/react/) UI framework
 * [Webpack](https://webpack.github.io/) Moudle bundler
 * [Babel](https://babeljs.io/) JS transpiler
 * [Karma](https://karma-runner.github.io/0.13/index.html) Test Runner
 * [Mocha](http://mochajs.org/) Test framework
 * [Chai](http://chaijs.com/) BDD / TDD assertion framework 
 * [Enzyme](https://github.com/airbnb/enzyme) JavaScript Testing utilities for React
 * [Eslint](http://eslint.org/) Linting utility for JS and JSX
 * [Phantomjs](http://phantomjs.org/) Scriptable Headless WebKit
 * [react-php-v8js](https://github.com/reactjs/react-php-v8js) PHP library that renders React components on the server

 
## Start

```
npm install

# start server
npm start

# start php-hot-deploy
npm run start-hot 
```

```
http://127.0.0.1/        # client side rendering (CSR)
http://127.0.0.1/ssr.php # server side rendering (SSR)
```

## Test

```
# cleanup
npm run clean
# build
npm run build
# start karma
npm test      
# lint airbnb jscs
npm run lint
```
