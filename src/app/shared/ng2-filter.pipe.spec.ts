/* tslint:disable:no-unused-variable */

import { Ng2FilterPipe } from './ng2-filter.pipe';

describe('Pipe: Ng2FilterPipe', () => {
  let pipe: Ng2FilterPipe;

  beforeEach(() => {
    pipe = new Ng2FilterPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('filters array of strings', () => {
    expect(pipe.transform(['a', 'b', 'c'], 'a')).toEqual(['a']);
  });

  it('filters array of strings without any match', () => {
    expect(pipe.transform(['a', 'b', 'c'], 'x')).toEqual([]);
  });

  it('filters array of strings with repeated element', () => {
    let arrayContainingA = ['a', 'ba', 'ca'];
    expect(pipe.transform(arrayContainingA, 'a')).toEqual(arrayContainingA);
  });

  it('filters array of numbers', () => {
    expect(pipe.transform([1, 2, 3, 11], 1)).toEqual([1]);
  });

  it('filters array of objects', () => {
    expect(pipe.transform([
      { value: 1 },
      { value: 2 },
      { value: 3 },
      { value: 111 }
    ], { value: 1 })).toEqual([{ value: 1 }]);

    expect(pipe.transform([
      { value: 'a' },
      { value: 'b' },
      { value: 'c' },
      { value: 'abc' }
    ], { value: 'a' })).toEqual([{ value: 'a' }, { value: 'abc' }]);
  });

  it('filters array of objects with nested objects', () => {
    expect(pipe.transform([
      { value: 'a', nested: { number: 1 } },
      { value: 'b', nested: { number: 2 } },
      { value: 'c', nested: { number: 1 } },
      { value: 'abc', nested: { number: 2 } }
    ], { value: 'a', nested: { number: 2 } }))
      .toEqual([{ value: 'abc', nested: { number: 2 } }]);
  });

  it('filters array of objects with nested objects (not every object has nested object)', () => {
    expect(pipe.transform([
      { value: 'a' },
      { value: 'b', nested: { number: 1 } },
      { value: 'c', nested: { number: 1 } },
      { value: 'abc' }
    ], { value: 'a', nested: { number: 1 } }))
      .toEqual([]);
  });

  it('filters array of objects with empty array', () => {
    const objects = [
      {
        value: 'a'
      }
    ];
    expect(pipe.transform(objects, [])).toEqual(objects);
  });

  it('should filter by using $or operator', () => {
    const objects = [
      {
        valueA: 1,
        valueB: 2
      }
    ];

    expect(pipe.transform(objects, { $or: [{ valueA: 1 }, { valueB: 2 }] }))
      .toEqual(objects);
  });
});
