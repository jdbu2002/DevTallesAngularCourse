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
  ],
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "simple-import-sort"],
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
    "@typescript-eslint/sort-type-constituents": "error",
    "simple-import-sort/imports": "warn",
    "simple-import-sort/exports": "warn",
  },
  ignorePatterns: ["**/*.js", "**/*.cjs"],
};
