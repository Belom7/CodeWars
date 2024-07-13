const knightVsBishop = ([ kN, kL ], [ bN, bL ]) => {
    [ kL, bL ] = [kL, bL].map(ch => ch.charCodeAt(0) - 64);
    const [ dx, dy ] = [ Math.abs(kN-bN), Math.abs(kL-bL) ];
    return dx && dy && dx+dy === 3 ? "Knight" : dx === dy ? "Bishop" : "None";
}