/* eslint-disable import/no-named-as-default-member */

import js from '@eslint/js'
import expoConfig from 'eslint-config-expo/flat'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import pluginReact from 'eslint-plugin-react'
import { defineConfig } from 'eslint/config'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default defineConfig([
  {
    ignores: ['node_modules', '.expo']
  },
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  expoConfig,
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.node },
    rules: {
      'react/react-in-jsx-scope': 'off'
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  },
  eslintPluginPrettierRecommended
])
