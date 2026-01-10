import "./styles.css";
import { getRequiredData, requestWeather } from "./api.js";
import { render, getSearchInput, initSearch, initToggle, getUnitInput } from "./dom.js";
import mockWeatherData from "./mockWeatherData.js";

const USE_MOCK = false;

async function init() {
    let location = getSearchInput();
    let unit = getUnitInput();
    const reqData = USE_MOCK
        ? mockWeatherData
        : getRequiredData(await requestWeather(location, unit));
    render(unit, reqData);
}

init();
initSearch(handleSearchSubmit);
initToggle(handleUnitToggle);

function handleSearchSubmit(){
    init();
}

function handleUnitToggle(){
    init();
}
