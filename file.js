const fs = require('fs')

const readText =fs.readFileSync('./texts/read.txt','utf-8');

const writtenText = fs.writeFileSync('./texts/write.txt',readText + "this is my written text");
