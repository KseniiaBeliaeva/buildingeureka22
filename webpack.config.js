const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './src/app.html',
    filename: 'app.html',
    inject: 'body'
})
module.exports = {
    entry: './src/index.jsx',
    output: {
        path: './docs',
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





// module.exports = {
//     entry: {
//         index: [
//             './src/index.jsx',
//             './src/style.css'
//         ],
//         menu: './components/menu.jsx',
//         services: './components/services.jsx',
//         header: './components/header.jsx',
//         specials: './components/specials.jsx',
//     },
//     output: {
//         filename: '[name].js',
//         path: __dirname + "/docs",
//     },
//     resolve: {
//         extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
//     },
//     module: {
//         rules: [
//             // rules for modules (configure loaders, parser options, etc.)
//             { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
//             { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
//             {
//                 test: /\.jsx?$/,
//                 loader: "babel-loader",
//                 options: {
//                     presets: ["react"] //"es2015"]
//                 },
//             },
//             { test: /\.css$/, loader: "style-loader!css-loader" },
//         ],
//     },
//     // plugins: [HtmlWebpackPluginConfig],
//     devtool: '#source-map',
// };

