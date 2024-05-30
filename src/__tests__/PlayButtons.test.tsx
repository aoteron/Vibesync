

describe("testing PlayButtons component", () => {
  it("snapshot", () => {
    const result = "foobar";
    expect(result).toMatchSnapshot();
  });

  test("should add two numbers", () => {
    expect(1+1).toBe(2)
  })
});
