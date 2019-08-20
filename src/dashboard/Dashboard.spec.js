// Test away
import React from 'react';
//import renderer from 'react-test-renderer';
import { render, cleanup } from "@testing-library/react/pure";

import Dashboard from './Dashboard';
import { fireEvent } from '@testing-library/react/dist/pure';


describe('<Dashboard />', () =>{
    beforeEach(cleanup)
    it('renders without crashing', () => {
        render(<Dashboard />);
    });
})

describe('<Dashboard />', () => {
    const {getByText} = render(<Dashboard />);
    it('default state open and unlocked', () => {
        
        // verify open and unlocked
        getByText(/^open$/i);
        getByText(/^unlocked$/i)

        const lockBtn = getByText(/^lock gate$/i);
        const closeBtn = getByText(/^close gate$/i)
    });
    it('open and uncloked to closed and uncloked', () => {
        const closeBtn = getByText(/^close gate$/i);
        fireEvent.click(closeBtn);
        //check display text
        getByText(/^closed$/i);
        getByText(/^unlocked$/i)
        //check button text
        getByText(/^lock gate$/i)
        getByText(/^open gate$/i)
    });
    it('closed and uncloked to closed and locked', () => {
        const lockBtn = getByText(/^lock gate$/i);
        fireEvent.click(lockBtn);
        //check display text
        getByText(/^closed$/i);
        getByText(/^locked$/i)
        //check button text
        getByText(/^unlock gate$/i)
        getByText(/^open gate$/i)
    });
    it('closed and locked to closed and unlocked', () => {
        const lockBtn = getByText(/^unlock gate$/i);
        fireEvent.click(lockBtn);
        //check display text
        getByText(/^closed$/i);
        getByText(/^unlocked$/i)
        //check button text
        getByText(/^lock gate$/i)
        getByText(/^open gate$/i)
    });
    it('closed and locked to open and unlocked', () => {
        const openBtn = getByText(/^open gate$/i);
        fireEvent.click(openBtn);
        //check display text
        getByText(/^open$/i);
        getByText(/^unlocked$/i)
        //check button text
        getByText(/^lock gate$/i)
        getByText(/^close gate$/i)
    });
})






// describe('<Dashboard />', () => {
//     it('should match snapshot', () => {
//         const tree = renderer.create(<Dashboard />).toJSON();

//         expect(tree).toMatchSnapshot();
//     })
// })
