const { createConnection } = require('net')

connect()

function connect() {
  const client = createConnection({ port: 8124 })
    .on('connect', () => console.log('connected to server!'))
    .on('data', data => {
      console.log(data.toString())
      setTimeout(() => client.write(data), 1000)
    })
    .on('end', () => {
      console.log('disconnected from server')
      setTimeout(connect, 1000)
    })
    .on('error', err => console.log(err))
    .on('error', err => setTimeout(connect, 1000))
}
