import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      secondary: Interpolation<FastOmit<DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, never>>;
      primary: string;
      background: string;
      text: string;
      grayLight: string;
      primaryText: string;
      defaultGrey: string;
      defaultWhite: string;
      defaultGreen: string;
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
    };
  }
}
