const express = require('express');
const { AppointmentModel } = require('../models/Appointment.model');

const router = express.Router();

router.post('/department', async (req, res) => {
  let { department } = req.body;
  try {
    const appointments = await AppointmentModel.find({ department });
    res.status(200).send(appointments);
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: 'Something went wrong' });
  }
});

// router.post("/create", async (req, res) => {
//   const payload = req.body;
//   try {
//     const appointment = new AppointmentModel(payload);
//     await appointment.save();
//   } catch (error) {
//     res.send(error);
//   }
//   res.send("Appointment successfully booked.");
// });

router.post('/create', async (req, res) => {
  const payload = req.body;
  try {
    const appointment = new AppointmentModel(payload);
    await appointment.save();
    res.send('Appointment successfully booked.');
  } catch (error) {
    res.send(error);
    return;
  }
});

router.patch('/:appointmentId', async (req, res) => {
  const id = req.params.appointmentId;
  const payload = req.body;
  try {
    const appointment = await AppointmentModel.findByIdAndUpdate(
      { _id: id },
      payload
    );
    if (!appointment) {
      res.status(404).send({ msg: `Appointment with id ${id} not found` });
    }
    res.status(200).send(`Appointment with id ${id} updated`);
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: 'Something went wrong, unable to Update.' });
  }
});

router.delete('/:appointmentId', async (req, res) => {
  const id = req.params.appointmentId;
  try {
    const appointment = await AppointmentModel.findByIdAndDelete({ _id: id });
    if (!appointment) {
      res.status(404).send({ msg: `Appointment with id ${id} not found` });
    }
    res.status(200).send(`Appointment with id ${id} deleted`);
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: 'Something went wrong, unable to Delete.' });
  }
});

module.exports = router;
