function areaVolume(a,b,h,l) {
    const volume = (a+b)*h*l/2;
    const area = (a+b)*(l+h) + Math.hypot(h, (b-a)/2)*l*2;
    return [Math.round(area), Math.round(volume)];
}