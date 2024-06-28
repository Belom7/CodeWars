function getNumberLength(n){
    if (typeof n === "string" || !n.toString().includes("e+")) return "wrong input";
    return parseInt(n.toString().substring(n.toString().indexOf("e+") + 2)) + 1;
}