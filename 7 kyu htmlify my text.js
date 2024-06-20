function htmlify(string){
    const marks = {'–':'&ndash;','’':'&rsquo;','&':'&amp;','“':'&ldquo;','”':'&rdquo;'};
    return '<p>'+string.replace(/[^a-z]/gi,x => marks[x]||x)+'</p>';
}