import Bun from 'bun'

Bun.serve({
  port: 9001,
  development: true,
  fetch(req) {
    const url = new URL(req.url)
    switch (url.pathname) {
      case '/login':
        return new Response('<h1>Hello From Login</h1>')

      default: {
        return new Response('<h1>Hello From Bun</h1>')
      }
    }
  },
})

console.log('Server started at port 9001')
