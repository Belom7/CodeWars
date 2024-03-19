function sensorAnalysis(sensor_data){
    const average = sensor_data.reduce((acc, cur) => acc + cur[1], 0) / sensor_data.length;
    const deviation = Math.pow(( (sensor_data.reduce((acc, cur) => acc + Math.pow((cur[1] - average), 2), 0)) / (sensor_data.length -1) ), 0.5);

    return [+average.toFixed(4), +deviation.toFixed(4)]
}