function findCoordinates(plane) {
    var r = {}, m=plane.split('\n').reverse();
    for (let j=0; j<m.length; j++) for (let i=0; i<m[j].length; i++) if (/\d/.test(m[j][i])) r[m[j][i]]=[j,(i-j-1)/2];
    return Array.from({...r, length: Object.keys(r).length});
}