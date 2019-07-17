const t = require('tap')
const getSpawnArgs = require('../')._getSpawnArgs

// these show up in the result, but aren't forked on
// just set the same for every case.
const cmd = 'cmd'
const wd = '/working/dir'
const env = { env: 'iron', men: 'tal' }
const b = { cmd, wd, env, uid: 123, gid: 432, opts: {} }

t.matchSnapshot(getSpawnArgs(b), 'just basics')

t.matchSnapshot(getSpawnArgs(Object.assign({}, b, {
  opts: { stdio: [3, 2, 1] },
  uid: '123'
})), 'stdio and numeric string uid')

t.matchSnapshot(getSpawnArgs(Object.assign({}, b, {
  opts: { stdio: [3, 2, 1] },
  uid: '123',
  unsafe: true
})), 'unsafe numeric string uid')

process.env.comspec = 'CMD.exe'
t.matchSnapshot(getSpawnArgs(Object.assign({}, b, {
  opts: {
    _TESTING_FAKE_WINDOWS_: true
  }
})), 'windows')

t.matchSnapshot(getSpawnArgs(Object.assign({}, b, {
  opts: {
    _TESTING_FAKE_WINDOWS_: true,
    scriptShell: 'flerbbyderb'
  }
})), 'custom windows script shell')

process.env.comspec = 'flerbbyderb'
t.matchSnapshot(getSpawnArgs(Object.assign({}, b, {
  opts: {
    _TESTING_FAKE_WINDOWS_: true
  }
})), 'weird comspec')
