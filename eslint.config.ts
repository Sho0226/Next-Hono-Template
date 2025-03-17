import { defineConfig } from "eslint/config";
import tsParser from "@typescript-eslint/parser";

export default defineConfig({
  files: ["**/*.ts", "**/*.tsx"],
  plugins: {
    "@typescript-eslint": require("@typescript-eslint/eslint-plugin"),
    react: require("eslint-plugin-react"),
  },
  languageOptions: {
    parser: tsParser,
    parserOptions: {
      project: "./tsconfig.json",
    },
  },
  rules: {
    eqeqeq: "error",
    "no-param-reassign": "error",
    "no-implicit-coercion": "error",
    "object-shorthand": ["error", "always"],
    "prefer-template": "error",
    "@typescript-eslint/no-require-imports": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/restrict-plus-operands": [
      "error",
      {
        allowBoolean: false,
        allowNullish: false,
        allowNumberAndString: false,
        allowRegExp: false,
        allowAny: false,
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
        destructuredArrayIgnorePattern: "^_",
      },
    ],
  },
});
