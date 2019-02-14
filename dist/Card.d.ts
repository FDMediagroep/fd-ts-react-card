import { PureComponent } from "react";
export declare type CardTypes = 'article' | 'default' | 'longread' | 'persoonlijk';
declare type CardStyle = {
    [P in CardTypes]?: any;
};
export interface Props {
    className?: string;
    cardStyle: CardTypes;
    [x: string]: any;
}
export declare const cardStyles: CardStyle;
export default class Card extends PureComponent<Props, any> {
    render(): JSX.Element;
}
export declare function getCardStyle(textStyle: CardTypes): any;
export declare function getAllCardStyles(filter?: CardTypes[]): any;
export {};
