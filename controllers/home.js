module.exports = {
    getIndex: (req, res) => {
        res.render('index.ejs')
    },
    getQuote: ((req, res) => {
        res.json({
            prop: 'value'
        })
    })
}