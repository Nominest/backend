import express from "express";
import Router from "./routes/product.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(Router);

app.listen(5000, () => {
  console.log("listening on 4000");
});
