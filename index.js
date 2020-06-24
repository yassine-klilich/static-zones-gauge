

var opts = {
  angle: 0,
  lineWidth: 0.35,
  radiusScale: 1,
  pointer: { length: 0, strokeWidth: 0 },
  highDpiSupport: true,
  
  staticLabels: {
    font: "16px sans-serif",
    labels: [0, 20, 70, 80, 95, 100],
    color: "#000"
  },

  staticZones: [
    {strokeStyle: "#E0E0E0", min: 0, max: 100},
    {strokeStyle: "#F03E3E", min: 20, max: 70}, // red
    {strokeStyle: "#FFDD00", min: 70, max: 80}, // yellow
    {strokeStyle: "#30B32D", min: 80, max: 95}  // green
 ],
};
var target = document.getElementById('canvas-gauge');
var gauge = new Gauge(target).setOptions(opts);
gauge.maxValue = 100;
gauge.setMinValue(0);
gauge.animationSpeed = 32;
gauge.set(0);

let reverseStaticZones = false;
////////////////////////////////////////////////////////////////////////////////////////////////////////////
function onChangeGreenInput(event) {
  let greenValue = parseInt(event.target.value);
  let staticLabels = gauge.options.staticLabels.labels;
  let staticZones = gauge.options.staticZones;

  if(reverseStaticZones){
    if(greenValue >= staticLabels[4] && greenValue <= staticLabels[2]) {
      staticLabels[3] = greenValue;
  
      staticZones[1].max = greenValue;
      staticZones[2].min = greenValue;
    }
    else {
      setInputValue('green-input', staticLabels[3]);
    }
  }
  else {
    if(greenValue >= staticLabels[2] && greenValue <= staticLabels[4]) {
      staticLabels[3] = greenValue;
  
      staticZones[2].max = greenValue;
      staticZones[3].min = greenValue;
    }
    else {
      setInputValue('green-input', staticLabels[3]);
    }
  }

  gauge.setOptions(gauge.options);
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////
function onChangeYellowInput(event) {
  let greenValue = parseInt(event.target.value);
  let staticLabels = gauge.options.staticLabels.labels;
  let staticZones = gauge.options.staticZones;

  if(reverseStaticZones){
    if(greenValue >= staticLabels[3] && greenValue <= staticLabels[1]) {
      staticLabels[2] = greenValue;
  
      staticZones[2].max = greenValue;
      staticZones[3].min = greenValue;
    }
    else {
      setInputValue('yellow-input', staticLabels[2]);
    }
  }
  else {
    if(greenValue >= staticLabels[1] && greenValue <= staticLabels[3]) {
      staticLabels[2] = greenValue;
  
      staticZones[1].max = greenValue;
      staticZones[2].min = greenValue;
    }
    else {
      setInputValue('yellow-input', staticLabels[2]);
    }
  }

  gauge.setOptions(gauge.options);
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////
function onChangeLowInput(event) {
  let lowValue = parseInt(event.target.value);
  let staticLabels = gauge.options.staticLabels.labels;
  let staticZones = gauge.options.staticZones;
  
  staticLabels[1] = lowValue;
  
  if(lowValue > staticLabels[4]){
    if(reverseStaticZones == false) {
      setInputValue('green-input', staticLabels[4]);
      setInputValue('yellow-input', staticLabels[4]);
      staticLabels[3] = staticLabels[2] = staticLabels[4];

      staticZones[1] = {
        strokeStyle: "#30B32D",
        min: staticLabels[4],
        max: staticLabels[3]
      };
      staticZones[2] = {
        strokeStyle: "#FFDD00",
        min: staticLabels[3],
        max: staticLabels[2]
      };
      staticZones[3] = {
        strokeStyle: "#F03E3E",
        min: staticLabels[2],
        max: staticLabels[1]
      };

      reverseStaticZones = true;
    }
    else {
      staticZones[3].max = lowValue;

      if(lowValue < staticLabels[2]) {
        staticLabels[2] = lowValue;
        staticZones[3].min = lowValue;
        staticZones[2].max = lowValue;
        setInputValue('yellow-input', lowValue);
      }
      if(lowValue < staticLabels[3]){
        staticLabels[3] = lowValue;
        staticZones[2].min = lowValue;
        staticZones[1].max = lowValue;
        setInputValue('green-input', lowValue);
      }
    }
  }
  else {
    if(reverseStaticZones == true) {
      setInputValue('green-input', staticLabels[4]);
      setInputValue('yellow-input', staticLabels[4]);
      staticLabels[3] = staticLabels[2] = staticLabels[4];

      staticZones[1] = {
        strokeStyle: "#F03E3E",
        min: staticLabels[1],
        max: staticLabels[2]
      };
      staticZones[2] = {
        strokeStyle: "#FFDD00",
        min: staticLabels[2],
        max: staticLabels[3]
      };
      staticZones[3] = {
        strokeStyle: "#30B32D",
        min: staticLabels[3],
        max: staticLabels[4]
      };

      reverseStaticZones = false;
    }
    else {
      staticZones[1].min = lowValue;

      if(lowValue > staticLabels[2]){
        staticLabels[2] = lowValue;
        staticZones[1].max = lowValue;
        staticZones[2].min = lowValue;
        setInputValue('yellow-input', lowValue);
      }
      if(lowValue > staticLabels[3]){
        staticLabels[3] = lowValue;
        staticZones[3].min = lowValue;
        staticZones[2].max = lowValue;
        setInputValue('green-input', lowValue);
      }
    }
  }

  gauge.setOptions(gauge.options);
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////
function onChangeHighInput(event) {
  let heighValue = parseInt(event.target.value);
  let staticLabels = gauge.options.staticLabels.labels;
  let staticZones = gauge.options.staticZones;
  
  staticLabels[4] = heighValue;
  
  if(heighValue > staticLabels[1]){
    if(reverseStaticZones == true) {
      setInputValue('green-input', staticLabels[1]);
      setInputValue('yellow-input', staticLabels[1]);
      staticLabels[3] = staticLabels[2] = staticLabels[1];

      staticZones[1] = {
        strokeStyle: "#F03E3E",
        min: staticLabels[1],
        max: staticLabels[2]
      };
      staticZones[2] = {
        strokeStyle: "#FFDD00",
        min: staticLabels[2],
        max: staticLabels[3]
      };
      staticZones[3] = {
        strokeStyle: "#30B32D",
        min: staticLabels[3],
        max: staticLabels[4]
      };

      reverseStaticZones = false;
    }
    else {
      staticZones[3].max = heighValue;

      if(heighValue < staticLabels[3]){
        staticLabels[3] = heighValue;
        staticZones[3].min = heighValue;
        staticZones[2].max = heighValue;
        setInputValue('green-input', heighValue);
      }
      if(heighValue < staticLabels[2]){
        staticLabels[2] = heighValue;
        staticZones[2].min = heighValue;
        staticZones[1].max = heighValue;
        setInputValue('yellow-input', heighValue);
      }
    }
  }
  else {
    if(reverseStaticZones == false){
      setInputValue('green-input', staticLabels[1]);
      setInputValue('yellow-input', staticLabels[1]);
      staticLabels[3] = staticLabels[2] = staticLabels[1];

      staticZones[1] = {
        strokeStyle: "#30B32D",
        min: staticLabels[4],
        max: staticLabels[3]
      };
      staticZones[2] = {
        strokeStyle: "#FFDD00",
        min: staticLabels[3],
        max: staticLabels[2]
      };
      staticZones[3] = {
        strokeStyle: "#F03E3E",
        min: staticLabels[2],
        max: staticLabels[1]
      };

      reverseStaticZones = true;
    }
    else {
      staticZones[1].min = heighValue;
      
      if(heighValue > staticLabels[3]){
        staticLabels[3] = heighValue;
        staticZones[2].min = heighValue;
        staticZones[1].max = heighValue;
        setInputValue('green-input', heighValue);
      }
      if(heighValue > staticLabels[2]){
        staticLabels[2] = heighValue;
        staticZones[3].min = heighValue;
        staticZones[2].max = heighValue;
        setInputValue('yellow-input', heighValue);
      }
    }
  }

  gauge.setOptions(gauge.options);
}

function setInputValue(id, value) {
  document.getElementById(id).value = value;
}