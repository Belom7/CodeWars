function singSong(a,b){
    return b ? ( a==b ? `I have two ${a}s.` : `Uhh! ${a[0].toUpperCase()+a.slice(1)}-${b}!` ) : `I have a${/[aeiou]/i.test(a[0]) ? "n":""} ${a}.`
}