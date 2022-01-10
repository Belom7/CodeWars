function paul(x){
    let ball = 0
    x.map(m=>m==='kata'? ball+=5 : m==='Petes kata'? ball+=10 : m==='eating'? ball+=1 : 0)
    return ball < 40? 'Super happy!' : ball >= 40 && ball < 70? 'Happy!' : ball >= 70 && ball < 100? 'Sad!' : 'Miserable!'
}