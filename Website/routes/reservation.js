const express = require("express");
const Reserve = require("../models/reservation");

router = express.Router();

router.post("/getdata", async(req, res) =>{
  const name = req.body.name
  const nowdate = req.body.nowdate
  
  const data = await Reserve.find({name : name, date : nowdate})

  res.send(data)
})

router.post("/datatable", async(req, res) => {
  const nowdate = req.body.nowdate
  const status = req.body.status

  const table = await Reserve.find({ date : nowdate, status : status})
  // console.log(table)
  res.send(table)
})

router.post("/addreserve", async (req, res) => {
  const table = req.body.table;
  const status = req.body.status;
  const name = req.body.name;
  const date = req.body.date
  const time = req.body.time;
  const code = req.body.code

  try {
    const reserve = new Reserve({ table, status, name, date, time, code });

    await reserve.save();

    res.send(reserve);
    res.status(200)
  } catch (err) {
    res.json(err);
  }
});

exports.router = router;
