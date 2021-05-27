import styled from "styled-components";
import { Link } from "react-router-dom";
import { MatchScreen } from "@Utils/layout/layoutSupport";

export const ListIconWrapper = styled.div`
	width: 24px;
	height: 24px;
`;

export const MenuContentWrapper = styled.div<{ open: boolean }>`
	${({ open }) => {
		const transform = open ? "translate(0%, 0)" : "translate(-100%, 0)";
		return {
			transform,
			width: MatchScreen("xs") ? "100%" : "61%",
			maxWidth: !MatchScreen("xs") ? 467 : "inherit",
			opacity: open ? 1 : 0,
			visibility: open ? "visible" : "hidden",
			inset: 0,
		};
	}}
	position: fixed;
	background-color: white;
	height: 100%;
	z-index: 202;
	transition: all 0.2s ease-in-out;
`;

export const MenuBackground = styled.div<{ open: boolean }>`
	${({ open }) => {
		return {
			opacity: open ? 0.64 : 0,
			visibility: open ? "visible" : "hidden",
		};
	}}
	position: fixed;
	background: rgb(0, 0, 0);
	transition: all 300ms ease-in-out;
	pointer-events: auto;
	inset: 0px;
	z-index: 201;
`;

export const LinkItem = styled(Link)`
	transition: all 0.1s ease-in-out;
	text-decoration: none;
	cursor: pointer;
	margin-right: 16px;
	padding-top: 16px;
	padding-bottom: 16px;
	display: flex;
	align-items: center;
	color: ${({ theme }) => theme.colors.black};
	${({ theme }) => ({ ...theme.typography.title })}
	&:hover {
		${({ theme }) => {
			return {
				color: theme.colors.white,
			};
		}}
`;

export const LinkItemsWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;
