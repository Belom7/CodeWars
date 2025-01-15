function talkingAbout(what){
    if(!Array.isArray(what))
        return 'What?';

    what = what.slice().map(a => a.toLowerCase());

    if(what.length === 0)
        return 'Nothing here!';

    if(what.every(a => a === 'ok'))
        return 'Everything is OK!';

    if(what.some((a,i,x) => (a === 'nice' && x[i+1] === 'you') || a === 'you' && x[i+1] === 'nice'))
        return 'Nice to meet you!';

    if(what.reduce((c,p) => c + (p === 'waiting' ? 10 : p === 'girl' ? 1 : 0),0) === 41)
        return 'Waiting for a girl!';

    if(what.every(a => a[0] === 'f'))
        return 'Array is full!';

    if(what.some(a => a === 'child'))
        return 'We have ' + what.reduce((c,p) => c + (p === 'child' ? 1 : 0),0) + ' children!';

    if(what.some(a => a === 'myjinxin'))
        return 'Really handsome!';

    if(what.some(a => a === 'problem'))
        return 'Array has problem!';

    return 'No problem!';
}