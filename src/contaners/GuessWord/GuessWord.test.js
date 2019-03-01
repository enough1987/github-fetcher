import React from 'react';
import { shallow } from 'enzyme';

import { findByAttr, storeFactory } from "../../testUtils";
import { GuessWord } from './GuessWord';

describe('GuessWord ', () => { 

    let getGuesses;
    let defaultProps;
    let setup;

    beforeEach(() => {
        getGuesses = jest.fn();

        defaultProps = { getGuesses };

        setup = (props = defaultProps, initialState = {}) => {
            const store = storeFactory(initialState);
            const wrapper = shallow(<GuessWord {...props} store={store} />);

            return wrapper;
        }
    });

    afterEach(() => {
        getGuesses.mockClear();
    });

    test('should render guess-word component', () => {
        const wrapper = setup();
        console.log( ' ... ', wrapper.html() );
        const component = findByAttr(wrapper, 'guess-word');
        expect( component )
            .toBeTruthy();
    });

});
