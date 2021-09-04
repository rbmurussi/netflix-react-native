import React from "react";
import renderer from "react-test-renderer";
import Avatar from "../../components/Avatar";

jest.mock("@expo/vector-icons", () => {
  return { MaterialIcons: "Icon" };
});

test("Criando component", () => {
  expect(renderer.create(<Avatar edit />)).toMatchSnapshot();
});
