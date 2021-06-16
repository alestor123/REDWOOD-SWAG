const redwood = require('./App');
(async () => {
  console.log(await redwood({
    email: 'example@email.com',
    username: 'example',
    name: 'example',
    address1: 'example address1',
    address2: 'exaple address2',
    city: 'exaple city',
    state: 'exaple state',
    postal_code: 'exaple postal_code',
    country: 'exaple country',
    comment: 'example comment'
  }))
})()
