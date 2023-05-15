function mostLikely(prob1,prob2){
    return prob1.split(':').reduce( (a,b) =>a/b ) > prob2.split(':').reduce( (a,b) =>a/b );
}