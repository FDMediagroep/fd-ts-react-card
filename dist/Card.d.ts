export declare type CardTypes = 'article' | 'default' | 'longread' | 'persoonlijk' | 'persoonlijk longread';
declare type CardStyle = {
    [P in CardTypes]?: any;
};
export interface Props {
    className?: string;
    cardStyle: CardTypes;
    [x: string]: any;
}
export declare const cardStyles: CardStyle;
export default function Card(props: Props): JSX.Element;
export declare function getCardStyle(textStyle: CardTypes): any;
export declare function getAllCardStyles(filter?: CardTypes[]): any;
export declare const CardStyle: any;
export {};
