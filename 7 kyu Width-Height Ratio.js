const gcd = (a, b) =>
    b ? gcd(b, a % b) : a;

const calculateRatio = (w, h) =>
    w * h ? `${w / gcd(w, h)}:${h / gcd(w, h)}` : (() => {throw new Error()})();