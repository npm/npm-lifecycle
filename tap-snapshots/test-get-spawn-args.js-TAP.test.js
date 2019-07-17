/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/get-spawn-args.js TAP > custom windows script shell 1`] = `
[
  "flerbbyderb",
  [
    "-c",
    "cmd"
  ],
  {
    "cwd": "/working/dir",
    "env": {
      "env": "iron",
      "men": "tal"
    },
    "stdio": [
      0,
      1,
      2
    ],
    "uid": 123,
    "gid": 432
  }
]
`

exports[`test/get-spawn-args.js TAP > just basics 1`] = `
[
  "sh",
  [
    "-c",
    "cmd"
  ],
  {
    "cwd": "/working/dir",
    "env": {
      "env": "iron",
      "men": "tal"
    },
    "stdio": [
      0,
      1,
      2
    ],
    "uid": 123,
    "gid": 432
  }
]
`

exports[`test/get-spawn-args.js TAP > stdio and numeric string uid 1`] = `
[
  "sh",
  [
    "-c",
    "cmd"
  ],
  {
    "cwd": "/working/dir",
    "env": {
      "env": "iron",
      "men": "tal"
    },
    "stdio": [
      3,
      2,
      1
    ],
    "uid": 123,
    "gid": 432
  }
]
`

exports[`test/get-spawn-args.js TAP > unsafe numeric string uid 1`] = `
[
  "sh",
  [
    "-c",
    "cmd"
  ],
  {
    "cwd": "/working/dir",
    "env": {
      "env": "iron",
      "men": "tal"
    },
    "stdio": [
      3,
      2,
      1
    ]
  }
]
`

exports[`test/get-spawn-args.js TAP > weird comspec 1`] = `
[
  "flerbbyderb",
  [
    "-c",
    "cmd"
  ],
  {
    "cwd": "/working/dir",
    "env": {
      "env": "iron",
      "men": "tal"
    },
    "stdio": [
      0,
      1,
      2
    ],
    "uid": 123,
    "gid": 432
  }
]
`

exports[`test/get-spawn-args.js TAP > windows 1`] = `
[
  "CMD.exe",
  [
    "/d /s /c",
    "cmd"
  ],
  {
    "cwd": "/working/dir",
    "env": {
      "env": "iron",
      "men": "tal"
    },
    "stdio": [
      0,
      1,
      2
    ],
    "uid": 123,
    "gid": 432,
    "windowsVerbatimArguments": true
  }
]
`
