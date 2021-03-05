module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/NotasVue/'
    : '/',
    chainWebpack: config => {
        config
        .plugin("html")
        .tap(args => {
            args[0].title = "Mis Notas"
            return args
        })
    }
}