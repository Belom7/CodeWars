function pooRoulette(p) {
    let arr = p.reduce((acc,val)=> acc.concat(val),[]);
    let b = arr.indexOf('B');
    if ((arr[b+1] === '~' && arr[b+2] === '~' && arr[b+3] === '~') ||
        (arr[b-1] === '~' && arr[b-2] === '~' && arr[b-3] === '~')) {
        return "You disgust me!";
    } else if (arr[b-7] === '~' && arr[b-14] === '~' && arr[b-21] === '~') {
        return "Get the wipes!";
    }
    return "Calm before the storm"
}