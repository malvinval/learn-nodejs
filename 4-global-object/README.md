# Global Object

Global object adalah object yang bisa diakses dari program manapun di aplikasi kita. Makanya disebut global. Contohnya gimana? Baca kode ini:

```js
global.console.log(1);
```

atau

```js
globalThis.console.log(1);
```

Codenya valid, bisa dieksekusi tanpa error. Dari kode diatas harusnya bisa paham bahwa `console` adalah bagian dari global object. Tapi kita ga wajib menulis prefix `global`, langsung aja `console.log()`.