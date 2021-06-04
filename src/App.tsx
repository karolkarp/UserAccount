import React from "react";
import { Provider } from "react-redux";
import store, { persistor } from "@Redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Route, Switch } from "react-router-dom";
import { setConfiguration } from "react-grid-system";
import Dashboard from "@Views/Dashboard/Dashboard";
import Profile from "@Views/Profile/Profile";
import NavigationBar from "@Components/NavigationBar/NavigationBar";
import Footer from "@Components/Footer/Footer";
import { AppWrapper } from "./App.styled";

const DASHBOARD_PATH = "/";
const ADD_ACCOUNT_PATH = "/add";

function App() {
	setConfiguration({ maxScreenClass: "xl" });

	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<AppWrapper>
					<NavigationBar />
					<Switch>
						<Route exact path={DASHBOARD_PATH}>
							<Dashboard />
						</Route>
						<Route path={ADD_ACCOUNT_PATH}>
							<Profile />
						</Route>
					</Switch>
					<Footer />
				</AppWrapper>
			</PersistGate>
		</Provider>
	);
}

export default App;
