
function validator(req,res,next){
 // console.log(typeof(req.query));
const check = /^[0-9]+$/;
const result =(req.query.name).match(check)
//console.log(result);

if ( (req.query.name) !== "" && !result)

{
next()
}
else{

next('The Name You Entered NOT valid! try again');
console.log('The Name You Entered NOT valid! try again');
}
}


module.exports =validator;