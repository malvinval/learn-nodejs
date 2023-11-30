# Architecture

Sebelumnya, JavaScript cuma bisa dijalankan dalam konteks web browser. Dengan adanya NodeJS, kode JavaScript bisa dijalankan di platform selain web browser. Why? karena seorang mas mas yang bernama **Ryan Dahl** melakukan *embed* JS engine kedalam sebuah program C++. JS engine itu apa? JS engine itu program yang kerjanya mengeksekusi kode JS (yang awalnya hanya bisa didalem web browser). Masing-masing web browser punya JS enginenya masing-masing, contoh:

- Chrome: `v8 engine`
- Microsoft Edge: `Chakra engine`
- Firefox: `SpiderMonkey`

Nah, si Ryan Dahl pake `v8 engine` untuk program Node tersebut.

# Is it a programming language?

Bukan, NodeJS bukan programming language.
NodeJS juga bukan framework.
NodeJS adalah sebuah runtime environment.