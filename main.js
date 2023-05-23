import './style.css'
import justgage from 'justgage'

 let gauge1_value = 64;

// window.onresize = function(){ location.reload(); }
var gauge1 = new justgage({
    id: "gauge", // the id of the html element
    value: gauge1_value,
    label:'Temperature 1',
    valueFontColor: "#FF6600",
    symbol:' °C',
    min: 0,
    max: 100,
    decimals: 0,
    gaugeWidthScale: 0.2,
    relativeGaugeSize: true,
    gaugeColor: "#242424",
    showInnerShadow: true,
    shadowSize: 2,
    counter: true,
    pointer: true,
    pointerOptions: {
        toplength: -5,
        bottomlength: 3,
        bottomwidth: 3,
        stroke: 'none',
        stroke_width: 0,
        stroke_linecap: 'square',
        color: '#A4A4A4'
      }
});

var gauge2 = new justgage({
    id: "gauge2", // the id of the html element
    value: 90,
    label:'Temperature 2',
    valueFontColor: "#FF6600",
    symbol:' °C',
    min: 0,
    max: 100,
    decimals: 0,
    gaugeWidthScale: 0.2,
    relativeGaugeSize: true,
    gaugeColor: "#242424",
    showInnerShadow: true,
    shadowSize: 2,
    counter: true,
    pointer: true,
    pointerOptions: {
        toplength: -5,
        bottomlength: 3,
        bottomwidth: 3,
        stroke: 'none',
        stroke_width: 0,
        stroke_linecap: 'square',
        color: '#A4A4A4'
      }
    

});

var gauge3 = new justgage({
    id: "gauge3", // the id of the html element
    value: 16.234,
    label:'Pressure',
    valueFontColor: "#FF6600",
    symbol:' psi',
    min: 0,
    max: 300,
    decimals: 2,
    gaugeWidthScale: 0.2,
    relativeGaugeSize: true,
    gaugeColor: "#242424",
    showInnerShadow: true,
    shadowSize: 2,
    counter: true,
    decimals: 3,
    pointer: true,
    pointerOptions: {
        toplength: -5,
        bottomlength: 3,
        bottomwidth: 3,
        stroke: 'none',
        stroke_width: 0,
        stroke_linecap: 'square',
        color: '#A4A4A4'
      }
});