import React from "react";
import { render } from "@testing-library/react";
import CharacterItem from "./CharacterItem";

describe("CharacterItem tests", () => {
  it("should render", () => {
    expect(render(<CharacterItem />)).toBeTruthy();
  });
});
