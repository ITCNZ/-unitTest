import tool from './index'

test('adds 1 + 2 to equal 3', () => {
    expect(tool.sum(1, 2)).toBe(3);
});
