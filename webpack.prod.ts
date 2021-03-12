import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';
import { default as common } from './webpack.common';

const config = merge<Configuration>(common, {
  mode: 'production',
  devtool: 'source-map',
});

export default config;
