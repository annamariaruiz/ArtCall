module.exports = {
  chainWebpack: config => {
    // remove the prefetch plugin
    config.plugins.delete('prefetch')

    // or:
    // modify its options:
    config.plugin('prefetch').tap(options => {
      options[0].fileBlacklist = options[0].fileBlacklist || []
      options[0].fileBlacklist.push(/myasyncRoute(.)+?\.js$/)
      return options
    })
  }
}