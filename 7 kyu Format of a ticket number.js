function nbrValidTickets(tickets){
    return tickets.filter(x => /^[a-z]\d[a-z]{4}$/i.test(x)).length;
}