# `OS` Module

Sekarang kita nyobain sebuah built-in module yang bernama `OS`.

Source code: [https://github.com/nodejs/node/blob/v20.10.0/lib/os.js](https://github.com/nodejs/node/blob/v20.10.0/lib/os.js)

# Import Module

```js
const os = require("os");
```

# Usage Example

Kita akan coba pake salah satu function yang disediakan oleh module `path` yaitu `freemem()` untuk menghitung berapa total memory kosong pada mesin kita.

```js
const os = require("os");

console.log(`Free memory size: ${os.freemem()} bytes.`);
```

Maka, signature outputnya adalah:

```
Free memory size: 12311638016 bytes.
```