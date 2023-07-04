const binaryFingers = binString => {
    binString = `00000${binString}`.substr(-5);
    return ['Pinkie','Ring','Middle','Index','Thumb'].filter((v, i) => +binString[i]);
}