// example
// arr1 = [3, 1, 10, 4]
// [3] [1] [10] [4]
// [1, 3] [4, 10]
// [1, 3, 4, 10]

const findMinAndRemoveSorted = (array) => {
  const smallestNum = array[0]
  return array.shift()

}

const merge = (firstHalf, secondHalf) => {
  let mergedArray = []
  while (firstHalf.length !== 0 && secondHalf.length !== 0) {
    if (firstHalf[0] < secondHalf[0]) {
      mergedArray.push(findMinAndRemoveSorted(firstHalf))
    } else {
      mergedArray.push(findMinAndRemoveSorted(secondHalf))
    }
  }
  return mergedArray.concat(firstHalf).concat(secondHalf)
}

const mergeSort = (array) => {
  let midpoint = array.length/2
  let firstHalf = array.slice(0, midpoint)
  let secondHalf = array.slice(midpoint, array.length)

  if (array.length < 2 ) {
    return array
  } else {
    return merge(mergeSort(firstHalf), mergeSort(secondHalf))
  }
}
