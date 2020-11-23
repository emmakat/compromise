const nlp = require('../../src')
let penn = require('../../tests/_pennSample')
let patterns = require('./patterns')
let manual = require('./manual').map(str => {
  return { text: str }
})
let texts = penn.concat(manual)

texts.forEach(sentence => {
  let doc = nlp(sentence.text)
  doc.reasons.forEach(r => {
    patterns[r] += 1
  })
})
let arr = Object.keys(patterns).map(k => [k, patterns[k]])
arr = arr.sort((a, b) => {
  if (a[1] > b[1]) {
    return -1
  } else if (a[1] < b[1]) {
    return 1
  }
  return 0
})
arr.forEach(a => {
  console.log(a[0] + '\t' + a[1])
})
// console.log(JSON.stringify(arr, null, 2))
