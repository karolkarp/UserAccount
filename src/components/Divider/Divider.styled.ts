import styled from 'styled-components';

interface ILineProps {
	marginBottom: number;
	marginTop: number;
	sideMargin: number;
	color: types.theme.themeColors;
	withoutLine?: boolean;
}

export const Line = styled.div<ILineProps>`
	${({ theme, marginBottom, marginTop, sideMargin, color, withoutLine = false }) => ({
		backgroundColor: theme.colors[color],
		margin: `${marginTop}px ${sideMargin}px ${marginBottom}px ${sideMargin}px`,
		minHeight: withoutLine ? 0 : 1,
	})}
	width: 100%;
`;
