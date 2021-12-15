function abbrevName(name) {
  [first, last] = name.toUpperCase().split(' ');
  return first[0] + '.' + last[0];
}

function abbrevName(name) {
  return name.toUpperCase()
             .split(' ')
             .map(x => x[0])
             .join('.');
}

function abbrevName(name) {
  return name.toUpperCase()
             .split('')
             .reduce((res, x, i) => res + (name[i - 1] === ' ' ? '.' + x[0] : ''));
}
