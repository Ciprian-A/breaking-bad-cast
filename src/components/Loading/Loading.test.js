import React from "react";
import { render } from "@testing-library/react";
import Loading from "./Loading";

describe("Loading tests", () => {
  it("should render", () => {
    expect(render(<Loading />)).toBeTruthy();
  });
});
