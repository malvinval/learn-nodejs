# Create a Module

Baca kode di file `logger.js`:

```js
const log = (message) => {
    console.log(message);
}

module.exports.logf = log;
```

Penjelasan:

- `module.exports.logf` artinya kita mengirim function `log` kedalam object `exports` sehingga nantinya function tersebut dapat dipanggil dari module lain dengan nama `logf`. Ingat, `logf` itu contoh penamaan untuk pemanggilan function `log` oleh module lain.

# Load a Module

Untuk load sebuah module, pake function `require()`. Contoh, kita mau load module `logger.js` didalam module utama kita yaitu `app.js`. Maka, kodenya adalah:

```js
const logger = require("./logger");

logger.logf("okay");
```

Bisa dilihat, yang kita panggil adalah `logf()`. Karena itu yang ada didalam exports object.

# Experiment

Code:

```js
const logger = require("./logger");

console.log(logger);
```

Output:

```
{ logf: [Function: log] }
```

Jelas ya? ada function `logf` yang berisi function `log` dalam object tersebut.

# Export Multiple Functions

Kalo mau export banyak function dari sebuah module, kodenya bisa ditulis seperti ini:

```js
module.exports = {
    logf: log,
    errf: errf
}
```

dan functions tersebut bisa di consume dengan cara seperti apa yang ada di file `app.js`.