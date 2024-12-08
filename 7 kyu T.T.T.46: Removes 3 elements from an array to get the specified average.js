function remove3Elements(arr,average){
    if (arr.length==3 && average!=0) return [];   // no...
    let target = arr.reduce((x,y)=>x+y,0) - average*(arr.length-3);
    for (let i=0; i<arr.length; i++){
        for (let j=i+1; j<arr.length; j++){
            for (let k=j+1; k<arr.length; k++){
                if (arr[i]+arr[j]+arr[k]==target){
                    return [arr[i], arr[j], arr[k]];
                }
            }
        }
    }
    return []
}
