const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/src/index.html',
    filename: 'index.html',
    inject: 'body'
})

module.exports = {
    // entry: __dirname +  "/src",
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    output: {
        path: __dirname + '/docs',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx/,
                use: {
                    loader: 'babel-loader',
                    options: { presets: ['react', 'es2015'] }
                }
            },
        ]
    },
    plugins: [HtmlWebpackPluginConfig]
};


