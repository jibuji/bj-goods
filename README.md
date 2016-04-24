# bj-goods
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


