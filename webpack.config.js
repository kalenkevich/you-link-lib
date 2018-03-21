module.exports = {
    name: "you-link",
    entry: ["babel-polyfill", "./index.js"],
    context: __dirname,
    output: {
        path: __dirname,
        filename: "dist/index.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [{
                    loader: "babel-loader"
                }]
            }
        ]
    }
};