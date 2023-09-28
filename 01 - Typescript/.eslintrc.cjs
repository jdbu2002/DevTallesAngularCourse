module.exports = {
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
    },
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/strict-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "prettier",
  ],
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  root: true,
  rules: {
    "@typescript-eslint/no-confusing-void-expression": [
      "error",
      { ignoreArrowShorthand: true },
    ],
    "@typescript-eslint/no-unused-vars": [
      "error",
      { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
    ],
    "@typescript-eslint/no-import-type-side-effects": "error",
    "@typescript-eslint/sort-type-constituents": "error",
  },
  ignorePatterns: ["**/*.js", "**/*.cjs"],
};
