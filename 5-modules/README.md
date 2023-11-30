# Modules

Modules adalah penerapan konsep dalam inisialisasi aplikasi. Intinya bertujuan untuk bikin aplikasi kita *maintainable* karena dipisah-pisahin tiap file maupun directory yang ada. Sehingga kita gaperlu bikin aplikasi kita semuanya dalam scope global yang setiap datanya bisa saling overwrite satu sama lain.


Dalam konsep ini, setiap file dalam aplikasi kita akan disebut sebagai *module*. Setiap data yang ada didalam module tersebut tidak akan bisa dibaca oleh module lain **apabila tidak di-*export***.