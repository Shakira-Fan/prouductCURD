const express = require('express');
const router = express.Router();

const ProuductControllers = require('../controllers/product');


router.get('/',ProuductControllers.getAllData);
router.post('/',ProuductControllers.createData);

router.get('/:id',ProuductControllers.getOneItem);
router.post('/:id',ProuductControllers.updateData);
router.delete('/:id',ProuductControllers.deleteData);

module.exports = router;
