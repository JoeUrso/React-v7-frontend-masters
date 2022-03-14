import { combineReducers } from "redux";
import animal from "./animal";
import theme from "./breed";
import location from "./location";
import breed from "./theme";

export default combineReducers({
    location,
    breed,
    animal,
    theme,
});
