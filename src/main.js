require("babel-runtime/regenerator")
require("./main.css")
require("./images/link.jpg")
require("./index.html")

var a = async args => {
  const { a, b } = args
  await console.log("Hello from the future!", a, b)
}

a({ a: 1, b: 2 })
