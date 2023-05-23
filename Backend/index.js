const express = require('express');
require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');

const adminRouter = require('./routes/Admins.Route');
const ambulanceRouter = require('./routes/Ambulances.Route');
const appointmentRouter = require('./routes/Appointments.Route');
const bedRouter = require('./routes/Beds.Route');
const doctorRouter = require('./routes/Doctors.Route');
const hospitalRouter = require('./routes/Hospitals.Route');
const nurseRouter = require('./routes/Nurses.Route');
const patientRouter = require('./routes/Patients.Route');
const paymentRouter = require('./routes/Payments.route');
const prescriptionRouter = require('./routes/Prescriptions.Route');
const reportRouter = require('./routes/Reports.Route');

const app = express();

// App settings
app.use(express.json());
app.use(cors());
mongoose.set('strictQuery', true);

//Mongodb Connection
const URI = 'mongodb://127.0.0.1:27017/Hospital';
mongoose.connect(URI);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error!!'));
db.once('open', () => {
  console.log('Connection Open!!');
});

// Home Route
app.get('/', (req, res) => {
  res.send('Homepage');
});

// All routes
app.use('/admin', adminRouter);
app.use('/ambulances', ambulanceRouter);
app.use('/appointments', appointmentRouter);
app.use('/beds', bedRouter);
app.use('/doctors', doctorRouter);
app.use('/hospitals', hospitalRouter);
app.use('/nurses', nurseRouter);
app.use('/patients', patientRouter);
app.use('/payments', paymentRouter);
app.use('/prescriptions', prescriptionRouter);
app.use('/reports', reportRouter);

// App listening
app.listen(process.env.port || 5000, () => {
  console.log(`Listening at port 5000`);
});

mongoose.set('strictQuery', false);
