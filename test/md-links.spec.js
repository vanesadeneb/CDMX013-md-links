const {validate} = require('../lib/fetch.js');

global.fetch = () => Promise.resolve({status: 666, statusText: 'OK'});

let result;
describe('validate', () => {
  beforeAll(() => {
    result = validate([{href:'https://google.com'}]);
  });

  it('should return a promise', () => {
    expect(typeof result.then).toBe("function");
  });

  it('should return a promise', () => {
    expect(result).resolves.toEqual([{href: "https://google.com",ok: "Ok", status: 666}]);
  });

});
