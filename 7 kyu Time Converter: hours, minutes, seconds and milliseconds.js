const convert = time =>
    time.toISOString().slice(11,23).replace(`.`, `,`);