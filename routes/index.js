const express=require('express');
const router=express.Router();

const homecontroller=require('../controllers/home_controller');
const taskcontroller=require('../controllers/task_controller');

console.log('router loaded');

router.get('/',homecontroller.home);
router.post('/add-task',taskcontroller.create);
router.get('/delete-task',taskcontroller.delete);

module.exports=router;
