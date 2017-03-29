 var path = require('path');
 var srcPath = path.resolve(__dirname,  'src');

 var postCSSConfig = require('./postcss.config')
 module.exports = {

     entry: './src/app.js',
     output: {
         path: './out',
         filename: 'app.bundle.js',
     },
     module: {
         loaders: [{
             test: /\.js?|\.jsx?$/,
             exclude: /node_modules/,
             loaders: ['babel'],
             include: __dirname            
         },
         {
            test: /\.css$/,
            include: srcPath,
            loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]&camelCase!postcss'          
         }]
     },
     postcss: function() {
       return postCSSConfig;
     }    
 }