module.exports = {
    root: true,
    env: {
        node: true,
        webextensions: true,
    },
    extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
    parserOptions: {
        parser: "babel-eslint",
    },
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",

        // //чтобы скомпилировалось нужно закоментить весь блок
        // "prettier/prettier": [

        //     "error", // чтобы не отсвечивало в .js файлах
        //     {
        //         "endOfLine": "auto",

        //         // "tabWidth": 4,
        //         // "disableLanguages": ["js"] // don't work?
        //     },
        //     "disableLanguages": ["js"]  // открывать  / закрывать когда работаем с файлами .js
        // ],

    },
};
