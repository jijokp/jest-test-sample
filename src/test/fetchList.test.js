import * as React from 'react';
import { render, waitFor } from '@testing-library/react';
import * as api from '../fetch';
import { List } from '../components/fetchList';

describe('NameCollection component specs', () => {
  it('should display a list with one item when it mounts the component and it resolves the async call', async () => {
    
    const getStub = jest
      .spyOn(api, 'getNameCollection')
      .mockResolvedValue(['John Doe']);
   
    const { getAllByTestId, queryByText } = render(<List />);
    const elementBeforeWait = queryByText('John Doe');
    expect(elementBeforeWait).not.toBeInTheDocument();
    const elements = await waitFor(() => getAllByTestId('name'));
   
    expect(getStub).toHaveBeenCalled();
    expect(elements.length).toEqual(1);
    expect(elements[0].textContent).toEqual('John Doe');
  });

  it('should display a list with two items when it mounts the component and it resolves the async call', async () => {
    
    const getStub = jest
      .spyOn(api, 'getNameCollection')
      .mockResolvedValue(['John Doe', 'Jane Doe']);

    
    const { getAllByTestId } = render(<List />);
    const elements = await waitFor(() => getAllByTestId('name'));

    expect(getStub).toHaveBeenCalled();
    expect(elements.length).toEqual(2);
    expect(elements[0].textContent).toEqual('John Doe');
    expect(elements[1].textContent).toEqual('Jane Doe');
  });
});