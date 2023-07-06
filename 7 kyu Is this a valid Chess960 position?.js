function isValidChess960 (pieces) {
    return /^(?=.*R.*K.*R)(?=.*B(?:..)*B)(?=.*Q)(?=.*N.*N)[RNBQK]{8}$/.test(pieces);
}