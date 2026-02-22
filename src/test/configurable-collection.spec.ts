import { SetCollectionAdapter } from './adapter/set-collection.adapter';
import { ConfigurableCollection } from './collection/configurable.collection';


const collection0 = new ConfigurableCollection({}, SetCollectionAdapter);

const collection1 = new ConfigurableCollection({async: true}, SetCollectionAdapter);

// collection1

const collection2 = new ConfigurableCollection({async: false}, SetCollectionAdapter, 1, 2, 3);
