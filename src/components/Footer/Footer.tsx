import React, { FunctionComponent } from "react";
import { Container, Row, Col, useScreenClass } from "react-grid-system";
import { MainItemsWrapper, SectionTitle } from "./Footer.styled";
import FooterItem from "@Components/Footer/subcomponents/FooterItem/FooterItem";

interface ISectionItem {
	label: string;
	to?: string;
}

interface ISection {
	title: string;
	items: ISectionItem[];
}

const sections: ISection[] = [
	{
		title: "Lorem",
		items: [
			{
				label: "Ipsum",
				to: "/",
			},
			{
				label: "dolor",
				to: "/",
			},
			{
				label: "sit",
				to: "/",
			},
		],
	},
	{
		title: "Lorem",
		items: [
			{
				label: "Ipsum",
				to: "/",
			},
			{
				label: "dolor",
				to: "/",
			},
			{
				label: "sit",
				to: "/",
			},
			{
				label: "amet",
				to: "/",
			},
		],
	},
	{
		title: "Lorem",
		items: [
			{
				label: "Ipsum",
				to: "/",
			},
			{
				label: "dolor",
				to: "/",
			},
		],
	},
	{
		title: "Lorem",
		items: [
			{
				label: "Ipsum",
				to: "/",
			},
			{
				label: "dolor",
				to: "/",
			},
			{
				label: "sit",
				to: "/",
			},
		],
	},
];

const Footer: FunctionComponent = () => {
	const screenClass = useScreenClass();
	const isXs = ["xs"].includes(screenClass);

	return (
		<div
			style={{
				backgroundColor: "black",
				width: "100%",
				height: "100%",
			}}
		>
			<Container fluid={isXs}>
				<Row>
					{sections.map((section, index) => (
						<Col xs={12} sm={6} lg={3} key={index}>
							<MainItemsWrapper>
								<SectionTitle
									justifyContent={
										isXs ? "center" : "flex-start"
									}
								>
									{section.title}
								</SectionTitle>
								{section.items.map((item, index) => (
									<FooterItem
										key={index}
										to={item.to}
										label={item.label}
										marginBottom={8}
										justifyContent={
											isXs ? "center" : "flex-start"
										}
									/>
								))}
							</MainItemsWrapper>
						</Col>
					))}
				</Row>
			</Container>
		</div>
	);
};

export default Footer;
