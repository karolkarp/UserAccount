import { Icons } from '@Assets/icons';

export {};

declare global {
	namespace types {
		type iconNames = keyof typeof Icons;
	}
}
