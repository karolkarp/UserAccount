import styled from 'styled-components';
import { ReactSVG } from 'react-svg';

interface IIconContainerProps {
	fill: string;
	width: number | string;
	height: number | string;
	strokecolor: string;
}

export const IconContainer = styled(ReactSVG)<IIconContainerProps>`
	${({ fill, strokecolor, width, height, onClick }) => `
	svg {
		width: ${typeof width === 'string' ? width : `${width}px`};
		height: ${typeof height === 'string' ? height : `${height}px`};
		fill: ${fill};
		strokeColor: ${strokecolor};
		cursor: ${onClick ? 'pointer' : ''}
	}`}
	div {
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;
