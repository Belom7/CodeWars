var nextBirthdayOfTheWeek = function(birthday) {
    var dow = birthday.getDay(), bYear = birthday.getFullYear();
    do birthday.setFullYear(birthday.getFullYear() + 1);
    while(birthday.getDay() != dow);
    return birthday.getFullYear() - bYear;
};