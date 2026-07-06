import sharp from 'sharp'
import { writeFileSync } from 'node:fs'

const INPUT = 'public/img/logo-temp.png'

const sizes = [16, 32, 48, 64]

for (const size of sizes) {
  await sharp(INPUT)
    .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(`public/favicon-${size}x${size}.png`)
  console.log(`Generated favicon-${size}x${size}.png`)
}

console.log('Done')
