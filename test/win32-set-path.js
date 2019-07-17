// test that windows gets the expected path environ name
// use Path if present, then PATH, then any /^PATH$/i
const main = () => {
  const { spawn } = require('child_process')
  // [env keys, expect]
  const cases = [
    [['Path', 'PATH', 'pAtH'], 'Path'],
    [['path', 'PATH', 'pAtH'], 'pAtH'],
    [['Path', 'PATH', 'htap'], 'Path'],
    [['path', 'PATH', 'htap'], 'PATH']
  ]

  const t = require('tap')
  t.plan(cases.length)
  t.jobs = cases.length
  cases.forEach(c => {
    t.test(JSON.stringify(c), t => {
      t.plan(1)
      const proc = spawn(process.execPath, [__filename].concat(c[0]))
      proc.stderr.pipe(process.stderr)
      const out = []
      proc.stdout.on('data', d => out.push(d))
      proc.on('close', () => t.equal(Buffer.concat(out).toString().trim(), c[1]))
    })
  })
}

const child = () => {
  process.env = {
    __TESTING_FAKE_PLATFORM__: 'win32',
    [process.argv[2]]: 1,
    [process.argv[3] || 'ignore']: 2,
    [process.argv[4] || 'blerp']: 3
  }

  console.log(require('../')._pathEnvName)
}

if (process.argv[2]) { child() } else { main() }
