import * as React from 'react';
import { render } from '@testing-library/react';
import { SayHello } from '../components/say-hello';

describe('SayHello component specs', () => {
    it('should display the person name', () => {
        const person = 'John';
        const { getByText } = render(<SayHello person={person} />);
        const element = getByText('Hello John!');
        expect(element).not.toBeNull();
        expect(element.tagName).toEqual('H1');
    });

    it('should display the person name using snapshot testing', () => {
        const person = 'John';
        const { asFragment } = render(<SayHello person={person} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('should display the person name using jest-dom', () => {
        const person = 'John';
        const { getByText } = render(<SayHello person={person} />);
        const element = getByText('Hello John!');
        expect(element).toBeInTheDocument();
    });
});