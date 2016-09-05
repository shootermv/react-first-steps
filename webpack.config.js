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
         }]
     }
 }