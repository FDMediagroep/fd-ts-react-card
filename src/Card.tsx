import React, { PureComponent } from "react";
import { createGlobalStyle } from "styled-components";

export default class Card extends PureComponent<any, any> {
    render() {
        return (
            <>
                <GlobalStyles/>
                <div {...this.props} className={`fd-card${this.props.className ? ` ${this.props.className}` : ''}`}>{this.props.children}</div>
            </>
        );
    }
}

const GlobalStyles = createGlobalStyle`
    .fd-card {
        background: #ffeadb;
        box-shadow: 0 2px 0.2px rgba(0,0,0,0.1);
        position: relative;
        &.longread {
            box-shadow: inset 2px 0 0 0 #f05031, 0 2px 0.2px rgba(0,0,0,0.1)
        }
    }
`;

export {GlobalStyles as CardStyle};
