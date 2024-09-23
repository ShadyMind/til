import fs from 'node:fs/promises';

export const getEnvBasedConfigPath = async (env, templateFn, root = process.cwd()) =>  {
  return (await Promise.all(env.variations().map(async (env) => {
    const filepath = `${root}/${templateFn(env)}`;

    try {
      const stat = await fs.stat(filepath);

      if (!stat.isFile()) {
        return null;
      }

      return filepath;

    } catch (ex) { // eslint-disable-line @typescript-eslint/no-unused-vars
      return null;
    }
  }))).find(env => env !== null);
}
