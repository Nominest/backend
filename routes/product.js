import express from "express";
import { getProducts } from "../services/emp-services.js";
import { createUser } from "../services/emp-services.js";

const Router = express.Router();

let productNew = [{ id: 1, name: "iphone 15" }];
let user = [
  {
    user_name: "Test",
    role: "user",
    password: "nnnn",
    email: "test3@gmail.com",
    contact: "8162",
    address_1: "SBD",
    register_date: "2023-01-01",
  },
];
Router.get("/products", (req, res) => {
  console.log("get request");
  res.send("test");
});

Router.post("/products", (req, res) => {
  console.log(req.body, "post request");
  productNew.push(req.body);
  res.send(productNew);
});

Router.get("/employees", async (req, res) => {
  const { query } = req;
  const result = await getProducts(query.limit || 10);
  res.status(200).send(result);
});

//add user
// Router.get("/addUser", async (req, res) => {
//   console.log("Post huselt orj irlee:", req.body);
//   const users = await createUser();
//   users.push(req.body);
//   res.status(200).send(users);
// });
export default Router;
