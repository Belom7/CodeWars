const nextFiveDays = function(date){
    return [1,2,3,4,5].map(function(){
        date.setDate(date.getDate() + 1);
        return (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
    }).join(', ');
}