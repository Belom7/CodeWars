const span = (arr, predicate, idx) =>
    arr.reduce((pre, val) => (idx = idx || +!predicate(val), pre[idx].push(val), pre), [[], []]);