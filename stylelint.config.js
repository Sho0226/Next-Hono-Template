module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-recess-order",
    "stylelint-prettier/recommended",
  ],
  rules: {
    "selector-class-pattern": "^[a-z][a-zA-Z0-9]+$",
  },
};
