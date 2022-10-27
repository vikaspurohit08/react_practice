const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

let cart = { itemList: [], totalAmount: 0 };

app.post("/cart", (req, res) => {
  //add/increment item
  const item = req.body;

  const index = cart.itemList.findIndex((cartItem) => cartItem.id === item.id);
  if (index === -1) {
    cart.itemList.push({
      ...item,
      id: Math.random().toFixed(2),
      quantity: 1,
      total: item.price,
    });
  } else {
    cart.itemList[index].quantity++;
    cart.itemList[index].total += item.price;
  }
  cart.totalAmount += cart[index].price;

  res.status(200).send({ id: cart[index].id });
});

app.patch("/cart/:id", (req, res) => {
  //decrement item quantity
  const index = cart.findIndex((item) => item.id === req.query.id);
  if (index === -1) {
    res.status(404).send({});
    return;
  } else if (cart[index].quantity === 1) {
    cart.totalAmount -= cart.itemList[index].price;
    cart.itemList.splice(index, 1);
  } else {
    cart.itemList[index].quantity--;
    cart.itemList[index].total -= cart.itemList[index].price;
    cart.totalAmount -= cart.itemList[index].price;
  }
});

app.put("/cart", (req, res) => {
  //override cart
  cart = req.body;
  res.status(200).send(cart);
});

app.get("/cart", (req, res) => {
  console.log("cart", cart);
  //get cart
  res.status(200).send(cart);
});

app.listen(8080, () => {
  console.log("Server started on 8080");
});
