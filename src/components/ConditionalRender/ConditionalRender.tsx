import React, { memo, FunctionComponent } from 'react';

interface IConditionalRender {
	onTrue?: () => JSX.Element | JSX.Element[] | boolean | undefined;
	onFalse?: () => JSX.Element | JSX.Element[] | boolean | undefined;
	show: boolean;
}

const ConditionalRender: FunctionComponent<IConditionalRender> = ({ show, onTrue, onFalse }) => {
	if (show && onTrue) {
		return <>{onTrue()}</>;
	} else if (onFalse) {
		return <>{onFalse()}</>;
	}
	return <></>;
};

export default memo(ConditionalRender);
