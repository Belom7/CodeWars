function nerdify(txt){
    return txt.split('').map(m => m === 'a'? 4
        :m === 'A'? 4
            :m === 'e'? 3
                :m === 'E'? 3
                    :m === 'l'? 1
                        : m).join('')
}