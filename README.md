# vue-long-click

> Vue long click (longpress) directive

[![npm version](https://badge.fury.io/js/vue-long-click.svg)](https://www.npmjs.com/package/vue-long-click)
[![CircleCI](https://circleci.com/gh/ittus/vue-long-click.svg?style=shield)](https://circleci.com/gh/ittus/vue-long-click)
![Size](https://badgen.net/bundlephobia/min/vue-long-click)

Checkout the demo at https://ittus.github.io/vue-long-click/

![DemoGIF](./images/demo.gif)

## Install

```bash
npm install vue-long-click --save
```

```javascript
import { longClickDirective } from 'vue-long-click'

const longClickInstance = longClickDirective({delay: 400, interval: 50})
Vue.directive('longclick', longClickInstance)
```

## CDN

Include vue-long-click library from cdn
```html
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.js"></script>
<script src="https://unpkg.com/vue-long-click@0.0.4/dist/libs/vue-long-click.umd.min.js"></script>
```

and create custom directive to use

```javascript
const longClickInstance = window['vue-long-click'].longClickDirective({delay: 400, interval: 50})
Vue.directive('longclick', longClickInstance)
```
[CDN Demo on codepen](https://codepen.io/ittus/pen/BbeZOQ)


## Usage

```javascript
<button v-longclick="() => changeValue(1)">+</button>
```

## Config

| Prop                  | Type            | Default     | Description                              |
|-----------------------|-----------------|-------------|------------------------------------------|
| delay                 | Integer (milliseconds)    |      400     | Delay until long click function is fired             |
| interval                  | Integer (milliseconds)         |    50         | If value is greater than 0, handler function will be fire every `interval` milliseconds when component is pressed

## Development

```bash
## Project setup
npm install

## Compiles and hot-reloads for development
npm run serve

## Build library
npm run build:lib

## Run tests
npm run test

## Lints and fixes files
npm run lint
```
