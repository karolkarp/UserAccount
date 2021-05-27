import React from "react";
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
	);
}

export default App;
