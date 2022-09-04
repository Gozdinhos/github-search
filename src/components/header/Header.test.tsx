import * as React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Header from "./Header";
import { act } from "react-dom/test-utils";

describe("Header component", () => {
  it("should display header text", () => {
    render(<Header />);
    const headerText = screen.getByTestId("header-text");
    expect(headerText).toBeVisible();
  });

  it("should display switch component", () => {
    render(<Header />);
    const switchComponent = screen.getByTestId("switch-component");
    expect(switchComponent).toBeVisible();
  });
  it("should toggle dark/light mode", () => {
    render(<Header />);
    const clickIndicator = screen.getByTestId("switch-component");

    // @ts-ignore:next-line
    let theme = document.documentElement.attributes["data-theme"].value;

    act(() => {
      fireEvent.click(clickIndicator);
    });
    // @ts-ignore:next-line
    const newTheme = document.documentElement.attributes["data-theme"].value;
    const themesToCheck = [theme, newTheme];
    expect(themesToCheck).toStrictEqual(["dark", "light"]);
  });
});
