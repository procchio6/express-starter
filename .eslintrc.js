module.exports = {
    "parser": "babel-eslint",
    "extends": [
        "airbnb-base",
        "plugin:flowtype/recommended"
    ],
    "env": {
        "node": true,
    },
    "plugins": [
        "flowtype"
    ],
    "rules": {
        "strict": 0
    }
};
