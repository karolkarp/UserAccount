import styled from "styled-components";

export const AppWrapper = styled.div`
	position: relative;
	${({ theme }) => ({
		backgroundColor: theme.colors.background,
	})}
`;
