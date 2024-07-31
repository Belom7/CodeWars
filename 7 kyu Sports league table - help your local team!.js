function leagueCalculate(team1, team2, result) {
    if (result == 'draw') leagueTable.forEach(e => { if (e[0] == team1 || e[0] == team2) e[1]++; });
    if (result == 'win') leagueTable.forEach(e => { if (e[0] == team1) e[1]+=3; });
    return leagueTable.sort((a,b)=>(a[1]==b[1])?b[0]<a[0]:b[1]-a[1]);
}