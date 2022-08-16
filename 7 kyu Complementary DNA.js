function DNAStrand(dna){
    return dna.replace(/./g, x => ({A:'T',T:'A',C:'G',G:'C'}[x]));
}