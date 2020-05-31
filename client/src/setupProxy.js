    // const { createProxyMiddleware } = require('http-proxy-middleware');

    // module.exports = function(app) {
    //   app.use(
    //     '/auth/google',
    //     createProxyMiddleware({
    //       target: 'http://localhost:5000',
    //       changeOrigin: true
    //     }),
    //     app.use(
    //       '/api*',
    //       createProxyMiddleware({
    //         target: 'http://localhost:5000',
    //         changeOrigin: true
    //       })
    //    )
    //   );
    // };


// const proxy = require('http-proxy-middleware')

// module.exports = function(app) {
//   app.use(proxy('/auth/google', { target: 'http://localhost:5000/', changeOrigin: true  }))
//   app.use(proxy('/api*', { target: 'http://localhost:5000/', changeOrigin: true  }))
// }

const { createProxyMiddleware } = require('http-proxy-middleware');
const proxy = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(createProxyMiddleware('/api/current_user', // replace with your endpoint
        { target: 'http://localhost:5000' } // replace with your target
    ));
    app.use(createProxyMiddleware('/auth/google', // replace with your endpoint
        { target: 'http://localhost:5000' } // replace with your target
    ));
}