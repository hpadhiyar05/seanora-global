import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      react.configs.flat.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      'no-unused-vars': [
        'error',
        {
          varsIgnorePattern: '^[A-Z_]',
          argsIgnorePattern: '^[A-Z_]',
          caughtErrorsIgnorePattern: '^[A-Z_]',
        },
      ],
      // Ensures JSX usage like <motion.div> counts as a variable reference
      'react/jsx-uses-vars': 'error',
      // React 17+ / Vite handles JSX transform automatically
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      // This codebase doesn't use PropTypes (TS not used either)
      'react/prop-types': 'off',
      // Allow normal apostrophes/quotes in JSX text
      'react/no-unescaped-entities': 'off',
    },
  },
])
