# Our first program

```js
const sayHello = (name) => {
    console.log(`Hello, ${name}!`);
}

sayHello("Malvinval");
```

Coba liat kode diatas. Cuma JavaScript biasa kan? Tapi kita bisa nampilin data di terminal dengan function `console.log()`. Harusnya makin jelas disini bahwa NodeJS adalah runtime environment.

# Experiment

Coba deh jalanin kode `console.log(window)`. Outputnya kurang lebih: `window is not defined`. Kenapa? karena sekarang kode JavaScript kita dieksekusi diluar konteks web browser, jadi ga ada tuh yang namanya `window`.

# How to run?

Command: `node file_name.js` atau `node .`