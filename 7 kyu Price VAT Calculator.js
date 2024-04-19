function Calculator(vat){
    this.getNet = function(grossPrice){
        return +(100 * grossPrice / (100+vat)).toFixed(2);
    }
    this.getVat = function(grossPrice){
        return +(vat * grossPrice / (100+vat)).toFixed(2);
    }

}