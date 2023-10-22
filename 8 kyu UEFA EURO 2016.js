function uefaEuro2016(teams, scores){
    let scorre = ''
    if(scores[0] > scores[1]){
        scorre = teams[0] + ' won!'
    }
    if(scores[0] < scores[1]){
        scorre = teams[1] + ' won!'
    }
    if(scores[0] === scores[1]){
        scorre = 'teams played draw.'
    }
    return `At match ${teams[0]} - ${teams[1]}, ${scorre}`
}