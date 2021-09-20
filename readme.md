top level async/await を試しました。

以下 qiita を参考にしました。

https://qiita.com/n0bisuke/items/b2236f56437f71db8aff

# 環境

- nodejs 14.17.6

# 試し方

```
$ npm i
$ node index.mjs
{
  originalQuery: 'github',
  correctedQuery: 'github',
  results: 54,
  activeFilters: [
    {
      name: 'Movie',
      active: true,
      url: null,
      description: 'Search for Movie'
    },
    {
      name: 'Relevance',
      active: true,
      url: null,
      description: 'Sort by relevance'
    }
  ],
  refinements: [],
  items: [
    {
      type: 'video',
      title: 'chill lofi beats to code/relax to',
      id: 'bmVKaAV_7-A',
      url: 'https://www.youtube.com/watch?v=bmVKaAV_7-A',
      bestThumbnail: [Object],
      thumbnails: [Array],
      isUpcoming: false,
      upcoming: null,
      isLive: true,
      badges: [Array],
以下略
```


