const tesseract = require('node-tesseract-ocr')
const { readFile } = require('fs/promises')

async function main() {
  console.log('hello')
  const img = (await readFile('image.jpg')).buffer()
  const text = await tesseract.recognize(img)
  console.log(text);
}

main()