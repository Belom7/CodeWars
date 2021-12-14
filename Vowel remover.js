function shortcut(string){
    return string.split('').map(string => string.replace(/[aeiou]/g, '')).join('')
  }