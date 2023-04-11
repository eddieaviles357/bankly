const timeWord = require('./timeWord');

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });
});

describe('Output time wording', () => {
  test('it returns a string', () => {
    expect(typeof timeWord('00:00')).toBe('string');
  });

  test('expect 00:00 => midnight', () => {
    expect(timeWord('00:00')).toBe('midnight');
  });
  
  test('expect 00:12 => twelve twelve am', () => {
    expect(timeWord('00:12')).toBe('twelve twelve am');
  });

  test("expect 01:00 => one o’clock am", () => {
    expect(timeWord('01:00')).toBe("one o'clock am");
  });

  test('expect 06:01 => six oh one am', () => {
    expect(timeWord('06:01')).toBe('six oh one am');
  });

  test('expect 06:10 => six ten am', () => {
    expect(timeWord('06:10')).toBe('six ten am');
  });

  test('expect 06:18 => six eighteen am', () => {
    expect(timeWord('06:18')).toBe('six eighteen am');
  });

  test('expect 06:30 => six thirty am', () => {
    expect(timeWord('06:30')).toBe('six thirty am');
  });

  test('expect 10:34 => ten thirty four am', () => {
    expect(timeWord('10:34')).toBe('ten thirty four am');
  });

  test('expect 12:00 => noon', () => {
    expect(timeWord('12:00')).toBe('noon');
  });

  test('expect 12:09 => twelve oh nine pm', () => {
    expect(timeWord('12:09')).toBe('twelve oh nine pm');
  });

  test('expect 23:23 => eleven twenty three pm', () => {
    expect(timeWord('23:23')).toBe('eleven twenty three pm');
  });
})