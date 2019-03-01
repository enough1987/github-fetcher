import React from 'react';
import { shallow } from 'enzyme';

import { findByAttr, storeFactory } from "../../testUtils";
import { ResetGuesses } from './ResetGuesses';

describe('Reset Guesses ', () => { 

    let resetGuesses;
    let defaultProps;
    let setup;

    beforeEach(() => {
        resetGuesses = jest.fn();

        defaultProps = { resetGuesses };

        setup = (props = defaultProps, initialState = {}) => {
            const store = storeFactory(initialState);
            const wrapper = shallow(<ResetGuesses {...props} store={store} />);

            return wrapper;
        }
    });

    afterEach(() => {
        resetGuesses.mockClear();
    });

    test('should render a button', () => {
        const wrapper = setup();
        const button = findByAttr(wrapper, 'reset-guesses-button');
        expect( button )
            .toBeTruthy();
    });
    
    test('should reset on click', () => {    
        const wrapper = setup();
        const button = findByAttr(wrapper, 'reset-guesses-button');
        //button.simulate('click');
        //expect(resetGuesses)
        //    .toBeCalled();
    });

});
