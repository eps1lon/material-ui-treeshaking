module.exports = [
  {
    name: "documented Paper usage",
    webpack: false,
    path: "bundle/current-manual/index.current-manual.js",
    limit: "19853 B"
  },
  {
    name: "documented Paper usage in evergreen browsers",
    webpack: false,
    path: "bundle/current-manual-es/index.current-manual-es.js",
    limit: "18382 B"
  },
  {
    name: "documented Paper with custom webpack conf for tree shaking",
    webpack: false,
    path: "bundle/current-manual-shakeable/index.current-manual-shakeable.js",
    limit: "18915 B"
  },
  {
    name: "Paper with tree shaking from webpack",
    webpack: false,
    path: "bundle/current-magic/index.current-magic.js",
    // little bit bigger because of named import overhead
    limit: "19951 B"
  },
  {
    name: "next: Paper with tree shaking from webpack",
    webpack: false,
    path: "bundle/next-magic/index.next-magic.js",
    // gzipped tricked me :()
    limit: "20049 B"
  }
];
