import {resolve, dirname} from 'path';
import {fileURLToPath} from 'url';

import {merge} from 'webpack-merge';

import common from './common.config.mjs';

export default merge({
  mode: 'development',
  devServer: {
    static: {
      directory: resolve(
          dirname(fileURLToPath(import.meta.url)),
          '../',
          './build',
      ),
    },
    compress: true,
    hot: true,
    port: 8080,
  },
}, common);
