function boredom(staff) {
    let sum = 0;
    const department = {
        "accounts" : 1,
        "finance" : 2,
        "canteen" : 10,
        "regulation" : 3,
        "trading" : 6,
        "change" : 6,
        "IS" : 8,
        "retail" : 5,
        "cleaning" : 4,
        "pissing about" : 25
    }
    for (let name in staff) {
        if(department[staff[name]] !== undefined) {
            sum += department[staff[name]];
        }
    }
    return sum <= 80 ? "kill me now" : sum < 100 ? "i can handle this" : "party time!!";
}