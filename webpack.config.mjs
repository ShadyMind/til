import { merge } from 'webpack-merge';
import baseConfig from './webpack.base.config.mjs';
import { ENV } from './app.config.mjs';
import { getEnvBasedConfigPath } from './utils/getEnvBasedConfigPath.mjs';

export default async () => merge(
  baseConfig,
  (await import(await getEnvBasedConfigPath(ENV, env => `webpack.${env}.config.mjs`))).default
);

