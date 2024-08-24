function DataSet(...data) {
    this.data = data;

    this.setMean = function(){
        return (this.mean = DataSet.mean(this.data));
    }

    this.setVar = function(){
        let m = this.setMean()
        this.variance = DataSet.variance(this.data,m);
        this.stdDeviation = Math.pow(this.variance,.5);
        return this.variance
    }

    this.setMean();
    this.setVar();
}

DataSet.sum = aa => aa.reduce((s,v)=>s+v,0);
DataSet.mean = aa => DataSet.sum(aa)/aa.length;
DataSet.variance = (aa,mean) => DataSet.mean(aa.map(a=>Math.pow(a-mean,2)));