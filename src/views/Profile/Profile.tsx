import React, { FunctionComponent, useState } from "react";
import { Container, Row, Col } from "react-grid-system";
import {
	UserInformationContainer,
	AboutWrapper,
	AvatarWrapper,
	AvatarContainer,
} from "./Profile.styled";
import Form, {
	ErrorMessage,
	Field,
	FormHeader,
	FormSection,
	FormFooter,
	HelperMessage,
} from "@atlaskit/form";
import FieldTextArea from "@atlaskit/field-text-area";
import { ModalTransition } from "@atlaskit/modal-dialog";
import { AvatarPickerDialog } from "@atlaskit/media-avatar-picker";
import Avatar from "@atlaskit/avatar";
import TextField from "@atlaskit/textfield";
import { DatePicker } from "@atlaskit/datetime-picker";
import LoadingButton from "@atlaskit/button/loading-button";
interface User {
	firstName: string;
	lastName: string;
	email: string;
	phone: number;
	birthday: string;
	about: string;
	avatar: string;
}

const ONLY_NUMBERS_REGEX = /^\d+$/;
const ONLY_LETTERS_REGEX = /^[a-zA-Z]+$/;

const Profile: FunctionComponent = () => {
	const [modalOpen, setModalOpen] = useState<boolean>(false);
	const [avatar, setAvatar] = useState<string>();

	const handleSubmit = (data: User) => {
		return createUser(data);
	};

	const createUser = (data: User) => {
		const errors = {
			firstName: !data.firstName.match(ONLY_LETTERS_REGEX)
				? "Must contain only letters"
				: undefined,
			lastName: !data.lastName.match(ONLY_LETTERS_REGEX)
				? "Must contain only letters"
				: undefined,
			email:
				!data.email.includes("@") || !data.email.includes(".")
					? "Your email is not valid, please try again"
					: undefined,
			phone: !ONLY_NUMBERS_REGEX.test(String(data.phone))
				? "Must contain only digits"
				: undefined,
			birthday: undefined,
			about: undefined,
			avatar: undefined,
		};

		const withErrors = Object.keys(errors).some(
			(errorKey) => errors[errorKey as keyof typeof errors]
		);

		console.log("errors", errors, withErrors);
		if (!!withErrors) {
			return errors;
		}
		console.log(data);
	};

	const handleImage = (dataURI: string) => {
		console.log("dataURI", dataURI);
		setAvatar(dataURI);
	};

	const handleModalClose = () => {
		setModalOpen((isOpen) => !isOpen);
	};

	return (
		<Container>
			<Row>
				<Col>
					<UserInformationContainer>
						<Form onSubmit={handleSubmit}>
							{({ formProps, submitting }) => (
								<form {...formProps}>
									<FormHeader title="Create your profile" />
									<FormSection title="Personal Information">
										<Field
											name="firstName"
											label="First Name"
											defaultValue=""
											isRequired
										>
											{({ fieldProps, error }) => (
												<>
													<TextField
														{...fieldProps}
													/>
													{error && (
														<ErrorMessage>
															{error}
														</ErrorMessage>
													)}
												</>
											)}
										</Field>
										<Field
											name="lastName"
											label="Last Name"
											defaultValue=""
											isRequired
										>
											{({ fieldProps, error }) => (
												<>
													<TextField
														{...fieldProps}
													/>
													{error && (
														<ErrorMessage>
															{error}
														</ErrorMessage>
													)}
												</>
											)}
										</Field>
										<Field
											name="email"
											label="Email"
											defaultValue=""
											isRequired
										>
											{({ fieldProps, error }) => (
												<>
													<TextField
														{...fieldProps}
													/>
													{!error && (
														<HelperMessage>
															Must contain [@ .]
															symbols
														</HelperMessage>
													)}
													{error && (
														<ErrorMessage>
															{error}
														</ErrorMessage>
													)}
												</>
											)}
										</Field>
										<Field
											name="phone"
											label="Phone"
											defaultValue=""
											isRequired
										>
											{({ fieldProps, error }) => (
												<>
													<TextField
														{...fieldProps}
													/>
													{!error && (
														<HelperMessage>
															Must contain only
															digits
														</HelperMessage>
													)}
													{error && (
														<ErrorMessage>
															{error}
														</ErrorMessage>
													)}
												</>
											)}
										</Field>
										<Field
											name="birthday"
											label="Birthday"
											defaultValue=""
											isRequired
										>
											{({ fieldProps, error }) => (
												<DatePicker
													defaultValue="2021-05-05"
													{...fieldProps}
												/>
											)}
										</Field>
										<Field
											name="about"
											label="About"
											defaultValue=""
										>
											{({ fieldProps }) => (
												<AboutWrapper>
													<FieldTextArea
														{...fieldProps}
														shouldFitContainer={
															true
														}
														enableResize="vertical"
													/>
												</AboutWrapper>
											)}
										</Field>

										<Field name="avatar" label="Avatar">
											{({ fieldProps }) => (
												<AvatarContainer>
													{avatar && (
														<AvatarWrapper>
															<Avatar
																appearance="square"
																src={avatar}
																size="xxlarge"
															/>
														</AvatarWrapper>
													)}

													<ModalTransition>
														{modalOpen && (
															<AvatarPickerDialog
																avatars={[]}
																onImagePicked={
																	handleModalClose
																}
																onAvatarPicked={() => {}}
																onImagePickedDataURI={
																	handleImage
																}
																onCancel={
																	handleModalClose
																}
															/>
														)}
													</ModalTransition>
												</AvatarContainer>
											)}
										</Field>

										<LoadingButton
											shouldFitContainer
											appearance="primary"
											onClick={handleModalClose}
											isLoading={submitting}
										>
											Upload Avatar
										</LoadingButton>
									</FormSection>
									<FormFooter>
										<LoadingButton
											appearance="primary"
											type="submit"
											isLoading={submitting}
										>
											Save profile
										</LoadingButton>
									</FormFooter>
								</form>
							)}
						</Form>
					</UserInformationContainer>
				</Col>
			</Row>
		</Container>
	);
};

export default Profile;
