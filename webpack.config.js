const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/src/index.html',
    filename: 'index.html',
    inject: 'body'
})

module.exports = {
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
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader'],
            },

    //         {
    //             test: /\.(jpe?g|png|gif|svg)$/i,
    //             use:
    //                 "file-loader?name=src/wrapper/[name].[ext]"
    //         },
            {
                test: /\.(png|jpg|gif|jpe?g)$/i,
                use: [
                    {
                        loader: 'file-loader?name=src/wrapper/[name].[ext]',
                        options: {}
                    }
                ]
            }
        ]
    },
    plugins: [HtmlWebpackPluginConfig]
};


