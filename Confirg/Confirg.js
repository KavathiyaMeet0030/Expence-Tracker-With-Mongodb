const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://kavathiyameet7603:Kavathiya%405757@cluster0.rmjjh.mongodb.net/ExpenseTracker')
  .then(() => console.log('DataBase Connected!')).catch((err)=>{
     console.log("err",err);
  });