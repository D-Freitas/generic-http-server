const http = require('http')

const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' })
  response.write('Hello :)')
  response.end()
})

const port = 3000

server.listen(port, () => console.log(`listening on port ${port}`))
