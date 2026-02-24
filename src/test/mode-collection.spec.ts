import { SetCollectionAdapter } from './adapter/set-collection.adapter';
import { ModeCollection } from './collection/mode.collection';

const modeCollection = new ModeCollection(false, SetCollectionAdapter, 1, 2, 3);

console.group(`ModeCollection: `); // true
for (const value of modeCollection) {
  console.log(`value: `, value); // 1, 2, 3
}
console.groupEnd();

describe('ModeCollection', () => {
  it('should add elements to the collection', () => {
    expect(true).toBeTruthy();
  });
});
