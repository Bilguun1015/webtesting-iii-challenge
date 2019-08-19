// Test away!
import React from "react";
import renderer from "react-test-renderer"; 
import { render, fireEvent } from "@testing-library/react";

import Display from './Display';

describe('<Controls />', () => {
    it('matches snapshot', () => {
        const tree = renderer.create(<Display />);

        expect(tree.toJSON).toMatchSnapshot();
    });
    it('should display Open and Unlocked', () => {
        
        const { queryByText } = render(<Display closed={false}/>)
        expect(queryByText(/Open/i)).toBeTruthy();
        expect(queryByText(/Unlocked/i)).toBeTruthy();
    })
    it('should display Closed and Unlocked' , () => {
        
        const { queryByText } = render(<Display closed={true}/>)
        expect(queryByText(/Closed/i)).toBeTruthy();
        expect(queryByText(/Unlocked/i)).toBeTruthy();
    })
    it('should display Locked and Closed', () => {
        
        const { queryByText } = render(<Display locked={false}/>)
        expect(queryByText(/Locked/i)).toBeTruthy();
        expect(queryByText(/Open/i)).toBeTruthy();
    })
    it('should display Locked and Closed', () => {
        
        const { queryByText } = render(<Display locked={true}/>)
        expect(queryByText(/Unlocked/i)).toBeTruthy();
        expect(queryByText(/Closed/i)).toBeTruthy();
    })
})
