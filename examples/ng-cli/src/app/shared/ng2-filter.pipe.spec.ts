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

  it('should get value from getter', () => {
    class User {
      firstName: string;
      lastName: string;

      constructor(first: string, last: string) {
        this.firstName = first;
        this.lastName = last;
      }

      get name() {
        return `${ this.firstName } ${ this.lastName }`;
      }
    }
    const userA = new User('Abc', '123');
    const objects = [
      userA,
      new User('Qwe', '123')
    ];

    expect(pipe.transform(objects, { name: '123' })).toEqual(objects);
    expect(pipe.transform(objects, { name: 'Abc 123' })).toEqual([userA]);
    expect(pipe.transform(objects, { name: 'Qwe123' })).toEqual([]);
  });

  it('should filter by empty filter string', () => {
    const objects = [
      'test',
      'test1',
      'test2',
      'test3'
    ];

    expect(pipe.transform(objects, '')).toEqual(objects);
    expect(pipe.transform(objects, null)).toEqual(objects);
    expect(pipe.transform(objects, void 0)).toEqual(objects);
  });

  it('should filter empty object', () => {
    const objects = [
      '',
      null
    ];

    expect(pipe.transform(objects, '')).toEqual(objects);
    expect(pipe.transform(objects, null)).toEqual(objects);
    expect(pipe.transform(objects, void 0)).toEqual(objects);
  });


  it('should take a function as a filter', () => {
    const objects = [
      { num: 1, nested: { a: 1 } },
      { num: 1, nested: { a: 2 } },
      { num: 2, nested: { a: 2, b: 'waz' } },
      { num: 2, nested: { a: 2, b: 'was' } }
    ];

    const fn = (object: any) => object.num < 2 || object.nested.b === 'was';
    expect(pipe.transform(objects, fn)).toEqual([objects[0], objects[1], objects[3]]);
  });

  it('should work with different types', () => {
    const objects = [
      { num: 1 },
      { num: 2 },
      { num: 3 }
    ];
    const filter = { num: '2' };

    expect(pipe.transform(objects, filter)).toEqual([objects[1]]);
  })

  // it('should filter by using $or operator', () => {
  //   const objects = [
  //     {
  //       valueA: 1,
  //       valueB: 2
  //     }
  //   ];
  //
  //   expect(pipe.transform(objects, { $or: [{ valueA: 1 }, { valueB: 2 }] })).toEqual(objects);
  // });
});
