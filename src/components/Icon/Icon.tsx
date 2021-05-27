import React, { FunctionComponent } from "react";
import { Icons } from "@Assets/icons";
import theme from "@Utils/theme/theme";
import { IconContainer } from "./Icon.styled";

interface IIconProps {
	name?: types.iconNames;
	width?: number | string;
	height?: number | string;
	fill?: keyof typeof theme.colors;
	stroke?: types.theme.themeColors;
	onClick?: (e?: any) => any;
}

const Icon: FunctionComponent<IIconProps> = (props) => {
	const { name, width = 20, height = 20, fill, onClick, stroke } = props;
	const IconAsset = name && Icons[name] ? Icons[name].default : undefined;
	const fillColor = fill ? theme.colors[fill] : undefined;
	const strokeColor = stroke ? theme.colors[stroke] : undefined;

	return IconAsset ? (
		<IconContainer
			onClick={onClick}
			src={IconAsset}
			fill={fillColor}
			width={width}
			height={height}
			strokecolor={strokeColor}
		/>
	) : null;
};

export default Icon;
