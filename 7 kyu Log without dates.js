function checkLogs(log) {
    let prev = "99:99:99";
    let days = 0;
    log.forEach(t => {
        if (t <= prev) days++;
        prev = t;
    });
    return days;
}