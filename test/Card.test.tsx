import TestRenderer from 'react-test-renderer';
import Card from '../src/Card';
import React from 'react';

describe('Card', () => {
    test('renders card correctly', () => {
        let card = TestRenderer.create(<Card cardStyle='default'/>);
        expect(card.toJSON()).toMatchSnapshot();
    });

    test('renders longread card correctly', () => {
        let card = TestRenderer.create(<Card cardStyle='longread'/>);
        expect(card.toJSON()).toMatchSnapshot();
    });

    test('renders article card correctly', () => {
        let card = TestRenderer.create(<Card cardStyle='article'/>);
        expect(card.toJSON()).toMatchSnapshot();
    });

    test('renders persoonlijk card correctly', () => {
        let card = TestRenderer.create(<Card cardStyle='persoonlijk'/>);
        expect(card.toJSON()).toMatchSnapshot();
    });
});
