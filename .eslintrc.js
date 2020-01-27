module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "settings": {
        "import/resolver": {
            "webpack": {}
        }
    },
    "env": {
        "browser": true,
        "es6": true,
        "jest": true
    },
    "rules": {
        "no-use-before-define": 0,
        "semi": [2, "never"],
        "object-curly-spacing": [0, "never"],
        "jsx-quotes": [2, "prefer-single"],
        "arrow-parens": [0, "always"],
        "react/forbid-prop-types": "warn",
        "object-curly-newline": ["error", { "consistent": true }],
        "jsx-a11y/anchor-is-valid": [ "error", {
            "components": [ "Link" ],
            "specialLink": [ "to", "hrefLeft", "hrefRight" ],
            "aspects": [ "noHref", "invalidHref", "preferButton" ]
        }],
        "react/jsx-wrap-multilines": [2, {
            "declaration": "parens-new-line",
            "assignment": "parens-new-line",
            "return": "parens-new-line",
            "arrow": "parens-new-line",
            "condition": "parens-new-line",
            "logical": "parens-new-line",
            "prop": "parens-new-line"
            }],
        "import/prefer-default-export": 0,
        "import/extensions": [".js", ".jsx", ".json", ".ts", ".tsx"]
    }
};
