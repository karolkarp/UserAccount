import styled from "styled-components";
import * as cssTypes from "csstype";

interface ISectionTitle {
	justifyContent: cssTypes.Property.JustifyContent;
}

export const MainItemsWrapper = styled.div`
	width: 100%;
	padding-bottom: 39px;
`;

export const SectionTitle = styled.p<ISectionTitle>`
	margin-bottom: 16px;
	${({ justifyContent }) => ({ justifyContent })}
	display: flex;
	color: grey;
`;
