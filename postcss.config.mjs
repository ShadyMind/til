import autoprefixer from 'autoprefixer';
import postcssNested from 'postcss-nested';
import postcssSimpleVars from 'postcss-simple-vars';
import postcssPresetEnv from 'postcss-preset-env';
import postcssFor from 'postcss-for';

export default {
  plugins: [
    postcssSimpleVars,
    postcssFor,
    autoprefixer,
    postcssNested,
    postcssPresetEnv
  ]
};
