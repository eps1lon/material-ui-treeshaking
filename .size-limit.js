module.exports = [
  {
    name: "documented Typography usage",
    webpack: false,
    path: "bundle/current-manual/index.current-manual.js",
    limit: "54029 B"
  },
  {
    name: "documented Typography usage in evergreen browsers",
    webpack: false,
    path: "bundle/current-manual-es/index.current-manual-es.js",
    limit: "52797 B"
  },
  {
    name: "documented Typography with custom webpack conf for tree shaking",
    webpack: false,
    path: "bundle/current-manual-shakeable/index.current-manual-shakeable.js",
    limit: "53340 B"
  },
  {
    name: "Typography with tree shaking from webpack",
    webpack: false,
    path: "bundle/current-magic/index.current-magic.js",
    // little bit bigger because of named import overhead
    limit: "54149 B"
  },
  {
    name: "next: Typography with tree shaking from webpack",
    webpack: false,
    path: "bundle/next-magic/index.next-magic.js",
    // gzipped tricked me :()
    limit: "54394 B"
  }
];
