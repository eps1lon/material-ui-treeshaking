module.exports = [
  {
    name: "documented Paper usage",
    webpack: false,
    path: "bundle/current-manual/current-manual.js",
    limit: "69498 B"
  },
  {
    name: "documented Paper usage in evergreen browsers",
    webpack: false,
    path: "bundle/current-manual-es/current-manual-es.js",
    limit: "66940 B"
  },
  {
    name: "documented Paper with custom webpack conf for tree shaking",
    webpack: false,
    path: "bundle/current-manual-shakeable/current-manual-shakeable.js",
    limit: "69498 B"
  },
  {
    name: "Paper with tree shaking from webpack",
    webpack: false,
    path: "bundle/current-magic/current-magic.js",
    // little bit bigger because of named import overhead
    limit: "71064 B"
  },
  {
    name: "next: Paper with tree shaking from webpack",
    webpack: false,
    path: "bundle/next-magic/next-magic.js",
    // gzipped tricked me :()
    limit: "54292 B"
  }
];
