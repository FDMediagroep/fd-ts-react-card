import React from 'react';
import ReactDOM from 'react-dom';
import Card from "../src/Card";
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    body {
        background-color: #f1ded0;
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

        <div><Card><StyledDiv>.fd-card</StyledDiv></Card></div>
        <div><Card className="longread"><StyledDiv>.fd-card.longread</StyledDiv></Card></div>
    </>,
    document.getElementById('root'));

