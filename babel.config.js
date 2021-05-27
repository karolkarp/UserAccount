module.exports = {
	presets: ["module:metro-react-native-babel-preset"],
	plugins: [
		[
			"module-resolver",
			{
				root: ["./"],
				stripExtensions: [
					".js",
					".ts",
					".tsx",
					".jsx",
					".json",
					".png",
					".svg",
				],
				cwd: "babelrc",
				alias: {
					"@Views": "./src/views",
					"@Utils": "./src/utils",
					"@Components": "./src/components",
					"@Assets": "./src/assets",
				},
			},
		],
	],
};
