/**
 * @description Represents the settings for a collection.
 * @export
 * @interface CollectionSettings
 * @template E The type of the elements in the collection.
 * @template {Iterable<E>} T The type of the value in the collection.
 * @template {boolean} [R=false] The `boolean` type to determine async methods.
 */
export interface CollectionSettings<E, T extends Iterable<E>, R extends boolean = false> {
  /**
   * @description The asynchronous mode of the collection. If `true`, collection methods will return Promises.
   * @default false
   * @type {?R}
   */
  async?: R;

  /**
   * @description The initial value of the collection. The type of the value is determined by the generic type `T`. If not provided, it defaults to `undefined`.
   * @type {?T}
   */
  value?: T;

  /**
   * @description The maximum number of items the collection can hold. If not provided, it defaults to `undefined`, indicating no limit.
   * @default undefined
   * @type {?number}
   */
  maxSize?: number;

  /**
   * @description The initial capacity of the collection. This is a hint for optimization and does not limit the number of items. If not provided, it defaults to `undefined`.
   * @default undefined
   * @type {?number}
   */
  capacity?: number;

  /**
   * @description Indicates whether the collection should automatically sort its elements. If `true`, the collection will maintain its elements in sorted order based on the provided `comparator` function. If not provided, it defaults to `false`.
   * @default false
   * @type {?boolean}
   */
  autoSort?: boolean;

  /**
   * @description A function that defines the sort order of the collection's elements. It should return a negative number if `a` should come before `b`, a positive number if `a` should come after `b`, or `0` if they are considered equal. If not provided, it defaults to `undefined`.
   * @type {?(a: E, b: E) => number}
   */
  comparator?: (a: E, b: E) => number;

  /**
   * @description Indicates whether the collection should enforce uniqueness of its elements. If `true`, the collection will not allow duplicate elements. If not provided, it defaults to `false`.
   * @default false
   * @type {?boolean}
   */
  unique?: boolean;

  /**
   * @description Indicates whether the collection should be immutable. If `true`, the collection will not allow modifications after it has been created. If not provided, it defaults to `false`.
   * @default false
   * @type {?boolean}
   */
  immutable?: boolean;

  /**
   * @description Indicates whether the collection should log its actions. If `true`, the collection will log actions such as additions, removals, and updates. If not provided, it defaults to `false`.
   * @default false
   * @type {?boolean}
   */
  log?: boolean;
  
  /**
   * @description Indicates whether the collection should be lazily initialized. If `true`, the collection will delay initialization until it is first accessed. If not provided, it defaults to `false`.
   * @default false
   * @type {?boolean}
   */
  lazy?: boolean;

  /**
   * @description The maximum time, in milliseconds, that the collection will wait for an operation to complete before timing out. If not provided, it defaults to `undefined`, indicating no timeout.
   * @type {?number}
   */
  timeout?: number;

  /**
   * @description The number of items to prefetch in the collection. If not provided, it defaults to `undefined`, indicating no prefetching.
   * @type {?number}
   */
  prefetch?: number;

  /**
   * @description Indicates whether the collection should be locked. If `true`, the collection will not allow any modifications after it has been created. If not provided, it defaults to `false`.
   * @default false
   * @type {?boolean}
   */
  locked?: boolean;

  /**
   * @description The name of the collection. If not provided, it defaults to `undefined`.
   * @type {?string}
   */
  name?: string;

  /**
   * @description Function to validate elements before adding
   */
  validator?: (element: E) => boolean;
}