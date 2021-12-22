const webpack = require("webpack");
const path = require("path");

module.exports = {
    entry: path.resolve(__dirname, "./src/index.js"),
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.(scss|css)$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ],
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"],
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "bundle.js",
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devServer: {
        // contentBase
        static: {
            directory: path.join(__dirname, "./dist")
        },
        port: 3000,
        // publicPath
        devMiddleware: {
            publicPath: "https://localhost:3000/dist/",
        },
        // hotOnly
        hot: "only",


    },
};