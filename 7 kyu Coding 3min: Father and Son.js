function sc(s){
    var str='';
    for (var i=0; i<s.length; ++i)
        if (s.indexOf(s[i].toLowerCase())!=-1 && s.indexOf(s[i].toUpperCase())!=-1)
            str+=s[i];
    return str;
}