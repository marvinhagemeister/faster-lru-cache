export type CacheKey = string | number | symbol;

export interface Cache<K, V> {
  set(key: K, value: V): void;
  get(key: K): V;
  delete(key: K): void;
  clear(): void;
}

export default class LRUCache<V> implements Cache<CacheKey, V> {
  _cache: Map<CacheKey, V> = new Map();
  usage: CacheKey[] = [];
  limit: number = 0;

  constructor(limit: number) {
    this.limit = limit;

    this.set = this.set.bind(this);
    this.get = this.get.bind(this);
    this.delete = this.delete.bind(this);
  }

  get size() {
    return this._cache.size;
  }

  set(key: CacheKey, value: V) {
    this._cache.set(key, value);
    this._promote(key);

    if (this.limit > 0 && this._cache.size > this.limit) {
      const old = this.usage[this.usage.length - 1];
      this.delete(old, true);
    }
  }

  get(key: CacheKey) {
    const item = this._cache.get(key);
    if (!item) {
      return;
    }

    this._promote(key);
    return item;
  }

  delete(key: CacheKey, isLast: boolean = false) {
    this._cache.delete(key);

    if (isLast) {
      this.usage.pop();
    } else {
      const idx = this.usage.indexOf(key);
      this.usage.splice(idx, 1);
    }
  }

  clear() {
    this._cache.clear();
    this.usage = [];
  }

  _promote(key: CacheKey): void {
    const idx = this.usage.indexOf(key);

    if (idx === -1) {
      this.usage.unshift(key);
    } else if (idx === 0) {
      return;
    } else {
      this.usage.splice(idx, 1);
      this.usage.unshift(key);
    }
  }
}
