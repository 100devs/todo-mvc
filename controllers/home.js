//sent from home.js main route b/c '/'; uses this home.js controller because told to; object with a method; 
module.exports = {
    //renders out index ejs file (html) and responds with it
    getIndex: (req, res) => {
        res.render('index.ejs')
    }
}