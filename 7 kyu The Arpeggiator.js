function arpeggio(root) {
    const scale = 'ABCDEFGABCDEFG';
    const i = scale.indexOf(root);
    if (i !== -1) {
        return [root, scale[i + 2], scale[i + 4], root];
    }
}