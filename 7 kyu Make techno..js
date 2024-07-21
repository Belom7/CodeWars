function perc (mins) {
    if(typeof mins!=='number'||mins<1||mins>100)return "invalid track time";
    var arr=[];
    arr.push(Math.round(mins*120)+' kicks');
    arr.push(Math.round(mins*240)+' hihats');
    arr.push(Math.round(mins*60)+' claps');
    return arr;
}