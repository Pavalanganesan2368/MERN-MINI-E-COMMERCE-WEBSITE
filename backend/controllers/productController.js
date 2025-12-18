const productModel = require('../models/productModel');

// Get Products API - api/v1/products

exports.getProducts = async (req, res, next) => {
     let query = req.query.keyword ? { name : { 
          $regex : req.query.keyword,
          $options : 'i'
     } } : {}
     const products = await productModel.find( query );

     res.json({
          success : true,
          products : products
     })
}

// Get Single Product API - api/v1/product/:id

exports.getSingleProduct = async (req, res, next) => {
     try {
          const singleProduct = await productModel.findById(req.params.id);
          res.json({
               success : true,
               singleProduct : singleProduct
          })
     } catch (error) {
          res.statusCode(404).json({
               success : false,
               message : "Unable To get This ID Product"
          })
     }
}

