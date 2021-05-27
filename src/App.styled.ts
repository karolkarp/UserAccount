import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export default createGlobalStyle`
    ::-webkit-scrollbar {
		width: 12px;
		height: 12px;
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
