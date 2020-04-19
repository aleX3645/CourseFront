import {ChartData} from "../web/ChartData.js";

export class JsonManager{
    constructor(json) {
        let obj = json;
        this.chartData = new ChartData(obj.type,this.getJsonDataByType(obj.type), this.getJsonOptionsByType(obj.type), obj.func
            , obj.minParam, obj.maxParam, obj.minX, obj.maxX, obj.stepX);
    }

    getChartData(){
        return this.chartData;
    }

    getJsonDataByType(type){
        switch (type) {
            case 'line':
                return {labels: '',
                    datasets: [{label: '',
                        borderColor: '#b22222',
                        data: [],pointHitRadius: 15,
                        pointBorderColor: 'transparent',
                        pointBackgroundColor: 'transparent',
                        pointHoverBorderColor: 'blue',
                        pointHoverBackgroundColor: 'red'}]};
        }

    }

    getJsonOptionsByType(type){
        switch (type) {
            case 'line':
                return {
                    scales: {
                        xAxes: [{
                            scaleLabel: {
                                display: true,
                                labelString: "",
                                fontColor: "black"
                            }
                        }],
                        yAxes: [{
                            scaleLabel: {
                                display: true,
                                labelString: "",
                                fontColor: "black"
                            }
                        }]
                    }
                };
        }
    }
}