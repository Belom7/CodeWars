function rgbToGrayscale(c) {
    let Y = Math.round(parseInt(c.substr(1,2), 16) * 0.299 + parseInt(c.substr(3,2), 16) * 0.587 + parseInt(c.substr(5,2), 16) * 0.114).toString(16).padStart(2,"0");
    return `#${Y.repeat(3).toUpperCase()}`;
}