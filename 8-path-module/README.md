# `Path` Module

Sekarang kita nyobain sebuah built-in module yang bernama `Path`.

Source code: [https://github.com/nodejs/node/blob/v20.10.0/lib/path.js](https://github.com/nodejs/node/blob/v20.10.0/lib/path.js)

# Import Module

```js
const path = require("path");
```

# Usage Example

Kita akan coba pake salah satu function yang disediakan oleh module `path` yaitu `parse()`.

```js
const path = require("path");

console.log(path.parse(__dirname));
```

Maka, signature outputnya:

```
{
  root: '/',
  dir: '/path/to/your/dir',
  base: '8-path-module',
  ext: '',
  name: '8-path-module'
}
```

Apa itu `__dirname`? Harusnya udah paham kalo udah simak materi module wrapper function sebelumnya.