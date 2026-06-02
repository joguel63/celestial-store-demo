import { readdir, stat } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const __dirname = dirname(fileURLToPath(import.meta.url))
const assetsDir = join(__dirname, '..', 'src', 'assets')

async function* walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = join(dir, entry.name)
    if (entry.isDirectory()) {
      yield* walk(fullPath)
    } else if (entry.isFile() && entry.name.endsWith('.png')) {
      yield fullPath
    }
  }
}

let count = 0
let totalOriginal = 0
let totalConverted = 0

for await (const pngPath of walk(assetsDir)) {
  const webpPath = pngPath.replace(/\.png$/, '.webp')
  const originalSize = (await stat(pngPath)).size
  totalOriginal += originalSize

  await sharp(pngPath).webp({ quality: 85 }).toFile(webpPath)
  const convertedSize = (await stat(webpPath)).size
  totalConverted += convertedSize

  const reduction = ((1 - convertedSize / originalSize) * 100).toFixed(1)
  console.log(`${pngPath.split('assets\\')[1]}  ${(originalSize / 1024).toFixed(1)}KB -> ${(convertedSize / 1024).toFixed(1)}KB (${reduction}% less)`)
  count++
}

const totalReduction = ((1 - totalConverted / totalOriginal) * 100).toFixed(1)
console.log(`\nTotal: ${count} images, ${(totalOriginal / 1024).toFixed(1)}KB -> ${(totalConverted / 1024).toFixed(1)}KB (${totalReduction}% less)`)
