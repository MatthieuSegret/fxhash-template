# fxhash template by Matt Circles

This is the template I use to start a new project on **fxhash**. It is agnostic of any framework: p5js, threejs, etc. You can use it to avoid wasting time on the boilerplate.

It allows you to have a comfortable development environment with **typescript**, **linter**, **formatter**, **live reloading**, **sourcemap**, **zipped bundle building**, etc.

## Technologies

- [TypeScript](https://github.com/Microsoft/TypeScript) - A superset of JavaScript that compiles to clean JavaScript output.
- [Webpack](https://github.com/webpack/webpack) - A bundler for javascript and friends. Packs many modules into a few bundled assets.
- [Eslint](https://eslint.org/) - A Linter which statically analyzes your code to quickly find problems.
- [Prettier](https://eslint.org/) - An opinionated code formatter.

## Prerequisites

You will need to have [nodejs](https://nodejs.org/) installed.

## Getting Started

- Checkout the fxhash-template git tree from Github

```sh
$ git clone https://github.com/MatthieuSegret/fxhash-template.git your_project_name
$ cd your_project_name
```

- Install the javascript packages :

```sh
$ npm install
```

- Start client in development mode. You should be able to go to `http://localhost:8080` :

```sh
$ npm start
```

## Build

It will create a `dist-zipped/project.zip` file which can be directly imported on fxhash.

```sh
$ npm run build
```

Made by [Matt Circles](https://twitter.com/matt_circles)
