function topSecret(str){
    let shift = start => ch => String.fromCharCode((ch.charCodeAt(0)-start-3+26)%26 + start),
        match = re => (str.match(re)||[])[1]||'';

    str = str.replace(/[a-z]/g, shift(97))
        .replace(/[A-Z]/g, shift(65))

    answer1 = match(/Top secret files: No\. (\d*)/);
    answer2 = match(/Super agent (\w*)/);
    answer3 = match(/stole the (.*) from National Museum/);

    return str;
}