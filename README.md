# svrx-plugin-markdown

[svrx](https://github.com/x-orpheus/svrx) plugin for markdown

## Usage

> **please confirm you have [installed svrx](https://github.com/x-orpheus/svrx) already**

### Via CLI

```sh
svrx --markdown
```

### Via API

```js
const svrx = require('@svrx/svrx');

svrx({ plugins: [ 'markdown' ] }).start();
```

## Options

- auto: `boolean`, auto jump to the markdown you are editing. default is `true`

## License

MIT