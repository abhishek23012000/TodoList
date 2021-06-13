const Task = require('../models/task');
module.exports.create=(req,res)=>{
    Task.create({
        description: req.body.description,
        category: req.body.category,
        date: req.body.date

    },(err,newcreate)=>{
        if(err)
        {
            console.log('error in creting ');
        }
        console.log("******",newcreate);
       return res.redirect('back');
    });

}

module.exports.delete=(req,res)=>{
  // get the id from query
  var id = req.query;

  // checking the number of tasks selected to delete
  var count = Object.keys(id).length;
  for(let i=0; i < count ; i++){
      
      // finding and deleting tasks from the DB one by one using id
      Task.findByIdAndDelete(Object.keys(id)[i], function(err){
      if(err){
          console.log('error in deleting task');
          }
      })
  }
  return res.redirect('back'); 

}