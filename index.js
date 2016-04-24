
import Transferer from './lib/transferer';
const isPromise = (obj) => {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
};


export {Transferer, isPromise};