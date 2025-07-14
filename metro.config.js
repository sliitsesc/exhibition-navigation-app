const { getDefaultConfig } = require('@expo/metro-config');

const config = getDefaultConfig(__dirname, {
  // Enable ES modules support
  isCSSEnabled: true,
});

module.exports = {
  ...config,
  transformer: {
    ...config.transformer,
    getTransformOptions: async () => ({
      transformOptions: {
        transform: {
          experimentalImportSupport: true, // Enable ES module support
          inlineRequires: true,
        },
      },
    }),
  },
  serializer: {
    ...config.serializer,
    // Use Expo's default polyfills to avoid direct require
    getPolyfills: config.serializer.getPolyfills,
  },
  resolver: {
    ...config.resolver,
    // Ensure Metro resolves both CommonJS and ES modules
    sourceExts: ['js', 'jsx', 'ts', 'tsx', 'cjs', 'mjs', 'json'],
  },
};