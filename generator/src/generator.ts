import { writeFileSync } from "fs";

export const createFileWithTemplate = (filePath: string): void => {
  const startTemplate = 'def checkNumber(number):'

  writeFileSync(filePath, startTemplate)
}

export const generateTheGreatIfWall = (n: number): string => {
    const TheGreatIfString = `  if(number == ${n}):\n    return('${fizzBuzz(n)}')\n`
    if (n > 1) {
        return generateTheGreatIfWall(n - 1) + TheGreatIfString
    } else {
        return TheGreatIfString
    }
}

export const generateTheGreatPrintWall = (n: number): string => {
    const TheGreatPrintString = `print(checkNumber(${n}))\n`
    if (n > 1) {
        return generateTheGreatPrintWall(n - 1) + TheGreatPrintString
    } else {
        return TheGreatPrintString
    }
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