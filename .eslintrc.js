module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "airbnb",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jest/recommended",
    "plugin:testing-library/react",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "react",
    "import",
  ],
  rules: {
    indent: [
      "error", 2,
    ],
    quotes: [
      "warn",
      "double",
    ],
    "no-console": "warn",
    "no-unused-vars": "warn",
    "react/react-in-jsx-scope": "off",
  },
};
