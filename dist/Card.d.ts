import { PureComponent } from "react";
export declare type CardTypes = 'article' | 'default' | 'longread' | 'persoonlijk';
declare type CardStyle = {
    [P in CardTypes]?: any;
};
export interface Props {
    className?: string;
    cardStyle: CardTypes;
}
export declare const cardStyles: CardStyle;
export default class Card extends PureComponent<Props, any> {
    render(): JSX.Element;
}
declare const GlobalStyles: import("styled-components").GlobalStyleComponent<{}, import("styled-components").DefaultTheme>;
export { GlobalStyles as CardStyle };
export declare function getCardStyle(textStyle: CardTypes): any;
export declare function getAllCardStyles(filter?: CardTypes[]): any;
