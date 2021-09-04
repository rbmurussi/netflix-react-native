const meuMock = jest.fn();
meuMock.mockReturnValueOnce(10).mockReturnValueOnce("x").mockReturnValue(true);

test("teste", () => {
  expect(meuMock()).toBe(10);
  expect(meuMock()).toBe("x");
  expect(meuMock()).toBe(true);
});
