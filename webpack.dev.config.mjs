import path from 'node:path';

/** @type {import('webpack').Configuration} */
export default {
  mode: 'development',
  cache: {
    type: 'filesystem',
    allowCollectingMemory: true,
    cacheDirectory: path.resolve(process.cwd(), '.artifacts', 'cache', 'webpack')
  }
};
