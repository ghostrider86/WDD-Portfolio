module.exports = {
  plugins: [
    // ['@snowpack/plugin-sass' ],
  ],
  mount: {
         
    src: '/',
   },
   'buildOptions': {
     out: 'build',
      baseUrl: '/pick_me_up/build',
      clean: true,
      htmlFragments: true,
   },
   'experiments': {
    'optimize': {
      // 'bundle': true,
      minify: true,
      target: 'es2015',
    },
  },

};
