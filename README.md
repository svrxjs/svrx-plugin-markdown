# svrx-plugin-webpack

[![Greenkeeper badge](https://badges.greenkeeper.io/x-orpheus/svrx-plugin-markdown.svg)](https://greenkeeper.io/)

markdown plugin for [svrx](https://github.com/x-orpheus/svrx)

## Usage

> **please confirm you have [installed svrx](https://github.com/x-orpheus/svrx) already**

## Usage

### cli

```sh
svrx --markdown
```

### manual

```js
const svrx = require('svrx');

svrx({ plugins: [ 'markdown' ] }).start();
```

## Options

- auto: `boolean`,auto jump to the markdown you are editing. default is `true`
