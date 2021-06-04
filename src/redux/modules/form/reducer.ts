import { setForm, resetForm, IFormPayload } from "./actions";
import immerHandleActions from "@Redux/utils/immerHandleActions";

const init = {
	firstName: "",
	lastName: "",
	email: "",
	phone: "",
	birthday: "",
	about: "",
	avatar: "",
};

type draft = typeof init;

export interface ISelectedItemsDraft extends draft {}

const reducers = {
	[setForm.toString()](draft: draft, action: IFormPayload) {
		return { ...draft, ...action.payload };
	},
	[resetForm.toString()](draft: draft, action: IFormPayload) {
		return init;
	},
};

export default immerHandleActions(reducers, init);
