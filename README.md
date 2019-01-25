You can visit this website at http://s3.funofbooks.hu

# FunOfBooks web application

Check out the application's [backend](https://github.com/lantos14/funofbooks-server) as well.

## Introduction

Greetings Dear Visitor!

My name is Tibor Lantos and I'm a stalwart junior software developer with the aim to become a pro web application developer.

If you're here, you probably curious about my code, so feel free to browse in my repo.

FunOfBooks is a little project of mine. I didn't want to make a website with my CV, instead I decided that my promo page will be about one of my life-long hobby: reading.
Yeah, I'm reading.. a lot. Mainly fantasy novels. So I combined this with my other passion: web development.

FunOfBooks is in a very basic state now but I'll try to add as many features to it as possible, so visit frequently for updates.

## Technologies

I started with [React Slingshot](https://github.com/coryhouse/react-slingshot) boilerplate, and currently the website is actively using the following technologies:

| **Tech** | **Description** |
|----------|-------|
|  [React](https://facebook.github.io/react/)  |  Fast, composable client-side components. |
|  [Redux](http://redux.js.org)  |  Enforces unidirectional data flows and immutable, hot reloadable store. I used [saga](https://github.com/redux-saga/redux-saga) as my middleware  |
|  [React Router](https://github.com/reactjs/react-router) | A complete routing library for React |
|  [Bulma](https://bulma.io/) | I wanted to try out something new. I've already tried out the [Ant Design](https://ant.design/) React UI framework and I loved it, but I wanted to broaden my knowledge, so I tried out Bulma.
|  [Babel](http://babeljs.io) |  Compiles ES6 to ES5.  |
|  [Webpack](https://webpack.js.org) | Bundles npm packages and our JS into a single file. Includes hot reloading via [react-transform-hmr](https://www.npmjs.com/package/react-transform-hmr). |
|  [Browsersync](https://www.browsersync.io/) | Lightweight development HTTP server that supports synchronized testing and debugging on multiple devices. |
|  [Jest](https://facebook.github.io/jest/) | Automated tests with built-in expect assertions and [Enzyme](https://github.com/airbnb/enzyme) for DOM testing without a browser using Node. -- *Writing tests for components is in progress*|
|  [TrackJS](https://trackjs.com/) | JavaScript error tracking. |
|  [ESLint](http://eslint.org/)| Lint JS. Reports syntax and style issues. Using [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) for additional React specific linting rules. |
|  [SASS](http://sass-lang.com/) | Compiled CSS styles with variables, functions etc.. |
|  [PostCSS](https://github.com/postcss/postcss) | Transform styles with JS plugins. Used to autoprefix CSS |
|  [Editor Config](http://editorconfig.org) | Enforce consistent editor settings (spaces vs tabs, etc). | [IDE Plugins](http://editorconfig.org/#download) |
|  [npm Scripts](https://docs.npmjs.com/misc/scripts)| Glues all this together in a handy automated build. |
|  [webpack-dotenv](https://www.npmjs.com/package/dotenv-webpack)| I needed to hide my credentials about my server connection. |
