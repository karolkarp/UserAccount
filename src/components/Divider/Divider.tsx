import React, { FunctionComponent } from "react";
import { Line } from "./Divider.styled";

interface IDividerProps {
	marginBottom?: number;
	marginTop?: number;
	sideMargin?: number;
	color?: types.theme.themeColors;
	withoutLine?: boolean;
}

const Divider: FunctionComponent<IDividerProps> = ({
	marginBottom = 0,
	marginTop = 0,
	sideMargin = 0,
	color = "black",
	withoutLine,
}) => {
	return (
		<Line
			color={color}
			marginBottom={marginBottom}
			marginTop={marginTop}
			sideMargin={sideMargin}
			withoutLine={withoutLine}
		/>
	);
};

export default Divider;
