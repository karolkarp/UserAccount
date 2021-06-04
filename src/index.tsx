import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "@Utils/theme/theme";
import App from "./App";

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<BrowserRouter basename="/">
				<App />
			</BrowserRouter>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
