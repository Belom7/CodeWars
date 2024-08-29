const testit = s =>
    s.replace(/\w/g, (val, idx) =>
        (c => ({91: `A`, 64: `Z`, 123: `a`, 96: `z`})[c] || String.fromCharCode(c))
        ((-1) ** idx + val.charCodeAt()));