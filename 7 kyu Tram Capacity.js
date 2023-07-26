function tram(stops, descending, onboarding){
    let max = 0;
    let passengers = 0;
    for (let i = 0; i < stops; ++i) {
        passengers += onboarding[i] - descending[i];
        if (max < passengers) {
            max = passengers;
        }
    }

    return max;
}