function duplicates(arr) {
    return arr.reduce(function(prev, cur, i, a) {
        if (i !== a.indexOf(cur) && prev.indexOf(cur) === -1) {
            prev.push(cur);
        }
        return prev;
    }, []);
}