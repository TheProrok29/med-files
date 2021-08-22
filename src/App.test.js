import React from "react"
import { render } from "@testing-library/react"
import App from "./App"

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Med-files app/i);
  expect(linkElement).toBeInTheDocument();
});

// @ponicode
describe("componentDidMount", () => {
    let inst

    beforeEach(() => {
        inst = new App.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentDidMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})
