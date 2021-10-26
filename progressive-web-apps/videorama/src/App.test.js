import React from "react";
import { render, screen, wait, act } from "@testing-library/react";
import App from "./App";

// Arrange - the describe block - render the component
describe("Videorama PWA app unit tests", () => {
  it("renders the logo image", () => {
    act(() => {
      const { getByAltText } = render(<App />);
      // query DOM
      const pageLogo = getByAltText("logo");
      // Assertion
      expect(pageLogo).toBeInTheDocument();

      // Fail test
      // expect(pageLogo).not.toBeInTheDocument();

      // Use debugger to check elements and meta-data
      // screen.debug(pageLogo);
    });
  });

  // unit tests one assertion per test block
  it("renders the page heading", () => {
    act(() => {
      const { getByText } = render(<App />);
      const pageHeading = getByText(/Videorama/i);
      expect(pageHeading).toBeInTheDocument();
    });
  });

  it("renders the page title", () => {
    act(() => {
      const { getByText } = render(<App />);
      const pageTitle = getByText(/A Progressive Web App with React-Hooks/i);
      expect(pageTitle).toContainHTML("h4");
    });
  });
});

// second describe block with API-async calls
//Arrange
describe("Videorama PWA app integration tests", () => {
  // async calls - Render takes an .act() or .wait() method
  it("renders images after calling the orange valley ca api", async () => {
    wait(() => {
      // the async part of the call uses findBy() rather than getBy()
      const { getByText, findByAltText } = render(<App />);
      const pageTitle = getByText(/A Progressive Web App with React-Hooks/i);
      expect(pageTitle).toContainHTML("h4");
      // stub API first - data only displayed on API call
      const showVideos = findByAltText(
        "shows videos from the orange valley california api"
      );
      screen.debug(showVideos);
      expect(showVideos).toMatch(/https/);
      const img = findByAltText("artists work");
      expect(img.src).toMatch(/https/);
    });
  });
});
