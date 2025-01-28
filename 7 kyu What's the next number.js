function nextNumber(seq){
    let [xy,z,t]=seq, ab=(t-xy)/2-z+xy, c=z-xy-ab, n=seq.length;
    return xy+n*c+n*n*ab;
}