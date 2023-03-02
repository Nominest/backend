import express from "express";
import { getProducts } from "../services/emp-services.js";

const Router = express.Router();

let productNew = [{ id: 1, name: "iphone 15" }];

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

export default Router;
