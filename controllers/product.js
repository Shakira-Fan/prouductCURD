const ProductSchema = require('../models/product');

const getAllData = async (req, res) => {
  /**
     * #swagger.tags = ['Product-產品']
     * #swagger.description = "取得全部產品 API"
     * #swagger.responses[200]= {
          description: '成功之後回傳格式',
          schema: {
            "status":true,
            "data": [
              {
                "price": 0,
                "quantity": 1,
                "_id": "645324ace96bbcdf2d8deb81",
                "id": 22222,
                "brand": "GUGGI",
                "category": "bag",
                "name": "Lily",
                "__v": 0
              }
            ]
          }
       }
     */
  try {
    const products = await ProductSchema.find({});
    res.status(200).json({ products });

  } catch (error) {
    res.status(500).json({ message: error });
  }
};
const createData = async (req, res) => {
  /**
     * #swagger.tags = ['Product-產品']
     * #swagger.description = "新增產品 API"
     * #swagger.parameters['body']={
          in:"body",
          type:"object",
          required: true,
          description: "資料格式",
          schema:{
            $name: 'Lily',
            $id:33333,
            $category: "shirt",
            $brand: 'One Boy'
          }
      }
     * #swagger.responses[201]= {
          description: '成功之後回傳格式',
          schema: {
            "status":true,
            "data": [
              {
                "price": 0,
                "quantity": 1,
                "_id": "645324ace96bbcdf2d8deb81",
                "id": 22222,
                "brand": "GUGGI",
                "category": "bag",
                "name": "Lily",
                "__v": 0
              }
            ]
          }
       }
     */
  try {
    const product = await ProductSchema.create(req.body);
    res.status(201).json({ product });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
const getOneItem = async (req, res) => {
  /**
     * #swagger.tags = ['Product-產品']
     * #swagger.description = "取得單一產品 API"
     * #swagger.responses[200]= {
          description: '成功之後回傳格式',
          schema: {
            "status":true,
            "data": [
              {
                "price": 0,
                "quantity": 1,
                "_id": "645324ace96bbcdf2d8deb81",
                "id": 22222,
                "brand": "GUGGI",
                "category": "bag",
                "name": "Lily",
                "__v": 0
              }
            ]
          }
       }
     */
  try {
    const { id } = req.params;
    const product = await ProductSchema.findOne({ id });

    if (!product) {
      return res.status(404).json({ message: 'Item does not Exist !!!' });
    }

    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
const updateData = async (req, res) => {
  /**
     * #swagger.tags = ['Product-產品']
     * #swagger.description = "更改單一產品 API"
     * #swagger.path = '/product?id={id}'
     * #swagger.parameters['body']={
          in:"body",
          type:"object",
          required: true,
          description: "資料格式",
          schema:{
            price:200,
            quantity: 300,
            brand: "nike",
            category: "food"
          }
      }
     * #swagger.responses[200]= {
          description: '成功之後回傳格式',
          schema: {
            "status":true,
            "data": [
              {
                "price": 0,
                "quantity": 1,
                "_id": "645324ace96bbcdf2d8deb81",
                "id": 22222,
                "brand": "GUGGI",
                "category": "bag",
                "name": "Lily",
                "__v": 0
              }
            ]
          }
       }
     */
  try {
    const data = req.body;
    const productId=req.params.id;
    const product = await ProductSchema.findOneAndUpdate(productId,{
      price:data.price,
      quantity:data.quantity,
      brand:data.brand,
      name:data,name,
      category:data.category
    });
    if (!product) {
      return res.statusnode(404).json({ messgae: 'No Items with that ID' });
    }
    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
const deleteData = async (req, res) => {
  /**
     * #swagger.tags = ['Product-產品']
     */
  try {
    const { id } = req.params;
    console.log(id);
    const product = await ProductSchema.findOneAndDelete({ id });

    if (!product) {
      return res.status(404).json({ messgae: 'No Items with that ID' });
    }

    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = {
  getAllData,
  createData,
  getOneItem,
  updateData,
  deleteData,
};
