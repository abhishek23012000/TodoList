const Task = require('../models/task');


module.exports.home = function (req, res) {

    Task.find({},(err,task)=>{
        if(err)
        {
            console.log("error ");
            return 
        }
   


    return res.render('home', {
        title: "TodoList",
        task: task
       
    });
})

}

