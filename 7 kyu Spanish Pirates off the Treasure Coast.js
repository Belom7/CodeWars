function secretMap(sp) {
    var {p,g} = sp.reduce((r,[s]) => (s=='pirate' ? ++r.p : s=='pile_of_gold' && ++r.g, r),{p:0,g:0});
    return 'count of pirates: '+p+' and the count of gold piles: '+g;
}