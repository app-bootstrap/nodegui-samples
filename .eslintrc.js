'use strict';

module.exports = {
  "extends": [
    "standard",
  ],
  "rules": {
    "strict": 0,
    "no-console": 0,
    "no-alert": 0,
    "prefer-const": 0,
    "prefer-template": 0,
    "brace-style": 0,
    "no-new": 1,
    "no-param-reassign": 1,
    "no-shadow": 1,
    "no-unused-expressions": 0,
    "no-throw-literal": 0,
    "prefer-arrow-callback": 1,
    "semi": [2, "always"],
    "space-before-function-paren": [2, "never"],
    "comma-dangle": [2, "never"],
    "no-unused-vars": [2, {"vars": "all", "args": "none"}],
    "no-use-before-define": [2, {"functions": false, "classes": true}]
  },
  "env": {
    "es6": true
  },
};
