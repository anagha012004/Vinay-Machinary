import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from './models/productModel.js';

dotenv.config();

const testConnection = async () => {
  try {
    // Use production MongoDB URI
    const PROD_URI = 'mongodb+srv://anagha012004:anagha123@cluster0.xoiwlrh.mongodb.net/vinay-machinery?retryWrites=true&w=majority';
    
    await mongoose.connect(PROD_URI);
    console.log('✅ Connected to production database');
    
    // Check if products exist
    const productCount = await Product.countDocuments();
    console.log(`📦 Total products in database: ${productCount}`);
    
    if (productCount > 0) {
      const products = await Product.find().limit(3);
      console.log('📋 Sample products:');
      products.forEach(product => {
        console.log(`- ${product.name} (${product.brand})`);
      });
    } else {
      console.log('❌ No products found in database');
    }
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
    process.exit(1);
  }
};

testConnection();