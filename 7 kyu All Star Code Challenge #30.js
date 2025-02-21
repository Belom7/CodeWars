function manCave(array){
    if(array.some(a => a.name == "Raj"))
    {
        var marray = array.slice().filter(a => a.gender == "male");
        marray.forEach(a => a.status = "Single");
        return marray;
    }
    return array;
}