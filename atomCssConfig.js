module.exports = {
    cssDest: './src/style/atomic.css',
    options: {
        // namespace: '#atomic',
    },
    configs: {
        breakPoints: {
            sm: '@media screen(min-width=750px)',
            md: '@media(min-width=1000px)',
            lg: '@media(min-width=1200px)'
        },
        custom: {
            1: '1px solid #000',
        },
        classNames: []
    },
    themeConf: '',
    helpers: {
        '$Green': (arg)=> ['P(600px)', 'Fz(1200px)'],
        '$Grid' : (arg)=> ['D(f)'],
        '$Wow'  : (arg)=> ['M(a) C(red)']
    }
}
