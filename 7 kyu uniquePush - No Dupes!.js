function uniquePush(arr, obj) {
    if (obj.phoneNumber && !arr.some(function (entry) { return entry.phoneNumber == obj.phoneNumber }))
        return arr.push(obj);
}