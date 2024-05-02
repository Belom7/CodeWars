function split(arr, prop)
{
    return [
        arr.filter(function (a) { return a[prop]; }),
        arr.filter(function (a) { return !a[prop]; })
    ];
}