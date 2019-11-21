import { createFileWithTemplate, generateTheGreatIfWall, generateTheGreatPrintWall } from './generator'
import { appendFileSync } from 'fs'

const range = parseInt(process.argv[2])
const content = `${generateTheGreatIfWall(range)}\n${generateTheGreatPrintWall(range)}`
const path = '../FizzBuzz.py'

createFileWithTemplate(path)
appendFileSync(path, content)