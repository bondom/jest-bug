describe("Bug test", () => {
  test("Test", () => {
    expect({
      target: {
        value: "a",
        nodeType: 1
      }
    }).toEqual({
      target: {
        value: "asd sad asd ad asdasdasd asdasdsa",
        nodeType: 1
      }
    });
  });
});
