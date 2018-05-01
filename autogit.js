const S = require("shelljs")
const BRANCHES = require("branches.json")
const ARGS = process.argv.slice(2)

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

if (ARGS === "next") moveNext()
if (ARGS === "prev") movePrev()
