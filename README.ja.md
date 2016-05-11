# Koriym.Ui

[English](README.md)

**Koriym.Ui**はPHPプロジェクトとモダンJavaScript UI開発を統合するためのアプリケーションフレームワークアグノスティックなボイラープレートです。アセット/JSのコンパイル、テスト、リント、ブラウザシンクなどを可能にします。

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

 
## 前提条件

 * [Node](https://nodejs.org/en/)
 * [V8Js PHP extension](https://github.com/phpv8/v8js)  (オプション)
 
## インストール
 
最初に`ui`フォルダと`package.json`を既存のPHPプロジェクトのルートに設置します。

```
cp -r ui /path/to/yourapp
cp package.json /path/to/yourapp
```

次にモジュールのインストール。

```
cd /path/to/yourapp
npm install
```

ReactでSSR（サーバーサイドレンダリング）をする場合は`react-php-v8js`をインストールします。
[V8Js PHP extension](https://github.com/phpv8/v8js)が必要です。

```
composer require reactjs/react-php-v8js
```
 
### ディレクトリ構造
 
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

既存のPHPプロジェクトへの追加が容易です。

## 設定

アプリケーションディレクトリの設定を`ui/ui.config.js`で行います。

**ui/ui.config.js**

 * **public** 公開ディレクトリ
 * **build** JS/CSS出力ディレクトリ
 * **watch\_to\_sync** ブラウザシンクをする対象ディレクトリ
 * **cleanup_dir** PHPファイルを更新した時にクリアするディレクトリ
 * **server** テストサーバー

`ui/entry.js`にはページ単位でJSのファイルを指定します。

```
module.exports = {
  react: 'src/react.js',
  helloworld: 'src/testing_examples/helloworld.js',
};
```

ReactでSSRを行うためには最初の`react`のエントリーが必要です。

## 実行

```
npm start
```

アプリケーションの`cleanup_dir`ディレクトリを消去し、cssやjsをwebpackでバンドルして`build`フォルダに出力し`server`で指定したビルトインサーバーを実行します。

```
npm run start-hot
```

PHPやJS、Twigのテンプレートファイル等が更新された時にブラウザを自動で再読み込みさせるためには`start-hot`コマンドで使用します。


## テスト

```
npm test      
```

JSのテストをKarma+Mocha+Chaiで実行、監視します。設定を変更するには`karma.conf.js`を編集します。

```
npm run lint
```

[ESLint](http://eslint.org/)を実行します。デフォルトのルールは[Airbnb](http://mitsuruog.github.io/javascript-style-guide/)です。変更するには`.eslintrc`を編集します。


## デモ

このリポジトリをそのまま使いコマンドの実行や`v8js`の動作確認をすることができます。デモコードは公式の[example](https://github.com/reactjs/react-php-v8js/tree/master/example)をes6+Airbnbスタイルで書き直しています。

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

