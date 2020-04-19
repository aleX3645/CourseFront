export class ChartModule{

    constructor(data, chartName, scrollName){
        this.data = data;
        this.T = data.minParam;

        this.scrollElement = document.getElementById(scrollName);
        this.scrollElement.value = data.minParam;
        this.scrollElement.min = data.minParam;
        this.scrollElement.max = data.maxParam;
        this.scrollElement.step = (data.maxParam-data.minParam)/10;

        var listener = {
            object: this,
            handleEvent: function(event) {
                //alert(this.object.y);

                this.object.T = this.object.scrollElement.value;

                for(var i = 0; i<this.object.x.length;i++){
                    this.object.y[i] = this.object.computeByFunction(this.object.x[i])
                }

                this.object.chart.update();
            }
        };

        this.scrollElement.addEventListener('input',listener);

        switch(this.data.type){
            case "line":
                this.x = new Array();
                this.y = new Array();
                for(var i = this.data.minX; i<=this.data.maxX; i+=this.data.stepX){
                    this.x.push(i.toFixed(2));
                    this.y.push(this.computeByFunction(i));
                }
                alert(this.y);

                this.data.data.labels = this.x;
                this.data.data.datasets[0].data = this.y;

                this.chart = new Chart(document.getElementById(chartName).getContext('2d'), {

                    type:this.data.type,

                    // The data for our dataset
                    data: this.data.data,

                    // Configuration options go here
                    options: this.data.option
                });
                break;
            default:
                break;

        }
    }

    computeByFunction(X){
        var T = this.T
        return eval(this.data.func)

    }
}

