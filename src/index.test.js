const { lookup } = require('./');

test('lookup', () => {
    expect(lookup("10001")).toBe('America/New_York');
    expect(lookup("94110")).toBe('America/Los_Angeles');
    expect(lookup("06419")).toBe('America/New_York');
    expect(lookup("93460")).toBe('America/Los_Angeles');
    expect(lookup("00000")).toBe(null);
});