import { combineReducers } from "redux";
import { sourceResults } from "./first/reducers/SourceConfigurationReducers";

const contentDiscoveryApp = combineReducers({
    sourceResults
});

export default contentDiscoveryApp;
