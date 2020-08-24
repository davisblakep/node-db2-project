const express = require("express");
const knex = require("knex");
const db = require("../data/config");

const router = express.Router();

router.get("/cars", async (req, res, next) => {
  try {
    res.json(await db("car-dealer"));
  } catch (err) {
    next(err);
  }
});

router.get("/cars/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const car = await db("car-dealer").where({ id }).first();

    res.json(car);
  } catch (err) {
    next(err);
  }
});

router.post("/cars", async (req, res, next) => {
  try {
    const [id] = await db("car-dealer").insert(req.body);
    const newCar = await db("car-dealer").where({ id }).first();

    res.status(201).json(newCar);
  } catch (err) {
    next(err);
  }
});

router.put("/cars/:id", async (req, res, next) => {
  try {
    await db("car-dealer")
      .update({
        make: req.body.make,
        model: req.body.model,
        VIN: req.body.VIN,
        mileage: req.body.mileage,
        status: req.body.status,
        transmission: req.body.transmission,
      })
      .where("id", req.params.id);
    const car = await db("car-dealer").where("id", req.params.id).first();
    res.json(car);
  } catch (err) {
    next(err);
  }
});

router.delete("/cars/:id", async (req, res, next) => {
  try {
    await db("car-dealer").where("id", req.params.id).del();
    res.status(204).end();
  } catch (err) {
    next(err);
  }
});

module.exports = router;
