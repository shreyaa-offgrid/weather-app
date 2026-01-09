import { format, parseISO} from "date-fns"

function createElement(type,className,text,){
    let el = document.createElement(type);
    if(text){
        el.textContent = text;
    }
    if(className){
        el.classList.add(className);
    }
    return el;
}
let tempunit = "°C";
let speedunit = "km/h";

function setUnits(system){
    if(system==="us"){
        tempunit = "°F";
        speedunit = "mph";
    }else{
        tempunit = "°C";
        speedunit = "km/h"
    }
}

function renderUpperLeft(reqData){
    const address = createElement("p","address",reqData.address);
    const today = createElement("p","today",format(parseISO(reqData.today),"dd MMMM, eeee"));

    const temp = createElement("p","temp",`${reqData.temp} ${tempunit}`);
    const high = createElement("p","high",`${reqData.high} ${tempunit}`);
    const low = createElement("p","low",`${reqData.low} ${tempunit}`);
    const conditions = createElement("p","conditons",reqData.conditions);

    const lowHighFlex = createElement("div","low-high-flex");
    lowHighFlex.append(low,high);

    const tempFlex = createElement("div","temp-flex");
    tempFlex.append(temp, lowHighFlex, conditions);

    const upperleft = document.querySelector(".left .upper");
    upperleft.replaceChildren();
    upperleft.append(address, today, tempFlex);
}

function renderLowerLeft(reqData){
    const feelsLike = createAirCondition("Feels Like",`${reqData.feelsLike} ${tempunit}`);
    const windspeed = createAirCondition("Wind Speed",`${reqData.windspeed} ${speedunit}`);
    const precipProb = createAirCondition("Chace of rain",reqData.precipProb+" %");
    const humidity = createAirCondition("Humidity",reqData.humidity+" %");

    const lowerleft = document.querySelector(".left .lower");
    lowerleft.replaceChildren();
    lowerleft.append(feelsLike,windspeed,precipProb,humidity);
}

function createAirCondition(parameterName,value){
    const containerDiv = createElement("div","air-condition","");
    const name = createElement("p","",parameterName);
    const val = createElement("p","",value);
    containerDiv.append(name,val);
    return containerDiv;
}

export function render(system, reqData){
    setUnits(system);
    renderUpperLeft(reqData);
    renderLowerLeft(reqData);
}