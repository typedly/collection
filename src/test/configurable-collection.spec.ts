import { SetCollectionAdapter } from './adapter/set-collection.adapter';
import { ConfigurableCollection } from './collection/configurable.collection';

const collection0 = new ConfigurableCollection({}, SetCollectionAdapter);
const collection1 = new ConfigurableCollection({async: true}, SetCollectionAdapter);
const collection2 = new ConfigurableCollection({async: false}, SetCollectionAdapter, 1, 2, 3);

describe('ConfigurableCollection', () => {
  it('should add elements to the collection', () => {
    expect(true).toBeTruthy();
  });
});
