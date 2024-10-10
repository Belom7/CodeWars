function rndCode(){

    let p1 = 'ABCDEFGHIJKLM';
    let p2 = '0123456789';
    let p3 = '~!@#$%^&*';
    return [p1,p1,p2,p2,p2,p2,p3,p3].map((v) => v[~~(Math.random() * v.length)]).join('');

}