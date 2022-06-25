const romajiDictLow = "aeiou";
const romajiDictUp  = "AEIOU";
const hiraDict      = "あえいおう";
const kataDict      = "アエイオウ";

function vowels(input, output){
    if(output !== "romaji") input = input.toLowerCase();
    switch(output){
        case "romaji": return input.replace(RegExp(`[${hiraDict}${kataDict}]`,"g"), e => romajiDictLow[getIndex(e)]);
        case "hiragana": return input.replace(RegExp(`[a-zA-Z${kataDict}]`,"g"), e => hiraDict[getIndex(e)]);
        case "katakana": return input.replace(RegExp(`[a-zA-Z${hiraDict}]`,"g"), e => kataDict[getIndex(e)]);
    }
    return "";
}

function getIndex(char){
    return Math.max(romajiDictLow.indexOf(char)
        ,romajiDictUp.indexOf(char)
        ,hiraDict.indexOf(char)
        ,kataDict.indexOf(char));
}