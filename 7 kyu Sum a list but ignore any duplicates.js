function sumNoDuplicates(numList) {
    const uniqueArr=numList.filter((num,index)=>numList.indexOf(num)===index&&numList.lastIndexOf(num)===index)
    return uniqueArr.reduce((x,y)=>x+y,0);
}