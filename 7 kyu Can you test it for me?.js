_describe('Foo', function() {
    it('instanceof', function() {
        Test.expect(foo instanceof Foo);
    });

    it('value should start at 0', function() {
        Test.assertEquals(foo.value, 0)
    });

    it('array should start with 1, 2, 3', function() {
        Test.assertSimilar(foo.array,[1, 2, 3])
    });

    it('add throws error with non-numbers', function() {
        Test.expectError('input is not a number', () => foo.add('Invalid'));
    });

    it('add works for numbers', function() {
        Test.expectNoError('', () => foo.add(69));
    });

    it('value updates upon successful add', function() {
        Test.assertEquals(foo.value, 69)
    });

    it('push throws error with non-numbers', function() {
        Test.expectError('input is not a number', () => foo.push('Invalid'));
    });

    it('push works for numbers', function() {
        Test.expectNoError('' ,() => foo.push(4));
    });

    it('array contains the pushed number', function() {
        Test.assertSimilar(foo.array, [1, 2, 3, 4])
    });
});