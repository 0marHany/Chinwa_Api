// const Upload = require('../../services/uploadFile');
const { Upload } = require("../../services/uploadFile");
const { getAllDishes, addDishe,updateDishe,deleteDishe,deleteAllDishes,getDishe } = require('./dishes.controller');

const routes= require('express').Router();


routes.get("/dishes",getAllDishes);
routes.get("/dishes/:id",getDishe);

routes.post('/dishes',Upload.single('dishImg'),addDishe)

routes.put("/dishes/:id",updateDishe);
routes.delete("/dishes/:id",deleteDishe);
routes.delete("/dishes",deleteAllDishes);


module.exports=routes;