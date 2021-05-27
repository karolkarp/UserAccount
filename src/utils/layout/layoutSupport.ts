import { ScreenClass, useScreenClass } from "react-grid-system";

export function MatchScreen(match: ScreenClass | ScreenClass[]): boolean {
	const usedScreenClass = useScreenClass() as ScreenClass;

	if (Array.isArray(match)) {
		return match.includes(usedScreenClass);
	}
	return usedScreenClass === match;
}
