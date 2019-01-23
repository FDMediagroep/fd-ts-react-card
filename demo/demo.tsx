import React from 'react';
import ReactDOM from 'react-dom';
import Card from "../src/Card";
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    body {
        background-color: #f1ded0;
    }
    div {
        margin-bottom: 1rem;
    }
`;

ReactDOM.render(<>
        <GlobalStyles/>

        <div><Card>.fd-card</Card></div>
    </>,
    document.getElementById('root'));
