import {ChartData} from "../web/ChartData.js";

export class WebManager{

    constructor() {
    }

    chartData;
    getChartData(){
        this.chartData = new ChartData('line',{
            labels: "",
            datasets: [{
            label: "",
            borderColor: "#b22222",
            data: [],
            pointHitRadius: 15,
            pointBorderColor: 'transparent',
            pointBackgroundColor: 'transparent',
            pointHoverBorderColor: 'blue',
            pointHoverBackgroundColor: 'red',
        }]}, "Math.pow(4.546+(91700+0.0193*(X-24.5)/(X+570.5))/(Math.pow(T,2)-Math.pow(214.8+0.000053*(X-24.5)/(X+570.5),2))+0.000000272*(X-24.5)/(X+570.5)-0.000000303*Math.pow(T,2),0.5);"
            , 0,300, 325, 1064, 0.5);
        return this.chartData;
    }
}