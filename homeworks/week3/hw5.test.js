const add = require('./hw5');

describe('hw5', () => {
  it('should return correct answer when a=1 and b=123', () => {
    expect(add('1', '123')).toBe('124');
  });
  it('should return correct answer when a=39 and b=123', () => {
    expect(add('39', '123')).toBe('162');
  });
  it('should return correct answer when a=111111111111111111111111111111111111 and b=111111111111111111111111111111111111', () => {
    expect(
      add(
        '111111111111111111111111111111111111',
        // eslint-disable-next-line comma-dangle
        '111111111111111111111111111111111111'
        // eslint-disable-next-line comma-dangle
      )
    ).toBe('222222222222222222222222222222222222');
  });
});
