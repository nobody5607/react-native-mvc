module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['react-native-reanimated/plugin'],
    [
      'module-resolver',

      {
        root: ['./src'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.ts',
          '.tsx',
          '.json',
          '.png',
        ],
        alias: {
          tests: ['./tests/'],
          '@components': './src/components',
          '@navigations': './src/navigations',
          '@controllers': './src/controllers',
          '@models': './src/models',
          '@screens': './src/screens',
          '@utils': './src/utils',
          '@themes': './src/themes',
          '@redux': './src/redux',
          '@assets': './src/assets',
        },
      },
    ],
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
      },
    ],
  ],
};
