const tesseract = require('node-tesseract-ocr')

const config = {
  lang: 'eng',
  oem: 1,
  psm: 3
}

tesseract
.recognize('image.jpg').then((text) => {
  console.log('result: ', text)
}).catch((error) => {
  console.log('error', error.message)
})