// Test away
import React from "react";
import renderer from "react-test-renderer"; 
import { render, fireEvent } from "@testing-library/react";

import Controls from './Controls';

describe('<Controls />', () => {
    it('matches snapshot', () => {
        const tree = renderer.create(<Controls />);

        expect(tree.toJSON).toMatchSnapshot();
    });
    it('should display a message Lock Gate', () => {
        
        const { getByText, queryByText } = render(<Controls />)
        fireEvent.click(getByText('Close Gate'))
        expect(queryByText(/Open Gate/i)).toBeFalsy();
    })
})