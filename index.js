const { readFile } = require('fs')
const { green, magenta, red } = require('chalk')
const h = require('highland')

const doFileStuff = file => h.wrapCallback(readFile)(file)
  .map(contents =>
    `${green(file)}: ${magenta(contents.toString())}`)

h(process.stdin)
  .map(buffer => buffer.toString())
  .flatMap(lines => lines.split('\n'))
  .compact()
  .flatMap(doFileStuff)
  .errors((err, push) => push(null, `${red(err)}\r`))
  .pipe(process.stdout)
