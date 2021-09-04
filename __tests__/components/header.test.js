import React from "react";
import renderer from "react-test-renderer";
import Header from "../../components/Header";

describe.only("renders correctly", () => {
  const JSON = renderer.create(<Header />).toJSON();
  expect(JSON).toMatchSnapshot();
});

describe("Header", () => {
  test("BIG", () => {
    expect(1).toBe(1);
  });
  test("SMALL", () => {
    expect(1).toBe(1);
  });
  test("MEDIUM", () => {
    expect(1).toBe(1);
  });
});
