const handlers = require("../handlers");

test("home page renders", () => {
  const req = {};
  const res = { render: jest.fn() };
  handlers.home(req, res);
  expect(res.render.mock.calls.length).toBe(1);
  expect(res.render.mock.calls[0][0]).toBe("home");
});

test("about page renders with fortune", () => {
  const req = {};
  const res = { render: jest.fn() };
  handlers.about(req, res);
  expect(res.render.mock.calls.length).toBe(1);
  // about page가 호출 된 횟수
  expect(res.render.mock.calls[0][0]).toBe("about");
  // about page의 첫 호출 [0]
  // about page의 첫 호출의 첫번째 인자 [0][0]
  expect(res.render.mock.calls[0][1]).toEqual(
    expect.objectContaining({
      fortune: expect.stringMatching(/\d/),
    })
  );
  // about page의 첫 호출의 두번째 인자의 test
});
