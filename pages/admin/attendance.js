import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";

import Footer from "@/components/_App/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { Bar, Pie, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  ArcElement, // Import ArcElement for Pie Chart
} from "chart.js";

// Registering necessary components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  ArcElement // Register ArcElement for Pie Chart
);

const Attendance = () => {
	const { elarniv_users_token } = parseCookies();
  const [school, setSchool] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [students, setStudents] = useState([]);
  const [showTable, setShowTable] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState("");


  // Expanded demo data
  const demoData = {
    "Greenwood High": {
      "Grade 1": [
        { id: 1, name: "Alice Johnson", status: "Present" },
        { id: 2, name: "Bob Smith", status: "Absent" },
        { id: 3, name: "Charlie Brown", status: "Late" },
        { id: 4, name: "Daniel Lee", status: "Present" },
        { id: 5, name: "Eve Davis", status: "Absent" },
        { id: 6, name: "Fayla Clark", status: "Present" },
      ],
      "Grade 2": [
        { id: 7, name: "Grace Wilson", status: "Present" },
        { id: 8, name: "Henry Harris", status: "Late" },
        { id: 9, name: "Irene Scott", status: "Absent" },
      ],
    },
    "St. Peters School": {
      "Grade 1": [
        { id: 10, name: "John Doe", status: "Present" },
        { id: 11, name: "Jane Doe", status: "Late" },
        { id: 12, name: "Sam Brown", status: "Present" },
        { id: 13, name: "Emma Stone", status: "Absent" },
      ],
      "Grade 2": [
        { id: 14, name: "Jack White", status: "Present" },
        { id: 15, name: "Olivia Black", status: "Present" },
        { id: 16, name: "Tom Green", status: "Absent" },
        { id: 17, name: "Sophia Blue", status: "Present" },
      ],
    },
  };

  // Handle form submission


  // Analytics: Calculate attendance statistics
  const getAttendanceData = () => {
    const presentCount = students.filter(student => student.status === "Present").length;
    const absentCount = students.filter(student => student.status === "Absent").length;
    const lateCount = students.filter(student => student.status === "Late").length;

    return {
      labels: ["Present", "Absent", "Late"],
      datasets: [
        {
          label: "Attendance Status",
          data: [presentCount, absentCount, lateCount],
          backgroundColor: ["#28a745", "#dc3545", "#ffc107"],
        },
      ],
    };
  };
  const handleSubmit = (e) => {
	e.preventDefault();
	if (school && selectedClass && selectedDate) {
	  const shuffledData = shuffleArray(demoData[school]?.[selectedClass] || []);
	  setStudents(shuffledData);
	  setShowTable(true);
	} else {
	  alert("Please select School, Class, and Date");
	}
  };
  const shuffleArray = (array) => {
	return array
	  .map(value => ({ value, sort: Math.random() }))
	  .sort((a, b) => a.sort - b.sort)
	  .map(({ value }) => value);
  };
  
  

  // Pie Chart for Attendance Proportions
  const getPieChartData = () => {
    const presentCount = students.filter(student => student.status === "Present").length;
    const absentCount = students.filter(student => student.status === "Absent").length;
    const lateCount = students.filter(student => student.status === "Late").length;

    return {
      labels: ["Present", "Absent", "Late"],
      datasets: [
        {
          data: [presentCount, absentCount, lateCount],
          backgroundColor: ["#28a745", "#dc3545", "#ffc107"],
        },
      ],
    };
  };

  // Line Chart to show attendance trend (Example: Attendance over 5 days)
  const getLineChartData = () => {
    return {
      labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"],
      datasets: [
        {
          label: "Attendance Rate (%)",
          data: [90, 85, 92, 88, 95], // Sample data for attendance over 5 days
          fill: false,
          borderColor: "#28a745",
          tension: 0.1,
        },
      ],
    };
  };

  useEffect(() => {
    const { elarniv_users_token } = parseCookies();

    if (!elarniv_users_token) {
      router.push("/login");
    } else {
      setUser({ name: "John Doe" });
    }
  }, [router]);

  return (
    <>
      {/* Back Button */}
      <Link href="/" passHref>
        <a className="btn btn-secondary position-absolute top-0 start-0 m-3">
          ← Back
        </a>
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mt-5"
      >
        <h2 className="text-center fw-bold">📋 Student Attendance</h2>
        <p className="text-center text-muted">Select School & Class to View Attendance</p>

        {/* User Info */}
        {user ? (
          <p className="text-center text-muted">
            Welcome, <strong>{user.name}</strong>
          </p>
        ) : (
          <p className="text-center text-muted">You are not logged in.</p>
        )}

        {/* Login Button */}
        {!user && (
          <div className="d-flex justify-content-center mt-4">
            <Link href="/login" passHref>
              <button className="btn btn-primary px-4">📍 Login</button>
            </Link>
          </div>
        )}

        {/* Attendance Form */}
        <form onSubmit={handleSubmit} className="p-4 border rounded shadow bg-white">
          <div className="row">
            <div className="col-md-6">
              <label className="fw-bold">🏫 Select School</label>
              <select
                className="form-select"
                value={school}
                onChange={(e) => setSchool(e.target.value)}
                required
              >
                <option value="">Choose School</option>
                <option value="Greenwood High">Greenwood High</option>
                <option value="St. Peters School">St. Peters School</option>
              </select>
            </div>
            <div className="col-md-6">
              <label className="fw-bold">📚 Select Class</label>
              <select
                className="form-select"
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                required
              >
                <option value="">Choose Class</option>
                <option value="Grade 1">Grade 1</option>
                <option value="Grade 2">Grade 2</option>
              </select>
            </div>
			<div className="col-md-4">
  <label className="fw-bold">📅 Select Date</label>
  <input 
    type="date" 
    className="form-control" 
    value={selectedDate} 
    onChange={(e) => setSelectedDate(e.target.value)} 
    max={new Date().toISOString().split("T")[0]} // Prevents future dates
    required 
  />
</div>


          </div>

          <div className="d-flex justify-content-center mt-4">
            <button type="submit" className="btn btn-primary px-4">
              📊 View Attendance
            </button>
          </div>
        </form>

        {/* Display Analytics - Bar Chart, Pie Chart, Line Chart */}
        {showTable && (
          <>
            <motion.div className="mt-5 p-4 border rounded shadow bg-white">
              <h4 className="fw-bold text-center">📅 Attendance Analytics for {selectedClass} - {school}</h4>

              <div className="row">
                {/* Bar Chart for Attendance Status */}
                <div className="col-md-4">
                  <h5 className="text-center">📊 Attendance Status (Bar Chart)</h5>
                  <Bar data={getAttendanceData()} options={{ responsive: true }} />
                </div>

                {/* Pie Chart for Attendance Proportions */}
                <div className="col-md-4">
                  <h5 className="text-center">🍰 Attendance Proportions (Pie Chart)</h5>
                  <Pie data={getPieChartData()} options={{ responsive: true }} />
                </div>

                {/* Line Chart for Attendance Trend */}
                <div className="col-md-4">
                  <h5 className="text-center">📈 Attendance Trend (Line Chart)</h5>
                  <Line data={getLineChartData()} options={{ responsive: true }} />
                </div>
              </div>
            </motion.div>

            {/* Attendance Table */}
            <motion.div className="mt-5 p-4 border rounded shadow bg-white">
              <h4 className="fw-bold text-center">📅 Attendance Details</h4>
              <table className="table table-hover mt-3">
                <thead className="table-dark">
                  <tr>
                    <th>#</th>
                    <th>👤 Student Name</th>
                    <th>📌 Status</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student, index) => (
                    <tr key={student.id}>
                      <td>{index + 1}</td>
                      <td>{student.name}</td>
                      <td>
                        <span
                          className={`badge bg-${student.status === "Present" ? "success" : student.status === "Absent" ? "danger" : "warning"}`}
                        >
                          {student.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </>
        )}
      </motion.div>

      <Footer />
    </>
  );
};

export default Attendance;
