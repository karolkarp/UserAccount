import styled from "styled-components";
import { ReactSVG } from "react-svg";

interface IIconContainerProps {
	fill: string;
	width: number | string;
	height: number | string;
	strokecolor: string;
}

export const IconContainer = styled(ReactSVG as any)<IIconContainerProps>`
	${({ fill, strokecolor, width, height }) => `
	svg {
		width: ${typeof width === "string" ? width : `${width}px`};
		height: ${typeof height === "string" ? height : `${height}px`};
		fill: ${fill};
		strokeColor: ${strokecolor};
	}`}
	div {
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;
