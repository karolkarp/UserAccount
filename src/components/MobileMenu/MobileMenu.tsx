import React, { FunctionComponent } from "react";
import {
	MenuContentWrapper,
	MenuBackground,
	LinkItem,
	LinkItemsWrapper,
} from "./MobileMenu.styled";
import { Container } from "react-grid-system";
import Icon from "@Components/Icon/Icon";
import Divider from "@Components/Divider/Divider";

interface IMobileMenu {
	open: boolean;
	setMenuExpanded: (expanded: boolean) => void;
}

const MobileMenu: FunctionComponent<IMobileMenu> = ({
	open,
	setMenuExpanded,
}) => {
	const handleCloseMobileMenu = () => {
		setMenuExpanded(!open);
	};

	return (
		<aside>
			<>
				<MenuContentWrapper open={open}>
					<Container>
						<p>{"User Account Project"}</p>
						<Icon
							name="close"
							width={24}
							height={24}
							fill="black"
							onClick={handleCloseMobileMenu}
						/>
					</Container>
					<Divider marginTop={16} color="black36" />
					<Container>
						<LinkItemsWrapper>
							<LinkItem onClick={handleCloseMobileMenu} to={"/"}>
								{"Home"}
							</LinkItem>
							<Divider color="black12" />
							<LinkItem
								onClick={handleCloseMobileMenu}
								to={"/add"}
							>
								{"Add account"}
							</LinkItem>
							<Divider color="black12" />
						</LinkItemsWrapper>
					</Container>
				</MenuContentWrapper>
				<MenuBackground open={open} onClick={handleCloseMobileMenu} />
			</>
		</aside>
	);
};

export default MobileMenu;
