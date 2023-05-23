// export default AllReport;
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { GetAllReports } from "../../../../../Redux/Datas/action";
import Sidebar from "../../GlobalFiles/Sidebar";
import "./report-overlay.css";

const AllReport = () => {
  const dispatch = useDispatch();
  const [reports, setReports] = useState([]);
  const [selectedReport, setSelectedReport] = useState(null);

  useEffect(() => {
    dispatch(GetAllReports()).then((res) => {
      setReports(res);
    });
  }, [dispatch]);

  const handleReportClick = (report) => {
    setSelectedReport(report);
  };

  const handleCloseOverlay = () => {
    setSelectedReport(null);
  };

  return (
    <>
      <div className="container">
        <Sidebar />
        <div className="AfterSideBar">
          <div className="Payment_Page">
            <h1 style={{ marginBottom: "2rem" }}>All Reports</h1>
            <div className="patientBox">
              <table>
                <thead>
                  <tr>
                    <th>Patient Name</th>
                    <th>Department</th>
                    <th>Doctor Name</th>
                    <th>Patient Mobile</th>
                    <th>Patient Age</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {reports.map((report) => (
                    <tr
                      className="clickable"
                      key={report.reportID}
                      onClick={() => handleReportClick(report)}
                    >
                      <td>{report.patientName}</td>
                      <td>{report.docDepartment}</td>
                      <td>{report.docName}</td>
                      <td>{report.patientMobile}</td>
                      <td>{report.patientAge}</td>
                      <td>{report.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {selectedReport && (
          <div className="overlay">
            <div className="overlay-content">
              <h2>Report Details</h2>
              <p>
                <strong>Doctor Name :</strong> {selectedReport.docName}
              </p>
              <p>
                <strong>Doctor Department :</strong> {selectedReport.docDepartment}
              </p>
              <p>
                <strong>Doctor Contact :</strong> {selectedReport.docMobile}
              </p>
              <p>
                <strong>Blood Group :</strong> {selectedReport.patientBloodGroup}
              </p>
              <p>
                <strong>Disease :</strong> {selectedReport.patientDisease}
              </p>
              <p>
                <strong>Patient Tempreture :</strong> {selectedReport.patientTempreture}
              </p>
              <p>
                <strong>Patient Weight:</strong> {selectedReport.patientWeight}
              </p>
              <p>
                <strong>Patient Glucose:</strong> {selectedReport.patientGlucose}
              </p>
              <p>
                <strong>Patient BP:</strong> {selectedReport.patientBP}
              </p>
              <p>
                <strong>Date:</strong> {selectedReport.date}
              </p>
              <h3>Medicines</h3>
              <thead>
                <th>Name</th>
                <th>Dosage</th>
                <th>Duration</th>
              </thead>
              <tbody>
                {selectedReport.medicines.map((e) => (
                  <tr>
                    <td>{e.medName}</td>
                    <td>{e.dosage}</td>
                    <td>{e.duration}</td>
                  </tr>
                ))}
              </tbody>

              <button className="report-close-button" onClick={handleCloseOverlay}>
                X
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AllReport;
