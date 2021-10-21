function arrayPlusArray(arr1, arr2) {
    function sum (arr){
      return arr.reduce((a,b) => a + b, 0)
    }
    return sum(arr1) + sum(arr2)
  }