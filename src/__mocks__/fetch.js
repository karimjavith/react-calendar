window.fetch = jest.fn().mockImplementationOnce(() => {
  return new Promise((res, rej) => res({}));
});
