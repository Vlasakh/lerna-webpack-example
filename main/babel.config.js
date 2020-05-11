// const fs = require('fs');
// const screenState = fs.realpathSync('../../node_modules/leaf-local/src');
// fs.writeFileSync('temp-main.json', JSON.stringify(screenState));

module.exports = function babelConfig(api) {
  api.cache.forever();
  return {
    babelrcRoots: [
      // Keep the root as a root
      '.',
      // Also consider monorepo packages "root" and load their .babelrc files.
      './packages/*',
    ],
    presets: [
      [
        '@babel/env',
        {
          loose: true,
          modules: false,
          useBuiltIns: 'usage',
          targets: {
            browsers: ['> 1%'],
          },
        },
      ],
      // '@babel/typescript',
      '@babel/react',
    ],
    plugins: ['@babel/syntax-dynamic-import', '@babel/plugin-proposal-object-rest-spread'],
    env: {
      test: {
        presets: [
          [
            '@babel/env',
            {
              useBuiltIns: 'usage',
              targets: {
                browsers: ['> 1%'],
              },
            },
          ],
          // '@babel/typescript',
          '@babel/react',
        ],
      },
    },
  };
};
