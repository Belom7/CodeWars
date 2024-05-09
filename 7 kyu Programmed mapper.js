function mapEmUp (input, mappers) {
    return input.map(x => {
        for (let m of mappers) if (m[0](x)) return m[1](x);
        return -1;
    });
}