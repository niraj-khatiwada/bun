import Bun from 'bun'

Bun.serve({
  port: 9001,
  development: true,
  fetch(req) {
    console.log(new URL(req.url))
    return new Response('<h1>Hello From Bun</h1>')
  },
})
console.log('Server started at port 9001')
