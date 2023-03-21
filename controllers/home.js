//home controller that spits out an object that spits out a method 
//why is it a method? we set getIndex equal to a function -- remember objects have certain properties and methods that we can define 
// were putting our objects into their own folders and our functions into their own folders 

module.exports = {
    //this renders our ejs -- gives us our html 
    getIndex: (req,res)=>{
        //responds that html back to the browser to answer the users initial request 
        res.render('index.ejs')
    }
}