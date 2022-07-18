const path = require('path');

const resolvePath = (relativePath) => path.resolve(__dirname, relativePath);

module.exports = {
  dotenv: resolvePath('.env'),
  appPath: resolvePath('.'),
  appDist: resolvePath('dist'),
  appIndexTsx: resolvePath('src/index.tsx'),
  appSrc: resolvePath('src'),
  appTsConfig: resolvePath('tsconfig.json'),
  appTemplate: resolvePath('template.html'),
  appNodeModules: resolvePath('node_modules'),
  appWebpackCache: resolvePath('node_modules/.cache'),
  appTsBuildInfoFile: resolvePath('node_modules/.cache/tsconfig.tsbuildinfo'),
};
