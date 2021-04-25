// Find the longest word in a string

function findLongestWord(str) {
  let words = str.split(' ')
  let longest = ''
  for (let word of words) {
    if (word.length > longest.length) {
      longest = word
    }
  }
  return longest.length
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'))

// or

function oneLineFindLongestWord(str) {
  return str.split(' ').sort(function(a, b) {
    return b.length - a.length
  })[0]
}

console.log(oneLineFindLongestWord('The quick brown fox jumped over the lazy dog'))
