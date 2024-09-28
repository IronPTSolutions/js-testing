describe('Join function', function () {

  it('should work with numbers[]', function () {
    expect(join([1, 2, 3])).toEqual('123');
    expect(join([3, 2, 1])).toEqual('321');
  });

  it('should work with strings[]', function () {
    expect(join(['a', 'b', 'c'])).toEqual('abc');
    expect(join(['aa', 'bb', 'cc'])).toEqual('aabbcc');
  });

  it('should work with strings[] and separator', function () {
    expect(join(['a', 'b', 'c'], '-')).toEqual('a-b-c');
    expect(join(['aa', 'bb', 'cc'], '-')).toEqual('aa-bb-cc');
  });

});
