import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { InputElement } from '../components/inputElement';

describe('InputElement component specs', () => {
    it('should display a label and input elements with empty userName value', () => {
        const { getByTestId } = render(<InputElement />);
        const labelElement = getByTestId('userName-label');
        const inputElement = getByTestId('userName-input');
        expect(labelElement.textContent).toEqual('');
        expect(inputElement.value).toEqual('');
    });

    it('should update h3 text when input changes', () => {
        const { getByTestId } = render(<InputElement />);
        const labelElement = getByTestId('userName-label');
        const inputElement = getByTestId('userName-input');
        fireEvent.change(inputElement, { target: { value: 'John' } });
        expect(labelElement.textContent).toEqual('John');
        expect(inputElement.value).toEqual('John');
    });
});