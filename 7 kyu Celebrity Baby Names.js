function validName(array){
// enter code here
    if (array.length < 1) return "You must test at least one name.";
    else if (array.length < 2) return "Congratulations, you can choose any name you like!";


    for (var i = 1; i < array.length; ++i)
        if (!(array[i-1].toUpperCase().endsWith(array[i].toUpperCase().charAt(0))))
            return "Back to the drawing board, your baby names are not compatible.";

    return "Congratulations, your baby names are compatible!";
}