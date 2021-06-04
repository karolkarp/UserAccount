import React, { FunctionComponent, useEffect, useState } from "react";
import { useScreenClass, Container } from "react-grid-system";
import MobileMenu from "@Components/MobileMenu/MobileMenu";
import {
	NavigationContainer,
	NavigationBarWrapper,
	LinkItem,
} from "./NavigationBar.styled";
import Icon from "@Components/Icon/Icon";
import ConditionalRender from "@Components/ConditionalRender/ConditionalRender";

const HIDE_MENU_OFFSET = 60;
export const MENU_ITEM_PROFILE = "User Profile";
export const MENU_ITEM_PROFILE_INFO = "User information";

const NavigationBar: FunctionComponent = () => {
	const [menuVisibility, setMenuVisibility] = useState<{
		position: number;
		hide: boolean;
	}>({ position: 0, hide: false });
	const [menuExpanded, setMenuExpanded] = useState(false);

	const screenClass = useScreenClass();
	const isXsSm = ["xs", "sm"].includes(screenClass);

	useEffect(() => {
		if (isXsSm) {
			const handleScrool = () => {
				setMenuVisibility((prevValues) => {
					return {
						position: window.scrollY,
						hide:
							prevValues.position >= HIDE_MENU_OFFSET &&
							prevValues.position < window.scrollY,
					};
				});
			};

			window.addEventListener("scroll", handleScrool);
		}
	}, [screenClass, isXsSm]);

	const handleOpenMenu = () => {
		setMenuExpanded((expanded) => !expanded);
	};

	return (
		<NavigationContainer>
			<NavigationBarWrapper
				menuExpanded={menuExpanded}
				hideMenu={isXsSm && !menuExpanded ? menuVisibility.hide : false}
			>
				<Container>
					<p>{"User Account Project"}</p>
					<ConditionalRender
						show={isXsSm}
						onTrue={() => (
							<Icon
								name="hamburgerMenu"
								width={24}
								height={24}
								fill="black"
								onClick={handleOpenMenu}
							/>
						)}
						onFalse={() => (
							<>
								<LinkItem to={"/"}>
									{MENU_ITEM_PROFILE}
								</LinkItem>
								<LinkItem to={"/add"}>
									{MENU_ITEM_PROFILE_INFO}
								</LinkItem>
							</>
						)}
					/>
				</Container>
			</NavigationBarWrapper>
			<MobileMenu open={menuExpanded} setMenuExpanded={setMenuExpanded} />
		</NavigationContainer>
	);
};

export default NavigationBar;
