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

const handleResolvedOrRejectedPromise = () => {
};

const pauseForMs = () => {
};

module.exports = {
  resolvedWrapper,
  rejectedWrapper,
  handleResolvedPromise,
  handleResolvedOrRejectedPromise,
  pauseForMs,
};
