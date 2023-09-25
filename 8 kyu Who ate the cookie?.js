function cookie(x){
    let message = 'Who ate the last cookie? It was'
    return typeof(x) === 'string'? message + ' Zach!'
        : typeof(x) === 'number'? message + ' Monica!'
            : message + ' the dog!'
}