import { BrowserRouter as Router } from "react-router-dom";
import { Login } from "../pages/Login/Login";
import "@testing-library/jest-dom/vitest";
import { fireEvent, render } from "@testing-library/react";

describe("Test on Login Page", () => {
  test("Login renders correctly", () => {
    const { getByText, getByPlaceholderText } = render(
      <Router>
        <Login />
      </Router>
    );

    expect(getByPlaceholderText("email or username")).toBeInTheDocument();
    expect(getByPlaceholderText("password")).toBeInTheDocument();
    expect(getByText("Don't have an account? Sign up!")).toBeInTheDocument();
  });

  test("updates state when inputs change", () => {
    const { getByPlaceholderText } = render(
      <Router>
        <Login />
      </Router>
    );
    const emailInput = getByPlaceholderText(
      "email or username"
    ) as HTMLInputElement;
    const passwordInput = getByPlaceholderText("password") as HTMLInputElement;

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    expect(emailInput.value).toBe("test@example.com");
    expect(passwordInput.value).toBe("password123");
  });
});
