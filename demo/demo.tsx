import React from 'react';
import ReactDOM from 'react-dom';
import Card from "../src/Card";
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    .content-area
    {
        padding: 1rem 0;
        &.overview {
            background-color: #f1ded0;
        }
        &.persoonlijk {
            background-color: #fff;
        }
    }
    div {
        margin-bottom: 1rem;
    }
`;

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
`;

ReactDOM.render(<>
    <GlobalStyles/>

    <div><Card cardStyle="default"><StyledDiv>.fd-card</StyledDiv></Card></div>
    <div><Card cardStyle="longread"><StyledDiv>.fd-card.longread</StyledDiv></Card></div>
</>,
document.querySelector('.overview main'));

ReactDOM.render(<>
    <GlobalStyles/>

    <div><Card cardStyle="default"><StyledDiv>.fd-card</StyledDiv></Card></div>
    <div><Card cardStyle="longread"><StyledDiv>.fd-card.longread</StyledDiv></Card></div>
</>,
document.querySelector('.overview aside'));

ReactDOM.render(<>
    <GlobalStyles/>

    <div><Card cardStyle="article"><StyledDiv>.fd-card.article</StyledDiv></Card></div>
</>,
document.querySelector('.article aside'));

ReactDOM.render(<>
    <GlobalStyles/>

    <div><Card cardStyle="persoonlijk"><StyledDiv>.fd-card.persoonlijk</StyledDiv></Card></div>
</>,
document.querySelector('.persoonlijk aside'));

