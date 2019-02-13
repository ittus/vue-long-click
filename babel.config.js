module.exports = {
  presets: [
    '@vue/app'
  ],
  env: {
    test: {
      presets: [
        ["env", { "targets": { "node": "6" }}]
      ],
      plugins: ["@babel/plugin-transform-modules-commonjs"]
    }
  }
}
