function makePizza(pieces) { //Let's make n pieces of Pizza ;-)
    var result = "";
    while ( pieces-- ){
        var needSteps = 5;
        while ( needSteps-- ) result += make( needSteps );
    }
    return result;
}
function make(step){
    switch ( step+1){
        case 5: return "P";
        case 4: return "i";
        case 3:
        case 2: return "z";
        case 1: return "a";
    }
}