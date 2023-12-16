// @ts-check
import antfu from '@antfu/eslint-config';
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat();

export default antfu(
  {
    typescript: true,
    vue: false,
    react: true,
    stylistic: {
      semi: true,
    },
  },
  {
    files: ['**/tsconfig.json', '**/tsconfig.*.json'],
    rules: {
      'jsonc/sort-keys': 0,
    },
  },
  ...compat.extends('plugin:@next/next/recommended'),
);
