import fs from 'fs'
import path from 'path'

export const listFiles = (dir: string) => {
  const directoryPath = path.join(process.cwd(), dir)
  const files = fs.readdirSync(directoryPath)

  return files.filter((file) => /\.(jpg|jpeg|png|mp4|mov)$/i.test(file))
}
