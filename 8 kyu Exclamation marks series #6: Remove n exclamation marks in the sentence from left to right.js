function remove(s,n){
    return n>0 ? remove(s.replace('!', ''), n-1) : s;
}