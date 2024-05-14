function pattern(n){
    for(var output=[],o=1;o<=n;o+=2){
        output.push(Array(o+1).join(o))
    }
    return output.join("\n");
}