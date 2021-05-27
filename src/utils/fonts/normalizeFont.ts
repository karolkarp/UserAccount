import CSS from "csstype";

const normalizeFont = (
	fontFamily: string,
	fontSize: number,
	lineHeight: number,
	letterSpacing?: number
): CSS.Properties => {
	return {
		fontFamily,
		fontSize: `${fontSize}px`,
		letterSpacing: `${letterSpacing ? letterSpacing : 0}px`,
		lineHeight: `${lineHeight}px`,
	};
};

export default normalizeFont;
