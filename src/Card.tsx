import React, { PureComponent } from "react";
import { createGlobalStyle, css } from "styled-components";

export type CardTypes = 'article' | 'default' | 'longread' | 'persoonlijk' | 'persoonlijk longread';

type CardStyle = {
    [P in CardTypes]?: any
};

export interface Props {
    className?: string;
    cardStyle: CardTypes;
    [x: string]: any;
}

export const cardStyles: CardStyle = {
    'article':
css`.fd-card.article {
    background: rgba(0,0,0,0.04);
    box-shadow: 0 2px 0.2px rgba(0,0,0,0.1);
    position: relative;
}`,
    'default':
css`.fd-card {
    background: #ffeadb;
    box-shadow: 0 2px 0.2px rgba(0,0,0,0.1);
    position: relative;
}`,
    'longread':
css`.fd-card.longread {
    background: #ffeadb;
    position: relative;
    box-shadow: inset 2px 0 0 0 #f05031, 0 2px 0.2px rgba(0,0,0,0.1)
}`,
    'persoonlijk':
css`.fd-card.persoonlijk {
    background: rgba(0,0,0,0.04);
    box-shadow: 0 2px 0.2px rgba(0,0,0,0.1);
    position: relative;
}`,
    'persoonlijk longread':
css`.fd-card.persoonlijk.longread {
    background: rgba(0,0,0,0.04);
    box-shadow: inset 2px 0 0 0 #f05031, 0 2px 0.2px rgba(0,0,0,0.1);
    position: relative;
}`
};

export default function Card(props: Props) {
    return (
        <>
            {React.createElement(createGlobalStyle(cardStyles[props.cardStyle]), {}, null)}
            <div {...props} className={`fd-card${props.className ? ` ${props.className}` : ''}${props.cardStyle ? ` ${props.cardStyle}` : ''}`}>{props.children}</div>
        </>
    );
}

export function getCardStyle(textStyle: CardTypes) {
    return cardStyles[textStyle];
}

export function getAllCardStyles(filter?: CardTypes[]) {
    const tmp: any = cardStyles;
    let result: any;
    for (const key in tmp) {
        if (filter && filter.indexOf(key as any) === -1) { continue; }
        if (result) {
            result = css`${result}${tmp[key]}`;
        } else {
            result = css`${tmp[key]}`;
        }
    }
    return result;
}

export const CardStyle = getAllCardStyles();
