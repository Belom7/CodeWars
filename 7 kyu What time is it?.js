const getMilitaryTime = input =>
    input.replace(/^\d\d/, val => `${val % 12 + /PM$/.test(input) * 12}`.padStart(2, 0)).slice(0, -2);