import express from "express";

const itemsRouter = express.Router();

const cartItems = [
  { id: 1, product: "yarn", price: 10, quantity: 5 },
  { id: 2, product: "redbull", price: 3, quantity: 3 },
  { id: 3, product: "milk", price: 3, quantity: 14 },
];

itemsRouter.get("/cartItems", (req, res) => {
  //     let filtered=cartItems;
  //     const {maxPrice,prefix,pageSize}=req.query
  //     if(maxPrice){
  // filtered=filtered.filter(item)=>{
  //     return itemsRouter.price
  // }
  res.json(cartItems);
});

export default itemsRouter;
