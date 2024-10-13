function loseWeight(gender, weight, duration){
    if (gender !== 'M' && gender !== 'F') return 'Invalid gender';
    if (weight <= 0) return 'Invalid weight';
    if (duration <= 0) return 'Invalid duration';
    return +(weight * {M: 0.985, F: 0.988}[gender] ** Math.round(duration)).toFixed(1);
}