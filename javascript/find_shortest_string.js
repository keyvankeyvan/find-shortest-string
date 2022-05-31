function findShortestString(arr) {
  // type your code here
  let shortest = arr[0]
  arr.forEach(word => {
    let shortlen = shortest.length
    if (word.length < shortlen){
      shortest = word
    }
  })
  return shortest
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  // BENCHMARK HERE
  let longArr = []
  for (let i = 0; i < 1000; i++){
    let randString = Math.floor(Math.random() * 999999999)
    longArr.push(randString)
  }
  startTime = Date.now()
  for (let j = 0; j < 90000; j++){
    findShortestString(longArr)
  }
  console.log(Date.now() - startTime)
}

module.exports = findShortestString;

// Please add your pseudocode to this file
// And a written explanation of your solution
