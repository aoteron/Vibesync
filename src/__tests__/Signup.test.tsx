import { act, fireEvent, render} from "@testing-library/react"
import { Signup } from "../pages/SignUp/Signup"
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";


describe("Signup component", () => {
    test("Signup renders correctly and updates value when input changes", async() => {
        const handleSignup = vi.fn()
        const {getByText, getByPlaceholderText} = render(
            <Router>
                <Signup/>
            </Router>
    )

        const nameInput = getByPlaceholderText('Name') as HTMLInputElement
        fireEvent.change(nameInput, {target: { value: "John Doe"}})
        expect(nameInput.value).toBe("John Doe")
        const emailInput = getByPlaceholderText('Email') as HTMLInputElement
        fireEvent.change(emailInput, { target: { value: "test@example.com" } });
        expect(emailInput.value).toBe("test@example.com");
        const passwordInput = getByPlaceholderText('Password') as HTMLInputElement
        fireEvent.change(passwordInput, {target: {value: "123456K*"}})
        expect(passwordInput.value).toBe("123456K*")

        expect(getByText("Country")).toBeInTheDocument()
        expect(getByText("Image")).toBeInTheDocument()
        expect(getByText("Gender")).toBeInTheDocument()
        expect(getByText('Birthdate')).toBeInTheDocument()
        expect(getByText("Artist")).toBeInTheDocument()

        await act(async () => {
            await handleSignup({ preventDefault: vi.fn() });
          });
        expect(handleSignup).toHaveBeenCalledTimes(1)
    })
})
