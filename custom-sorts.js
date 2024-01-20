function ageSort(users) {
  // Your code here
  if (users.length <= 1) return users
  const pivot = users[0]
  const left = []
  const right = []

  for (let i = 1; i < users.length; i++) {
    const user = users[i]
    if (user.age < pivot.age) {
      left.push(user)
    } else {
      right.push(user)
    }
  }

  let sortedLeft = ageSort(left)
  let sortedRight = ageSort(right)

  return [...sortedLeft, pivot, ...sortedRight]
}

function oddEvenSort(arr) {
  // Your code here
  return arr.sort((a, b) => {
    if (a % 2 === 0 && b % 2 === 1) return 1
    if (a % 2 === 1 && b % 2 === 0) return -1
    return a - b
  })
}

function validAnagrams(s, t) {
  // Your code here
  let sorteds = s.split('').sort()
  let sortedt = t.split('').sort()

  return sorteds.join('') === sortedt.join('')
}

function reverseBaseSort(arr) {
  // Your code here
  let sorted = []
  let base = 0

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].toString().length > base) {
      base = arr[i].toString().length
    }
  }
  
  while (base > 0) {
    const baseArray = arr.filter(num => num.toString().length === base).sort()
    sorted = [...sorted, ...baseArray]
    base--
  }

  return sorted
}

function frequencySort(arr) {
  // Your code here
  const info = []


  for (let i = 0; i < arr.length; i++) {
    let element = info.find(obj => obj.number === arr[i])
    if (element === undefined) {
      let element = {
        number: arr[i],
        frequency: 1
      }
      info.push(element)
    } else {
      element.frequency++
    }
  }

  info.sort((a, b) => b.number - a.number)
  .sort((a, b) => a.frequency - b.frequency)
  
  return info.reduce((array, element) => {
    while (element.frequency > 0) {
      array.push(element.number)

      element.frequency--
    }

    return array
  }, [])
}


module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];