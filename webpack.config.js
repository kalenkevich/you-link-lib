module.exports = {
    name: "you-link",
    entry: ["babel-polyfill", "./src/index.js"],
    context: __dirname,
    output: {
        path: __dirname,
        filename: "lib/index.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [{ loader: "babel-loader" }]
            }
        ]
    },
    devtool: "source-map"
};