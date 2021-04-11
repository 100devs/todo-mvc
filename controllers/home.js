// spitting out a object that has a method
// getIndex renders out index.ejs - gives us our HTML
module.exports = {
    getIndex: (req,res)=>{
        res.render('index.ejs')
    }
}