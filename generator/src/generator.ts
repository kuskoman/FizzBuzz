import { writeFileSync } from "fs";

export const createFileWithTemplate = (filePath: string): void => {
  const startTemplate = 'def checkNumber(number):'

  writeFileSync(filePath, startTemplate)
}

export const generateTheGreatIfWall = (range: number): string => {
    let theGreatIfWall = '\n'
    let i = 0
    while (i < range) {
        theGreatIfWall += `  if(number == ${i}):\n    return('${fizzBuzz(i)}')\n`
        i += 1
    }

    return theGreatIfWall
}

export const generateTheGreatPrintWall = (range: number): string => {
  let theGreatNumberWall = ''

  let i = 0
  while (i < range) {
      theGreatNumberWall += `print(checkNumber(${i}))\n`

      i += 1
  }

  return theGreatNumberWall
}

const fizzBuzz = (number: number): string => {
    let newWord = ''
  
    if (number % 3 == 0) {
      newWord += 'Fizz'
    }
    if (number % 5 == 0) {
      newWord += 'Buzz'
    }
  
    if (newWord) {
      return newWord
    } else {
      return number.toString(10)
    }
  }