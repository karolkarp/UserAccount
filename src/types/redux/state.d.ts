import { IUserForm } from "../../redux/modules/form/actions";

export {};
declare global {
	namespace types {
		namespace redux {
			interface IState {
				form: IUserForm;
			}
		}
	}
}
