import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import {
	DashboardContainer,
	Label,
	Caption,
	Section,
	AvatarWrapper,
	AvatarContainer,
} from "./Dashboard.styled";
import { Container, Row, Col } from "react-grid-system";
import ConditionalRender from "@Components/ConditionalRender/ConditionalRender";
import fieldNames from "@Utils/fields/fieldNames";
import Avatar from "@atlaskit/avatar";

const Dashboard: FunctionComponent = () => {
	const form = useSelector((state: types.redux.IState) => state.form);
	return (
		<Container>
			<Row>
				<Col>
					<DashboardContainer>
						{Object.keys(form).map((key) => {
							const formKey = key as keyof typeof form;
							return (
								<Section>
									<Label>{fieldNames[formKey]}</Label>
									<ConditionalRender
										show={formKey === "avatar"}
										onTrue={() => (
											<AvatarContainer>
												{!!form[formKey] ? (
													<AvatarWrapper>
														<Avatar
															appearance="square"
															src={String(
																form[formKey]
															)}
															size="xxlarge"
														/>
													</AvatarWrapper>
												) : (
													""
												)}
											</AvatarContainer>
										)}
										onFalse={() => (
											<Caption>
												{form[formKey] || "--"}
											</Caption>
										)}
									/>
								</Section>
							);
						})}
					</DashboardContainer>
				</Col>
			</Row>
		</Container>
	);
};

export default Dashboard;
