function find_average(array) {
  if(array.length == 0){
    return 0
  }else{
    let fN = 0
    let fNN = 0
    for(let i=0; i<array.length; i++){
      fN += array[i]
    }
    fNN = fN/array.length
    return fNN
  }
}