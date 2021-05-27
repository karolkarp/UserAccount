import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import theme from "@Utils/theme/theme";

export default createGlobalStyle`

::-webkit-scrollbar {
	width: 12px;
	height: 12px;
}
::-webkit-scrollbar-thumb {
	border-radius: 12px;
	transition: all .2s ease-in-out;
	box-shadow: inset 0 0 10px 10px ${theme.colors.black12};
	border: solid 4px transparent;
}
::-webkit-scrollbar-thumb:hover {
	  box-shadow: inset 0 0 10px 10px ${theme.colors.black24};
}
::-webkit-scrollbar-thumb:active {
	  box-shadow: inset 0 0 10px 10px ${theme.colors.black36};
}
::-webkit-scrollbar-track {
	  box-shadow: inset 0 0 10px 10px transparent;
	  border: solid 4px transparent;
}

	body {
		margin: 0;
	}
`;

export const AppWrapper = styled.div`
	position: relative;
	${({ theme }) => ({
		backgroundColor: theme.colors.background,
	})}
`;
