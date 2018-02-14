const Koa = require('koa')
const isPrime = require('is-prime');

const app = new Koa()

app.use(async ctx => {

  const primeNumber = ctx.request.query.number
//console.log(primeNumber)
//console.log(nextPrime(primeNumber))
  const response = {
    next_prime_number: nextPrime(primeNumber)
  }

  ctx.body = response
})

function nextPrime(primeNumber) {
  let testNumber = primeNumber
  while(true) {
    if(isPrime(++testNumber)) {
      return testNumber
    }
  }
}

app.listen(process.env.PORT || 8081)
