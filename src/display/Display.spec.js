// Test away!
import React from "react";
//import renderer from "react-test-renderer"; 
import { render, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'

import Display from './Display';

afterEach(cleanup)

describe('<Display />', () => {
    it('renders without crashing', () => {
        render(<Display />);
    });
    it('open and unlocked', () => {
        const {getByText, queryByText} = render(<Display closed={false} locked={false} />);
        //check for correct text
        const unlock = getByText(/unlocked/i);
        const open = getByText(/open/i);
        //console.log(unlock)
        //cehck for correct colors via css classes
        expect(unlock.className).toMatch(/\bgreen-led\b/i)
        // from jest-dom/extend-expect
        expect(unlock).toHaveClass('green-led')


        expect(queryByText(/open/i)).toBeTruthy();
        //check that incorrect text does not show up in the document
        expect(queryByText(/closed/i)).toBe(null)
    });
    it('closed and unlocked', () => {
        const {getByText} = render(<Display closed={true} locked={false} />);
        //check for correct text
        getByText(/unlocked/i);
        getByText(/closed/i);
    });
    it('closed and locked', () => {
        const {getByText} = render(<Display closed={true} locked={true} />);
        //check for correct text
        getByText(/^locked$/i);
        getByText(/closed/i);
    });

})

// describe('<Controls />', () => {
//     it('matches snapshot', () => {
//         const tree = renderer.create(<Display />);

//         expect(tree.toJSON).toMatchSnapshot();
//     });
//     it('should display Open and Unlocked', () => {
        
//         const { queryByText } = render(<Display closed={false}/>)
//         expect(queryByText(/Open/i)).toBeTruthy();
//         expect(queryByText(/Unlocked/i)).toBeTruthy();
//     })
//     it('should display Closed and Unlocked' , () => {
        
//         const { queryByText } = render(<Display closed={true}/>)
//         expect(queryByText(/Closed/i)).toBeTruthy();
//         expect(queryByText(/Unlocked/i)).toBeTruthy();
//     })
//     it('should display Locked and Closed', () => {
        
//         const { queryByText } = render(<Display locked={false}/>)
//         expect(queryByText(/Locked/i)).toBeTruthy();
//         expect(queryByText(/Open/i)).toBeTruthy();
//     })
//     it('should display Locked and Closed', () => {
        
//         const { queryByText } = render(<Display locked={true}/>)
//         expect(queryByText(/Unlocked/i)).toBeTruthy();
//         expect(queryByText(/Closed/i)).toBeTruthy();
//     })
// })
