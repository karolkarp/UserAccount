import { applyMiddleware, compose, createStore, Dispatch, Store } from "redux";
import rootReducer from "./rootReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { composeWithDevTools } from "redux-devtools-extension";
const middlewares = [] as any;

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["form"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store: Store<types.redux.IState> = createStore(
	persistedReducer,
	compose(
		applyMiddleware(...middlewares),
		composeWithDevTools() ? composeWithDevTools() : compose
	)
);

// persist store
export const persistor = persistStore(store, undefined);

export const dispatch: Dispatch = (action) => {
	return store.dispatch(action);
};

export default store;
