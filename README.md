# bj-goods
###Transferer
It's a simple tool for transfer data to handling function like a chain. it is more intuitive than lodash's `flow`.

for exmaple:
```
import {Transferer} from 'bj-goods';
let rst = new Transferer(emitStrPromise("I am just born.  "))
      .transfer(uppercase)
      .transfer(trimRight)
      .transfer(print).get();
console.log(rst);
```

