const xMarksTheSpot = (input) => {
    var arr=[];
    for (var i=0; i<input.length; ++i)
        for (var j=0; j<input[i].length; ++j)
            if (input[i][j]=='x')
                arr.push([i,j]);
    return arr.length==1?arr[0]:[];
}