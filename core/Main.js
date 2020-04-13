//alert("start");
import {WebManager} from "../core/web/WebManager.js"
import {DrawManager} from "../core/draw/DrawManager.js"
var wm = new WebManager();
var dm = new DrawManager(wm.getChartData(),"myChart","scroll");
//alert("final");