import React, { FunctionComponent } from "react";
import {
	ItemWrapper,
	LinkItem,
	TextItem,
} from "@Components/Footer/subcomponents/FooterItem/FooterItem.styled";
import ConditionalRender from "@Components/ConditionalRender/ConditionalRender";
import * as cssTypes from "csstype";

interface IFooterItemProps {
	label: string;
	typography?: keyof types.ITypography;
	to?: string;
	marginBottom?: number;
	justifyContent?: cssTypes.Property.JustifyContent;
}

const FooterItem: FunctionComponent<IFooterItemProps> = ({
	typography = "small",
	marginBottom,
	to,
	label,
	justifyContent = "center",
}) => {
	return (
		<ItemWrapper
			marginBottom={marginBottom}
			justifyContent={justifyContent}
		>
			<ConditionalRender
				show={!!to}
				onTrue={() => (
					<LinkItem to={to || ""} typography={typography}>
						{label}
					</LinkItem>
				)}
				onFalse={() => (
					<TextItem typography={typography}>{label}</TextItem>
				)}
			/>
		</ItemWrapper>
	);
};

export default FooterItem;
