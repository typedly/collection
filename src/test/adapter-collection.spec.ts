import { Collection } from './collection/collection';

import { AsyncSetCollectionAdapter } from './adapter/async.set-collection.adapter';
import { SetCollectionAdapter } from './adapter/set-collection.adapter';

// const collection: AdapterCollection<SetCollectionAdapter<number, Set<number>, boolean>, number, Set<number>, boolean>
const collection0 = new Collection(SetCollectionAdapter, 1, 2, 3);

// const collection1: AdapterCollection<AsyncSetCollectionAdapter<number, Set<number>, true>, number, Set<number>, true>
const collection1 = new Collection(AsyncSetCollectionAdapter, 1, 2, 3);

describe('AdapterCollection', () => {
  it('should add elements to the collection', () => {
    expect(true).toBeTruthy();
  });
});
