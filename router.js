const authcontroller=require('./controller');
const router=require('express').Router();

router.post('/add',authcontroller.bookController);
router.get('/get',authcontroller.getAllData);
router.get('/get/:id',authcontroller.getById);
router.put('/update/:id',authcontroller.updateBooks);
router.delete('/delete/:id',authcontroller.deleteBooks);


module.exports=router
