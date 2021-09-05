module.exports = {
  configureWebpack: {
    resolve: {
      alias: { 
        'assets': '@/assets',
        'components': '@/components',
        'router': '@/router',
        'store': '@/store',
        'views': '@/views',
        'network': '@/network'
      }
    }
  }
}
