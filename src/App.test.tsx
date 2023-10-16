import "@testing-library/jest-dom/extend-expect"
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("Label과 Input 그리고 버튼이 제대로 렌더링 되어야 함", () => {
    render(<App />);

    const label = screen.getByLabelText(/이름/i);
    const nameInput = screen.getByRole('textbox');
    const checkbox = screen.getByRole('checkbox');
    const formButton = screen.getByRole('button', { name: '제출' });

    expect(label).toBeInTheDocument();
    expect(nameInput).toBeInTheDocument();
    expect(checkbox).toBeInTheDocument();
    expect(formButton).toBeInTheDocument();
  });

  test("이름을 입력하고 약관에 동의한 다음 버튼을 클릭하면 Alert 창으로 입력한 값이 출력되어야 함", () => {
    const alert = jest.fn();
    window.alert = alert;
    render(<App />);

    const nameInput = screen.getByRole('textbox');
    const checkbox = screen.getByRole('checkbox');
    const formButton = screen.getByRole('button');

    fireEvent.change(nameInput, { target: { value: 'woobeen'}})
    fireEvent.click(checkbox);
    fireEvent.click(formButton);

    expect(alert).toBeCalledWith('name: woobeen');
  });

  test("약관에 동의하지 않으면 alert 창이 출력되지 말아야 함", () => {
    // arrange
    const alertMock = jest.fn();
    window.alert = alertMock;
    render(<App />);

    const nameInput = screen.getByRole("textbox");
    const formButton = screen.getByRole("button");

    // act
    fireEvent.change(nameInput, { target: { value: "junsuk" } });
    fireEvent.click(formButton);

    // assert
    expect(alertMock).not.toHaveBeenCalled();
  });
});
