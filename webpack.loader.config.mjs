import path from 'node:path';
import { PATH } from './app.config.mjs';

export default {
  mode: 'none',
  entry: path.resolve(PATH.SRC, 'themes', 'theme.light.json'),
  output: {
    path: PATH.BUILD,
    filename: 'loader-test',
  },
  module: {
    rules: [
      {
        test: /theme\..+\.json$/,
        type: 'javascript/auto',
        use: [
          { loader: path.resolve('.', 'utils', 'theme-loader.mjs'), options: { cssTargetSelector: '#root' } }
        ],
      },
    ],
  },
};
