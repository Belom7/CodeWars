function titanAttack(yourAttackPower, titanDefensePower, yourElement, titanElement) {
    const ELEMENTS = ["Fire", "Earth", "Thunder", "Water"];
    let damage = titanDefensePower - yourAttackPower * [0.5, 0.5, 1, 1.5][(ELEMENTS.indexOf(yourElement) - ELEMENTS.indexOf(titanElement) + ELEMENTS.length) % ELEMENTS.length];
    return [damage, (damage <= 0)? "Attack": "Run!"];
}