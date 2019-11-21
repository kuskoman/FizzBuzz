import { createFileWithTemplate, generateTheGreatIfWall, generateTheGreatPrintWall } from './generator'
import { appendFileSync } from 'fs'

const maxNumber = parseInt(process.argv[2])
const content = `\n${generateTheGreatIfWall(maxNumber)}\n${generateTheGreatPrintWall(maxNumber)}`
const path = '../FizzBuzz.py'

createFileWithTemplate(path)
appendFileSync(path, content)