
import {JsonManager} from "./web/JsonManager.js"
import {ChartModule} from "./draw/ChartModule.js"
var wm = new JsonManager({"type":"line","label":"Temperature dependence of the refractive index of LiNbO\u003csub\u003e3\u003c/sub\u003e [36].","xAxis":"T","yAxis":"n\u003csub\u003ee\u003c/sub\u003e","func":"var A1\u003d4.546;var A2\u003d91700;var A3\u003d214.8;var A4\u003d0.000000303;var B1\u003d0.0193;var B2\u003d0.000053;var B3\u003d0.000000272 ;Math.pow(A1+(A2+B1*(X-24.5)/(X+570.5))/(Math.pow(T,2)-Math.pow(A3+B2*(X-24.5)/(X+570.5),2))+B3*(X-24.5)/(X+570.5)-A4*Math.pow(T,2),0.5)","minParam":325.0,"maxParam":1064.0,"minX":0.0,"maxX":300.0,"stepX":0.1});
var dm = new ChartModule(wm.getChartData(),"myChart","scroll");