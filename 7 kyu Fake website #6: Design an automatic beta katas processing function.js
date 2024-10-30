function kataStatus(betaKata){
    if (betaKata.issue!==0)  return "Beta Status:Waiting for issues to be resolved";
    if (betaKata.vote.length<5)  return "Beta Status:Testing & feedback needed";
    if (betaKata.rank.length<8)  return "Beta Status:Ranking feedback needed";
    if (!betaKata.example&&!betaKata.random)  return "Beta Status:Example and random testcases needed" ;
    if (!betaKata.example)  return "Beta Status:Example testcases needed";
    if (!betaKata.random)  return "Beta Status:Random testcases needed";
    return `Kata approved. vote scores:${betaKata.vote.reduce((a,b)=>a+b)}, rank:${Math.round(betaKata.rank.reduce((a,b)=>a+b)/betaKata.rank.length)}kyu`;
}