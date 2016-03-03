var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
        'webpack/hot/only-dev-server',
        './src/index.js' // Your appʼs entry point
    ],
    devtool: process.env.WEBPACK_DEVTOOL || 'source-map',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: 'public'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loaders: ['react-hot', 'babel']
            },
            {
                test: /\.jpg/,
                loader: 'file'
            },
            {
                test: /\.css/,
                loaders: ['style', 'css?modules&localIdentName=[local]---[hash:base64:5]', 'cssnext']
            }
        ]
    },
    devServer: {
        contentBase: "src",
        noInfo: true, //  --no-info option
        hot: true,
        inline: true
    },
    plugins: [
        new webpack.NoErrorsPlugin()
    ]
};
