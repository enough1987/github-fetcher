import React from 'react'
import { shallow } from 'enzyme'

import { findByAttr } from '../../testUtils'
import { Input } from './Input'
import { storeFactory } from '../../testUtils'

let addGuess
let getCorrectGuess
let defaultProps
let setup

beforeEach(() => {
  getCorrectGuess = jest.fn()
  addGuess = jest.fn()
  defaultProps = { show: true, addGuess, getCorrectGuess }

  setup = (props = {}, initialState = {}) => {
    const store = storeFactory(initialState)
    const wrapper = shallow(<Input { ...props } store={ store } />)

    return wrapper
  }
})

afterEach(() => {
  addGuess.mockClear()
  getCorrectGuess.mockClear()
})

test('on click add guess', () => {
  const props = defaultProps
  const initialState = { ...props, correctGuess: 'test' }
  const wrapper = setup(initialState)
  const button = findByAttr(wrapper, 'component-button')
  button.simulate('click')
  expect(addGuess).toHaveBeenCalled()
})
