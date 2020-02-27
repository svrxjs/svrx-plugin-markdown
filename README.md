# svrx-plugin-markdown

[svrx](https://github.com/x-orpheus/svrx) plugin for markdown

## Usage

> **please confirm you have [installed svrx](https://github.com/x-orpheus/svrx) already**

## Feature

- Hot reload when file changes (not full render)
- Auto jump to the file you are editing
- Auto scroll to the area you are editing
- Two builtin theme `light` and `dark`, follow github markdown syntax highlighter

![](https://p1.music.126.net/CGcwkdjuF5a7dxBh12tpiA==/109951164748490623.png)

### Via CLI

```sh
svrx --markdown
```

or

```sh
svrx -p markdown?theme=light
```

### Via API

```js
const svrx = require('@svrx/svrx');

svrx({ plugins: [ 'markdown' ] }).start();
```


## Options

- theme: `string`, default is `dark`, you can also use `light` to switch light mode.
- auto: `boolean`, auto jump to the markdown you are editing. default is `true`


## License

MIT