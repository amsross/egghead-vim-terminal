const { createServer } = require('net')

process.stdin
  .pipe(process.stdout)

listen()

function listen () {
  createServer()
    .on('connection', c => {
      console.log('client connected')
      c.on('end', () => console.log('client disconnected'))
      c.pipe(c)
    })
    .on('error', err => console.log(err))
    .on('error', err => setTimeout(listen, 500))
    .listen(8124, () => console.log('server bound'))
}
