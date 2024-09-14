const multipliers = {
    gorillas: 9,
    orangutans: 5,
    chimpanzees: 3,
    crew: 1
};

function biteMeMonkey(primates, humans, terrain) {
    let powerPrimates = primates.hitPoints + primates.gorillas * 9 + primates.chimpanzees * 3 + primates.orangutans * 5;
    let powerHumans = humans.hitPoints + humans.crew * 1;
    if (terrain === 'sea') powerPrimates += 10;
    if (terrain === 'island') powerHumans += 20;
    if (primates.janeReporting4Duty === true) powerPrimates *= (primates.chimpanzees / 2);
    return powerPrimates >= powerHumans ? "Abandon ship! Save your own skin and blame it on the 'modestly-sized' yacht!"
        : "Everything's good, I'll see you in the office on Monday.";
}