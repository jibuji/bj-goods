
import  {Transferer, isPromise} from '../src';
import should from 'should';
import {emitStrPromise, uppercase, trimRight, addGreeting} from './utils';
import fp from 'lodash/fp';

describe('test bj-goods', ()=>{

  describe('transfer should convey data to handler function correctly.', () => {
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
  });

  describe('isPromise should work correctly', () => {
    it('should be a Promise', (done) => {
      let promise = Promise.resolve("hello world");
      let rst = isPromise(promise);
      rst.should.equal(true);
      done();
    });

    it('shouldn\'t be a Promise', (done) => {
      let str = 'hello world';
      let rst = isPromise(str);
      rst.should.equal(false);
      done();
    });
  })

});
