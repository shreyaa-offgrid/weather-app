import "./styles.css";
import { getRequiredData, requestWeather } from "./api.js";
import { render } from "./dom.js";
import mockWeatherData from "./mockWeatherData.js";

const USE_MOCK = true;

async function init() {

    const reqData = USE_MOCK
        ? mockWeatherData
        : getRequiredData(await requestWeather("Sewagram", "metric"));

    render("metric", reqData);
}

init();
