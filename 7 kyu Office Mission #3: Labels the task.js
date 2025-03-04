function tasksTypes(deadlines, day) {
    var r=[0,0,0]
    for(var x of deadlines){
        if(x<=day) r[0]++
        else if(x<=day+7) r[1]++
        else r[2]++
    }
    return r
}