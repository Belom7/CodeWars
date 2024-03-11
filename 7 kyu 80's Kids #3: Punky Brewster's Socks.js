function getSocks(name, socks) {
    socks.sort();
    if(name=='Punky'){
        for(var i=1;i<socks.length;i++){
            if(socks[i]!==socks[i-1])return [socks[i-1],socks[i]];
        }
    }
    else{
        for(var i=1;i<socks.length;i++){
            if(socks[i]===socks[i-1])return [socks[i-1],socks[i]];
        }
    }
    return [];
}