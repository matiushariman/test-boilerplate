const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'));

module.exports = {
  extends: ['react-app', 'airbnb', 'plugin:jsx-a11y/recommended', 'prettier', 'prettier/react'],
  plugins: ['jsx-a11y', 'prettier'],
  rules: {
    semi: 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'prettier/prettier': ['error', prettierOptions],
  },
};
