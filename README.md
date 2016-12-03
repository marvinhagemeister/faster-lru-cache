[![Build Status](https://travis-ci.org/marvinhagemeister/faster-lru-cache.svg?branch=master)](https://travis-ci.org/marvinhagemeister/faster-lru-cache)

# Faster LRU-Cache

Faster LRU-Cache is a really small implementation of an LRU-Cache built on ES6
`Maps`. The primary goal was to keep it as small as possible for usage in web
apps, where size is critical for performance.

When writing it I did a few simple micro-benchmarks on [esbench](https://esbench.com/bench/5843115c330ab09900a1a50d)
which shows that `Maps` are a faster than normal `Objects` in modern browsers.

| Browser | Advantage over `Object` |
|---|---|
| Chrome 54 | +1.6% (this is neglectable) |
| Safari 10.1 | +40% |
| Firefox 50 | +50% |

Keep in mind though that the result of micro-benchmarks may change drastically
over time as browser vendors keep optimizing their engines.

*Note: All benchmarks are run on a Macbook Pro 15" 2015*
