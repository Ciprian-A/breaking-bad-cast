import React from "react";
import { render } from "@testing-library/react";
import CharacterGrid from "./CharacterGrid";

describe("CharacterGrid tests", () => {
  it("should render", () => {
    expect(render(<CharacterGrid />)).toBeTruthy();
  });
});
