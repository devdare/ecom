import express from "express";
import app from "loaders/express";
import config from "./config";
// import app fr

app.listen(config.port, () => {
  console.log(`server running on port : ${config.port}`);
});
