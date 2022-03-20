const { palindrome } = require('../utils/for_testing');

test('palindrome linaDev', () => {
    const result = palindrome('linadev');

    expect(result).toBe('vedanil')
})

test('palindrome of empty string', () => {
    const result = palindrome('');

    expect(result).toBe('')
})

test('palindrome of empty undefined', () => {
    const result = palindrome();

    expect(result).toBeUndefined()
})