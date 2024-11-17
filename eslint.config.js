import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  { ignores: ['dist'] }, // Ignore the dist directory
  {
    files: ['**/*.{js,jsx}'], // Target JS and JSX files
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      // Extend recommended rules
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,

      // Relax strict rules
      'no-unused-vars': 'warn', // Change unused variables to warnings
      'no-console': 'off', // Allow console logs
      'no-debugger': 'warn', // Warn instead of error for debugger
      'react/prop-types': 'off', // Disable prop-types validation
      'react/jsx-no-target-blank': 'off', // Allow target="_blank" without rel="noopener noreferrer"
      'react/react-in-jsx-scope': 'off', // Disable React-in-JSX-scope (for React 17+)
      'react/jsx-uses-react': 'off', // Suppress React unused in JSX
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      // Other optional rules you may want to suppress:
      'no-irregular-whitespace': 'off',
      'react/display-name': 'off', // Disable missing display name for components
    },
  },
];
