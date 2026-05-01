/*
 * Public API Surface of collection
 */

export type {
  InferCollectionType,
  InferElement,
  InferElementFromSettings,
} from './inference';

export type {
  // Adapter
  CollectionAdapterConstructor,
  CollectionAdapterShape,

  // Configuration
  CacheableCollectionSettings,
  CollectionConfig,

  // Collection
  CollectionConstructor,
  CollectionSettings,
  CollectionShape,
} from './lib';
