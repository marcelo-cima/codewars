import fs from "fs/promises"

function numberToString(num: number) {
    return num.toString()
}

// Test

console.log(numberToString(123))

const number = 123

if (typeof number === "string") {
  console.log("Is String")
} else
{
  console.log("Not String")
}