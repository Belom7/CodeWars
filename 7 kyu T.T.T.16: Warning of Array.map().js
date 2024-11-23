function warning(arr, func) {
    try {
        arr.map(func);
        return "Passed!";
    }
    catch (e) {
        return "Failed!";
    }
}