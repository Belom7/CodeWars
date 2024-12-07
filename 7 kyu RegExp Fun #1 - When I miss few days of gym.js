function gymSlang(phrase) {
    phrase = phrase.replace(/(p)robably/gi, '$1rolly');
    phrase = phrase.replace(/(i) am/ig, "$1'm");
    phrase = phrase.replace(/(i)nstagram/ig, "$1nsta");
    phrase = phrase.replace(/(d)o not/ig, "$1on't");
    phrase = phrase.replace(/(g)oing to/ig, "$1onna");
    phrase = phrase.replace(/(c)ombination/ig, "$1ombo");

    return phrase;
}