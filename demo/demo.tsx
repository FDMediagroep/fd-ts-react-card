import React from 'react';
import ReactDOM from 'react-dom';
import {ButtonCallToAction, ButtonEditorial} from "../src/Buttons";
import { createGlobalStyle } from 'styled-components';

function handleClick() {
    alert('clicked');
}

const GlobalStyles = createGlobalStyle`
    body {
        background-color: #ffeadb;
    }
    div {
        margin-bottom: 1rem;
    }
`;

ReactDOM.render(<>
        <GlobalStyles/>

        <div><ButtonCallToAction onClick={handleClick}>.fd-button-cta</ButtonCallToAction></div>
        <div><ButtonCallToAction onClick={handleClick} className="m">.fd-button-cta.m</ButtonCallToAction></div>
        <div><ButtonCallToAction onClick={handleClick} className="l">.fd-button-cta.l</ButtonCallToAction></div>

        <div><ButtonEditorial onClick={handleClick}>.fd-button</ButtonEditorial></div>
        <div><ButtonEditorial onClick={handleClick} className="m">.fd-button.m</ButtonEditorial></div>
        <div><ButtonEditorial onClick={handleClick} className="l">.fd-button.l</ButtonEditorial></div>
    </>,
    document.getElementById('root'));
