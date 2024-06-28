function MusicToColor(music) {
    if(!music || music.length < 3)return [];
    return music.match(/.{3}/ig).map(v => `#${v[0].charCodeAt(0).toString(16).toUpperCase()}${v[1].charCodeAt(0).toString(16).toUpperCase()}${v[2].charCodeAt(0).toString(16).toUpperCase()}`);
}