export class ChartData{
    constructor(type, data, option, func, minParam, maxParam, minX, maxX, stepX){
        this.type = type;
        this.data = data;
        this.data.label = data
        this.func = func;
        this.minParam = minParam;
        this.maxParam = maxParam;
        this.minX = minX;
        this.maxX = maxX;
        this.stepX = stepX;
        this.option = option;
    }
}