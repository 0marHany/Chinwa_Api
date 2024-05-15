// const Upload = require('../../services/uploadFile');
const { Upload } = require("../../services/uploadFile");
const { getAllDishes, addDishe,updateDishe,deleteDishe,deleteAllDishes } = require('./dishes.controller');

const routes= require('express').Router();


routes.get("/dishes",getAllDishes);

routes.post('/dishes',Upload.single('dishImg'),addDishe)

routes.put("/dishes/:id",updateDishe);
routes.delete("/dishes/:id",deleteDishe);
routes.delete("/dishes",deleteAllDishes);


module.exports=routes;