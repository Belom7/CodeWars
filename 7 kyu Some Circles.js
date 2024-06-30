function sumCircles(...diameters) {
    var circleArea = d => Math.PI * d * d / 4;
    var sum = (a,b) => a+b;

    var totalArea = diameters.map(circleArea).reduce(sum, 0);

    return 'We have this much circle: ' + Math.round(totalArea);
}