function present(x, y){
    return x === 'goodpresent'? x.split('').map(m=>String.fromCharCode(m.charCodeAt()+y)).join('')
        :x === 'crap' || x === 'empty'? x.split('').sort().join('')
            :x === 'bang'? x.split('').map(m=>m.charCodeAt()-y).reduce((a,b)=>a+b)
                :x === 'badpresent'? 'Take this back!'
                    :`pass out from excitement ${y} times`
}