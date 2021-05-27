import { CSSObject } from "styled-components";
import * as cssTypes from "csstype";
export {};

declare global {
	namespace types {
		type color = cssTypes.Color;

		namespace theme {
			type themeColors =
				| "primary"
				| "background"
				| "black"
				| "black12"
				| "black24"
				| "black36"
				| "white";
		}

		interface ITypographyParams extends CSSObject {
			fontFamily: cssTypes.FontFamilyProperty;
			fontSize: cssTypes.FontSizeProperty<any>;
			lineHeight: cssTypes.LineHeightProperty<any>;
			letterSpacing?: cssTypes.LetterSpacingProperty<any>;
		}

		interface ITypography {
			titleBold: ITypographyParams;
			title: ITypographyParams;
		}

		interface ITheme {
			typography: ITypography;
			colors: theme.themeColor;
		}
	}
}
