import * as path from 'path';
import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';
import { default as common } from './webpack.common';

const config = merge<Configuration>(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    compress: true,
    port: 3000,
  },
});

export default config;
