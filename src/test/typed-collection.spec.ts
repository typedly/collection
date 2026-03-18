import { TypedCollection } from './collection/typed.collection';

const typedCollection = new TypedCollection(true, Set, 1, 2, 3);

console.group(`TypedCollection`);

for (const value of typedCollection) {
  console.log(`value: `, value); // 1, 2, 3
}
console.groupEnd();

describe('TypedCollection', () => {
  it('should add elements to the collection', () => {
    expect(true).toBeTruthy();
  });
});
