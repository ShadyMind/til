import path from 'node:path';
import { Env } from './utils/env.mjs';

export const ENV = new Env();

export const PATH = {
  SRC: path.resolve(process.cwd(), 'src'),
  BUILD: path.resolve(process.cwd(), '.artifacts', 'build'),
  STATIC: path.resolve(process.cwd(), 'src', 'static')
};
