import {join, dirname} from 'path';
import {fileURLToPath} from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default {
  entry: {
    bundle: join(__dirname, '../', 'src', 'index.js'),
  },
  output: {
    path: join(__dirname, '../', 'build', 'Release'),
    filename: 'control.js',
    library: 'Control',
    libraryTarget: 'var',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
            ],
          },
        },
      },
    ],
  },
};
