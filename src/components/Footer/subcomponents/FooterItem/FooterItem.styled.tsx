import styled from "styled-components";
import { Link } from "react-router-dom";
import * as cssTypes from "csstype";

interface IItemProps {
	typography: keyof types.ITypography;
}

interface IItemWrapperProps {
	marginBottom?: number;
	justifyContent: cssTypes.Property.JustifyContent;
}

export const LinkItem = styled(Link)<IItemProps>`
	display: block;
	text-decoration: none;
	${({ theme, typography }) => ({
		...theme.typography[typography],
		color: theme.colors.white70,
	})}
`;

export const TextItem = styled.p<IItemProps>`
	${({ theme, typography }) => ({
		...theme.typography[typography],
		color: theme.colors.white70,
	})}
	margin:0;
`;

export const ItemWrapper = styled.div<IItemWrapperProps>`
	${({ marginBottom }) => !!marginBottom && { marginBottom }}
	${({ justifyContent }) => ({ justifyContent })}
	display: flex;
`;
