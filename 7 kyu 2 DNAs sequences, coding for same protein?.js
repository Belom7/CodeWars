function codeForSameProtein(seq1,seq2){
    return seq1.match(/.{3}/g).map(n=>codons[n]).join``===seq2.match(/.{3}/g).map(n=>codons[n]).join``
}