const fs = require('fs');
const screenState = fs.realpathSync('../../node_modules/leaf-local/src');
fs.writeFileSync('temp.json', JSON.stringify(screenState));

module.exports = function babelConfig(api) {
  api.cache.forever();
  return {
    // include: [fs.realpathSync('../../node_modules/leaf-local/src')],
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
