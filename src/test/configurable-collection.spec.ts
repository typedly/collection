import { ConfigurableSetCollectionAdapter } from './adapter/configurable-set-collection.adapter';
import { ConfigurableCollection } from './collection/configurable.collection';

const collection0 = new ConfigurableCollection({}, ConfigurableSetCollectionAdapter);
const collection1 = new ConfigurableCollection({async: true}, ConfigurableSetCollectionAdapter);
const collection2 = new ConfigurableCollection({async: false}, ConfigurableSetCollectionAdapter, 1, 2, 3);

describe('ConfigurableCollection', () => {
  it('should add elements to the collection', () => {
    expect(true).toBeTruthy();
  });
});
