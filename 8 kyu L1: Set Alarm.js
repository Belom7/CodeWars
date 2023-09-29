function setAlarm(employed, vacation) {
    return employed === true && vacation === true ? false
        : employed === true && vacation === false ? true
            : employed === false && vacation === true ? false
                : false
}