import TestRenderer from 'react-test-renderer';
import Card from '../src/Card';
import React from 'react';

describe('Card', () => {
    test('renders card correctly', () => {
        let button = TestRenderer.create(<Card/>);
        expect(button.toJSON()).toMatchSnapshot();
    });
});