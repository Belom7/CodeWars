function DNAtoRNA(dna) {
    return dna.split('').map(function(i){return i=='T'? 'U' : i=='U'? 'T' : i}).join('')
}