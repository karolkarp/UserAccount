import styled from "styled-components";
import { Link } from "react-router-dom";

interface IHeader {
	hideMenu: boolean;
	menuExpanded: boolean;
}

export const NavigationContainer = styled.div`
	width: 100%;
	height: 96px;
`;

export const NavigationBarWrapper = styled.header<IHeader>`
	background-color: ${({ theme }) => theme.colors.white};
	${({ menuExpanded }) => {
		return {
			boxShadow: menuExpanded
				? "unset"
				: "0 7px 8px 0 rgba(0, 0, 0, 0.05), 0 5px 22px 4px rgba(0, 0, 0, 0.04), 0 12px 17px 2px rgba(0, 0, 0, 0.04)",
		};
	}}
	z-index: 99;
	height: 96px;
	width: 100%;
	position: fixed;
	transition: all 0.2s ease-in-out;
	z-index: 50;
	left: 0;
	top: ${({ hideMenu }) => (hideMenu ? -96 : 0)}px;
	background-color: purple;
`;

export const LinkItem = styled(Link)`
	transition: all 0.1s ease-in-out;
	text-decoration: none;
	cursor: pointer;
	margin-right: 16px;
	color: ${({ theme }) => theme.colors.black};
	${({ theme }) => ({ ...theme.typography.title })}
	&:hover {
		${({ theme }) => {
			return {
				color: theme.colors.white,
			};
		}}
`;
