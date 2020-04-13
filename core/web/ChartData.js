export class ChartData{
    constructor(type, data, func, minParam, maxParam, minX, maxX, stepX){
        this.type = type;
        this.data = data;
        this.func = func;
        this.minParam = minParam;
        this.maxParam = maxParam;
        this.minX = minX;
        this.maxX = maxX;
        this.stepX = stepX;
    }
    
    type;
    data;
    func;
    minParam;
    maxParam;
    minX;
    maxX;
    stepX;
}