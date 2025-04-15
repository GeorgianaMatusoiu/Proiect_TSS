/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
// @ts-nocheck

export default {
  mutate: ["exercitii-test.js", "!ui.js"],
  testRunner: "mocha",
  mochaOptions: {
    spec: ["spec/**/*.js"]
  },  
  reporters: ["html", "clear-text", "progress"],
  coverageAnalysis: "off",
  coverageAnalysis: "perTest"

};

