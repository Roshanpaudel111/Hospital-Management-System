# Hospital Management System

The Hospital Management System is a comprehensive web-based application designed to facilitate the efficient management and administration of hospitals. This project aims to automate various tasks and processes within a hospital, making it easier for healthcare professionals to manage patient records, appointments, billing, and other administrative activities.

## Features

1. **Patient Management**: Maintain a centralized database of patient information, including personal details, medical history, and contact information. The system allows for easy registration, searching, and updating of patient records.

2. **Appointment Scheduling**: Streamline the appointment booking process by providing a user-friendly interface for patients to request appointments with doctors or specialists. The system also enables hospital staff to manage and organize appointments efficiently.

3. **Doctor Management**: Keep track of doctor profiles, including their specialization, availability, and contact details. Doctors can access their schedules, view patient appointments, and update their availability status.

4. **Billing and Invoicing**: Generate and manage invoices for patient services, including consultations, treatments, and medications. The system calculates costs, tracks payments, and generates reports for accounting purposes.

5. **Pharmacy Management**: Maintain an inventory of medications and medical supplies, manage stock levels, and generate purchase orders when necessary. The system also supports issuing prescriptions and tracking medication distribution.

6. **Laboratory Management**: Enable laboratory staff to record and manage test requests, track samples, and update test results. The system provides a streamlined workflow for efficient laboratory operations.

7. **Reports and Analytics**: Generate various reports, such as patient statistics, financial summaries, and operational analytics. These reports help administrators make informed decisions and monitor the performance of the hospital.

## Installation

To run the Hospital Management System locally, follow these steps:
> NOTE : You have to set the env variables at first.

1. Clone the repository:

   ```bash
   git clone https://github.com/hyper-dot/Hospital-Management-System.git
   ```

2. Navigate to the project `backend` directory and run backend:

   ```bash
   cd Hospital-Management-System/backend
   npm i -g nodemon
   npm install
   nodemon 
   ```
   Then open new terminal or a new tab.

3. Navigate to the project `frontend` directory and run frontend:

  ```bash
  cd Hospital-Management-System/frontend
  npm install
  npm run dev
```
4. Now access the application using this url `http://localhost:3000`
## Technologies Used

- **Frontend**: HTML, CSS, JavaScript, React
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Other Libraries**: Bootstrap, Axios, Mongoose

