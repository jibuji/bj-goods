
import  {Transferer, isPromise} from '..';
import should from 'should';
import {emitStrPromise, uppercase, trimRight, addGreeting} from './utils';
import fp from 'lodash/fp';

describe('test transferer', ()=>{

  describe('transfer should convey data to handler function correctly.', function(){
    it('should transferring success', (done) => {
      let rst = new Transferer(emitStrPromise("I am just born.  "))
      .transfer(uppercase)
      .transfer(trimRight)
      .transfer(fp.curryRight(addGreeting)('[hello world]')).get();
      rst.then(rst=> {
        rst.should.equal("I AM JUST BORN.[hello world]");
        done();
      }).catch(e=>{
        console.log('e:', e)
      });
      
    })
  })
});
