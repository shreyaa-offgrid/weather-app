import "./styles.css";
import { getRequiredData, requestWeather } from "./api.js";
import { render, getSearchInput, initSearch } from "./dom.js";
import mockWeatherData from "./mockWeatherData.js";

const USE_MOCK = false;

async function init() {
    let location = getSearchInput();
    const reqData = USE_MOCK
        ? mockWeatherData
        : getRequiredData(await requestWeather(location, "metric"));
    render("metric", reqData);
}

init();
initSearch(handleSearchSubmit);

export function handleSearchSubmit(){
    init();
}
