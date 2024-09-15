function sc(said, suspects) {
    return suspects.filter(suspect => RegExp('^' + said.replace(/~/ig, '.'), 'i').test(suspect)).join();
}