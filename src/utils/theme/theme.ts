import normalizeFont from "@Utils/fonts/normalizeFont";

const theme = {
	colors: {
		primary: "rgba(95,158,160)",
		background: "rgba(243, 244, 249)",
		black: "rgba(0, 0, 0)",
		black12: "rgba(0, 0, 0, 0.12)",
		black24: "rgba(0, 0, 0, 0.24)",
		black36: "rgba(0, 0, 0, 0.36)",
		white: "rgba(255, 255, 255)",
	},
	typography: {
		title: normalizeFont("sans-serif", 20, 24),
	},
};

export default theme;
