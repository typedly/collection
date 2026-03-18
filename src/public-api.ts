/*
 * Public API Surface of collection
 */
export type {
  CollectionAdapter,
  ConfigurableCollectionAdapter,
} from './adapter';
export type {
  AdaptableCollectionConstructor,
  CollectionAdapterConstructor,
  CollectionConstructor,
  ConfigurableCollectionConstructor,
  ConfigurableCollectionAdapterConstructor,
} from './constructor';
export type {
  InferAsync,
  InferCollectionType,
  InferElementFromSettings,
  InferElement,
} from './inference';
export type {
  // Interface.
  AdaptableCollectionShape,
  CollectionSettings,
  CollectionShape,
  ConfigurableCollectionShape,
} from './lib';
