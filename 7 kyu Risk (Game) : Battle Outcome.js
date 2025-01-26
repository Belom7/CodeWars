function battleOutcome(attack, defend) {
    let res = [0, 0];
    let attacker = descSort(attack.slice(0, attack.length));
    let defender = descSort(defend.slice(0, defend.length));
    defender.forEach((defend, i) => {
        if (attacker[i]) defend >= attacker[i] ? res[0]++ : res[1]++;
    });
    return res;
}

const descSort = (player) => player.sort((a,b) => b - a);