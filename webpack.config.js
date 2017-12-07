const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
let entry = {
    index: './src/index.jsx',
    updates: "./src/updates/updates.jsx",
    photos: "./src/photos/photos.jsx",
};
let entryHtmlPlugins = Object.keys(entry).map(function (entryName) {
    return new HtmlWebpackPlugin({
        inject: 'body',
        title: entryName,
        template: './src/index.html',
        filename:  entryName + ".html",
        chunks: [entryName]
    })
});

module.exports = {
    entry: entry,
    output: {
        path: __dirname + '/docs',
        filename: '[name].js'
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
                {
                    test: /\.html$/,
                    loader: 'html-loader'
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
    plugins: entryHtmlPlugins
};


