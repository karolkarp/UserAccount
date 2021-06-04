import produce from "immer";
import {
	handleActions as raHandleActions,
	ReduxCompatibleReducer,
} from "redux-actions";

interface IAction {
	[key: string]: any;
}

export default <T>(actions: IAction, state: T): ReduxCompatibleReducer<T, T> =>
	raHandleActions(
		Object.keys(actions).reduce((acc: IAction, key) => {
			acc[key] = produce(actions[key]);
			return acc;
		}, {}),
		state
	);
