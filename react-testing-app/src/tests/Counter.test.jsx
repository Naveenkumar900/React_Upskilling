import { render, screen } from "@testing-library/react";
import Counter from "../components/Counter";
import { testEnvironment } from "../../jest.config.cjs";
import userEvent from "@testing-library/user-event";

test('renders initial couter value', ()=>{
    render(<Counter/>)
    expect(screen.getByText('Counter: 0')).toBeInTheDocument();
})

test('increment counter on button click', async()=>{
    render(<Counter/>);
    const button=screen.getByRole('button',{name:/increment/i})
    await userEvent.click(button)
    expect(screen.getByText('Counter: 1')).toBeInTheDocument();

})