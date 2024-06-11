const resolvedWrapper = (val) => {
  return promise = new Promise((resolve) => {
    resolve(val)
  })
};

const rejectedWrapper = (mes) => {
return new Promise((_, reject)=> {
  reject(new Error (mes))
})
};

const handleResolvedPromise = (prom) => {
 return prom.then(val => {console.log(val)
  return val
 })
};

const handleResolvedOrRejectedPromise = (promise) => {
  return promise.then(val => { console.log(val) 
    return val 
  }) 
  .catch(error =>{
    console.error(`Your error message was: ${error.message}`)
    return null
  }
  )
};

const pauseForMs = (millis) => {
const promise = new Promise((resolve, reject)=> {
  setTimeout(() => {
    resolve(); 
  }, millis);
});
  return promise 
};

module.exports = {
  resolvedWrapper,
  rejectedWrapper,
  handleResolvedPromise,
  handleResolvedOrRejectedPromise,
  pauseForMs,
};
