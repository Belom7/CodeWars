function trickyDoubles(n) {
    let s = n.toString(), sh = s.slice(s.length / 2);
    return sh + sh == s ? n : n * 2;
}