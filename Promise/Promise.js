const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: 'John',
      age: 23,
      location: 'France'
    })
    reject('Something went wrong')
  }, 3000)
})


promise.then((data) => {
  console.log('First data: \n', data)
}).catch((error) => {
  console.log('Error Messsage: \n', error)
}) 


// Promise Chaining
promise.then((data) => {
  console.log('First data: \n', data)
  return data
}).then((secondData) => {
  console.log('Second data: \n', secondData.name)
}).catch((error) => {
  console.log('Error Messsage: \n', error)
})

// Chaining Promise
promise.then((data) => {
  console.log('First data: \n', data)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('This is my second Promise')
    }, 5000)
  })
}).then((secondData) => {
  console.log('Second data: \n', secondData)
}).catch((error) => {
  console.log('Error Messsage: \n', error)
})