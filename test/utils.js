
const emitStrPromise = (origin) => {
  return Promise.resolve(origin);
}

const uppercase = async (str) => {
  //str may be a Promise that emit a string result.
  str = await str;
  return str.toUpperCase();
}

const trimRight = async (str) => {
  str = await str;
  return str.trimRight();
}

const addGreeting = async (str, greeting) => {
  str = await str;
  return str.concat(greeting);
}

export {emitStrPromise, uppercase, trimRight, addGreeting};