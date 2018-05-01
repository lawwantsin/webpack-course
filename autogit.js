const S = require("shelljs")
const BRANCHES = require("./branches.json")
const ARGS = process.argv.slice(2)[0]

const X = cmd => {
  return S.exec(cmd, { silent: true }).stdout.trim()
}

const allBranches = () => {
  return X("git branch")
    .split("\n")
    .map(line => line.trim().replace("* ", ""))
}

const getCurrent = () => {
  return X("git rev-parse --abbrev-ref HEAD")
}

const branch = name => {
  if (BRANCHES[name]) return BRANCHES[name]
  else console.error(`Branch ${name} isn't in the list!`)
  return {}
}

const move = nextOrPrev => {
  const next = branch(getCurrent())[nextOrPrev]
  X(`git checkout ${next}`)
}

const moveNext = () => {
  move("next")
}

const movePrev = () => {
  move("prev")
}

const remakeJSON = () => {
  let newJSON = {}
  keys = Object.keys(BRANCHES)
  keys.map((key, index) => {
    current = BRANCHES[key]
    prev = keys[index - 1]
    next = keys[index + 1]
    newJSON[key] = { prev: prev, next: next }
  })
  const fileContents = JSON.stringify(newJSON)
  X(`mv branches.json branches.json.bak`)
  X(`echo ${fileContents} > branches.json`)
}

if (ARGS === "next") moveNext()
if (ARGS === "prev") movePrev()
if (ARGS === "remake") remakeJSON()
