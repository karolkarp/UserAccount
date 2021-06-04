import { Action, ActionFunction1, createAction } from "redux-actions";

export interface IUserForm {
	firstName?: string;
	lastName?: string;
	email?: string;
	phone?: number;
	birthday?: string;
	about?: string;
	avatar?: string;
}
export interface IFormPayload {
	payload: IUserForm;
}

export const setForm: ActionFunction1<
	IFormPayload["payload"],
	Action<IFormPayload["payload"]>
> = createAction("SET_FORM", (action: IFormPayload["payload"]) => action);

export const resetForm: ActionFunction1<
	IFormPayload["payload"],
	Action<IFormPayload["payload"]>
> = createAction("RESET_FORM");
