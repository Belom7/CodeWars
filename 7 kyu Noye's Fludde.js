function boatLoader(a) {
    let all="AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz".split(""),rs=[]
    for (let c of all) if (a.indexOf(c)!=a.lastIndexOf(c)) rs.push([c,c]);return rs
}