import React from "react";
import { render } from "@testing-library/react";

import App from "./App";

describe("Breaking Bad app unit tests", () => {
  it("renders without crashing", () => {
    const { getByText } = render(<App />);
    const pageHeading = getByText(/App using Hooks and Jest Testing Library/i);
    expect(pageHeading).toBeInTheDocument();
  });
});
