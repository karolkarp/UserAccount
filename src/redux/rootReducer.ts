import { combineReducers } from "redux";
import form from "./modules/form/reducer";

export const RootReducer: any = combineReducers({
	form,
});

export type Store = typeof RootReducer;

export default RootReducer;
