function typing(param){
    if(typeof param=='undefined')
        return 'undefined';
    if(typeof param=='string')
        return typeof param+'="'+param+'"';
    if(param.constructor === Array)
        return typeof param+'=['+param+']';
    if(typeof param=='object')
        return typeof param+'={"'+Object.keys(param)+'":"'+param[Object.keys(param)[0]]+'"}';
    return typeof param+'='+param;
}