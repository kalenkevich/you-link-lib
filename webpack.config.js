module.exports = {
    name: "you-link",
    entry: {
        app: "./index.js"
    },
    output: {
        filename: "lib/index.js",
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [{ loader: "babel-loader" }]
            }
        ]
    }
};