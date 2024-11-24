const split = (arr, len) => arr.length<=len ? [arr] : [arr.slice(0, len), ...split(arr.slice(len), len)];
function makeMatrix(arr1,arr2){
    const result = [...arr1.filter(v=>!arr2.includes(v)), ...arr2.filter(v=>!arr1.includes(v))].sort((a,b)=>a-b);
    const len = Math.sqrt(result.length)|0;
    return split(result, len).slice(0,len);
}