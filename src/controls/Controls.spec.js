// Test away
import React from "react";
//import renderer from "react-test-renderer"; 
import { render, fireEvent, cleanup } from "@testing-library/react";

import Controls from './Controls';

afterEach(cleanup);

describe('<Controls />', () => {
    it('renders without crashing', () => {
        render(<Controls />)
    });
    it('open and unlocked', () => {
        const closeSpy = jest.fn();
        const lockSpy = jest.fn();

        const { getByText } = render(<Controls closed={false} 
            locked={false} toggleLocked={lockSpy} toggleClosed={closeSpy}/>)
        const closeBtn = getByText(/close gate/i);
        const lockBtn = getByText(/lock gate/i);

        // checking button disabled status
        expect(closeBtn.disabled).toBeFalsy();
        expect(lockBtn.disabled).toBeTruthy();

        //checking button click events
        fireEvent.click(closeBtn);
        expect(closeSpy).toBeCalled();

        fireEvent.click(lockBtn);
        expect(lockSpy).not.toBeCalled();
    });
    it('closed and unlocked', () => {
        const closeSpy = jest.fn();
        const lockSpy = jest.fn();

        const { getByText } = render(<Controls closed={true} 
            locked={false} toggleLocked={lockSpy} toggleClosed={closeSpy}/>)
        const closeBtn = getByText(/open gate/i);
        const lockBtn = getByText(/lock gate/i);

        // checking button disabled status
        expect(closeBtn.disabled).toBeFalsy();
        expect(lockBtn.disabled).toBeFalsy();

        //checking button click events
        fireEvent.click(closeBtn);
        expect(closeSpy).toBeCalled();

        fireEvent.click(lockBtn);
        expect(lockSpy).toBeCalled();
    });
    it('closed and locked', () => {
        const closeSpy = jest.fn();
        const lockSpy = jest.fn();

        const { getByText } = render(<Controls closed={true} 
            locked={true} toggleLocked={lockSpy} toggleClosed={closeSpy}/>)
        const closeBtn = getByText(/unlock gate/i);
        const lockBtn = getByText(/open gate/i);

        // checking button disabled status
        expect(closeBtn.disabled).toBeFalsy();
        expect(lockBtn.disabled).toBeTruthy();

        //checking button click events
        fireEvent.click(closeBtn);
        expect(closeSpy).not.toBeCalled();

        fireEvent.click(lockBtn);
        expect(lockSpy).toBeCalled();
    });
})



// describe('<Controls />', () => {
//     it('matches snapshot', () => {
//         const tree = renderer.create(<Controls />);

//         expect(tree.toJSON).toMatchSnapshot();
//     });
//     it('should display a message Lock Gate', () => {
        
//         const { getByText, queryByText } = render(<Controls />)
//         fireEvent.click(getByText('Close Gate'))
//         expect(queryByText(/Open Gate/i)).toBeFalsy();
//     })
// })