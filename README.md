# bj-goods

`npm install --save bj-goods`

###1. Transferer
It's a simple tool for transfer data to handling function like a chain. it is more intuitive than lodash's `flow` function.

for exmaple:
```
import {Transferer} from 'bj-goods';
let rst = new Transferer(Promise.resolve("I am just born.  "))
      .transfer(uppercase)
      .transfer(trimRight)
      .transfer(print).get();
console.log(rst);
```
####2. isPromise
This is an util function which check whether an object is an Promise Object.

for exmaple:
```
import {isPromise} from 'bj-goods';
let promise = Promise.resolve('hello world');
let rst = isPromise(promise);
console.log(rst);
```
