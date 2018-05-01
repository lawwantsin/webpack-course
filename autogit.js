const S = require("shelljs")

const X = cmd => {
  return S.exec(cmd, { silent: true }).stdout.trim()
}

const allBranches = () => {
  return X("git branch")
    .split("\n")
    .map(line => line.trim().replace("* ", ""))
}

console.log(allBranches())
