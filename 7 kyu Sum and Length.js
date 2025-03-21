function sumLength(arr){
    return arr.reduce(([a,b,z],v)=>[v>0?a+v:a,v<=0-z?b+1:b,z^(!v)],[0,0,0]).slice(0,2).join(' ');
}