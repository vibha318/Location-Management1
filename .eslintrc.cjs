module.exports = {
  env: {
    node: true,
    commonjs: true,
    es2021: true,
  },
  extends: ["eslint:recommended"],
  plugins: ["unused-imports"],
  ignorePatterns: ["dist", ".eslintrc.js"],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    "no-unused-vars": "off", // or "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    "no-console": "warn",
    "no-alert": "warn",
    "no-debugger": "warn",
  },
};
