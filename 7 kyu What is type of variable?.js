function type(value) {
    return {}.toString.call(value).slice(8, -1).toLowerCase();
}