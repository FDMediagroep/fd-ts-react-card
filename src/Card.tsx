import React, { PureComponent } from "react";
import { createGlobalStyle } from "styled-components";

export type CardTypes = 'article' | 'default' | 'longread' | 'persoonlijk';

type CardStyle = {
    [P in CardTypes]?: any
};

export interface Props {
    className?: string;
    cardStyle: CardTypes;
}

export const cardStyles: CardStyle = {
    article: createGlobalStyle`
    .fd-card.article {
        background: rgba(0,0,0,0.04);
        box-shadow: 0 2px 0.2px rgba(0,0,0,0.1);
        position: relative;
    }`,
    default: createGlobalStyle`
    .fd-card {
        background: #ffeadb;
        box-shadow: 0 2px 0.2px rgba(0,0,0,0.1);
        position: relative;
    }`,
    longread: createGlobalStyle`
    .fd-card.longread {
        background: #ffeadb;
        box-shadow: 0 2px 0.2px rgba(0,0,0,0.1);
        position: relative;
        box-shadow: inset 2px 0 0 0 #f05031, 0 2px 0.2px rgba(0,0,0,0.1)
    }`,
    persoonlijk: createGlobalStyle`
    .fd-card.persoonlijk {
        background: rgba(0,0,0,0.04);
        box-shadow: 0 2px 0.2px rgba(0,0,0,0.1);
        position: relative;
    }`
};

export default class Card extends PureComponent<Props, any> {
    render() {
        return (
            <>
                {React.createElement(cardStyles[this.props.cardStyle] as any, {}, null)}
                <div {...this.props} className={`fd-card${this.props.className ? ` ${this.props.className}` : ''}${this.props.cardStyle ? ` ${this.props.cardStyle}` : ''}`}>{this.props.children}</div>
            </>
        );
    }
}

const GlobalStyles = createGlobalStyle`
    .fd-card {
        background: #ffeadb;
        &.article {
            background: rgba(0,0,0,0.04);
        }
        box-shadow: 0 2px 0.2px rgba(0,0,0,0.1);
        position: relative;
        &.longread {
            box-shadow: inset 2px 0 0 0 #f05031, 0 2px 0.2px rgba(0,0,0,0.1)
        }
    }
`;

export {GlobalStyles as CardStyle};

export function getCardStyle(textStyle: CardTypes) {
    return cardStyles[textStyle];
}

export function getAllCardStyles(filter?: CardTypes[]) {
    const tmp: any = cardStyles;
    let result: any;
    for (const key in tmp) {
        if (filter && filter.indexOf(key as any) === -1) { continue; }
        if (result) {
            result = createGlobalStyle`${result.globalStyle.rules}${tmp[key].globalStyle.rules}`;
        } else {
            result = createGlobalStyle`${tmp[key].globalStyle.rules}`;
        }
    }
    return result;
}
