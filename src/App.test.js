import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from './App';
import Form from './components/Form.js'
import data from './data.json'


const dataLen = data.length


//data
describe("Number test", () => {
  test("Number of starting tasks is 3", () => {
    expect(dataLen).toBe(3)
  })
  
  test("Eat is already completed", () => {
    expect(data[0].completed).toBe(true)
  })
  
  test("Sleep is a starting task", () => {
    expect(data).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          "name": "Sleep"
        })
      ])
    )
  })

})

//Form
describe("Form snapshot test", () => {
  test('Form snapshot test', () => {
    const component = renderer.create(<Form />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
})







