import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

// Arrange - the describe block
describe("Videorama PWA app tests", () => {
  const videoramaApp = <App />;

  // test blocks
  it("renders the logo image", async () => {
    // query Nodes
    const { getByAltText } = render(<App />);
    const pageLogo = getByAltText("logo");
    // Assertion
    expect(pageLogo).toBeInTheDocument();
    // Fail test
    // expect(pageLogo).not.toBeInTheDocument();

    // Use debugger to check elements and meta-data
    screen.debug(pageLogo);
  });

  // unit tests one assertion per test block
  it("renders the page heading", async () => {
    const { getByText } = render(<App />);
    const pageHeading = getByText(/Videorama/i);
    expect(pageHeading).toBeInTheDocument();
    // screen.debug(pageHeading);
  });

  it("renders the page title", async () => {
    const { getByText } = render(<App />);
    const pageTitle = getByText(/A Progressive Web App with React-Hooks/i);
    expect(pageTitle).toContainHTML("h4");
    // screen.debug(pageTitle);
  });

  // API calls
});
