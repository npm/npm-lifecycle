require('path').delimiter = ':'
const { _setPathEnv, _mergePath } = require('../')
const t = require('tap')

const snap = (t, o, m) => t.matchSnapshot(JSON.stringify(o, 0, 2), m)

t.test('setPathEnv', t => {
  const e = {
    Path: 1,
    PATH: 2,
    pAtH: 3,
    a: 'b'
  }
  _setPathEnv(e, 'a:b:c')
  snap(t, e, 'set all path envs')
  t.end()
})

t.test('mergePath', t => {
  const e = {
    Path: 'a:b:c',
    PATH: 'a:b:c:d',
    PaTh: 'd:c:x:y:z',
    pAtH: ''
  }
  snap(t, _mergePath(e), 'merge all paths together')
  t.end()
})
