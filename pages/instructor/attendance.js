import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import DatePicker from "react-datepicker";
import { motion } from "framer-motion";
import { Bar, Line } from "react-chartjs-2";
import Link from "next/link";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";
import "../../node_modules/react-datepicker/dist/react-datepicker.css";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
);

// Mock data
const mockClasses = ["Class A", "Class B", "Class C"];
const mockStudents = {
  "Class A": ["Alice", "Bob", "Charlie"],
  "Class B": ["David", "Eve", "Frank"],
  "Class C": ["Grace", "Hank", "Ivy"],
};

const mockTimetable = {
  "2025-02-22T10:00": "Math - Class A",
  "2025-02-22T12:00": "Science - Class B",
};

const mockAttendanceStats = {
  "2025-02-21": { "Alice": "Present", "Bob": "Absent", "Charlie": "Present" },
  "2025-02-20": { "Alice": "Absent", "Bob": "Present", "Charlie": "Present" },
};

const Analytics = () => {
  const router = useRouter();
  const { elarniv_users_token } = parseCookies();
  const [selectedClass, setSelectedClass] = useState("");
  const [students, setStudents] = useState([]);
  const [attendance, setAttendance] = useState({});
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [fetchDate, setFetchDate] = useState(new Date());
  const [timetable, setTimetable] = useState("No class scheduled");
  const [newDate, setNewDate] = useState(new Date());
  const [newTimetableEntry, setNewTimetableEntry] = useState("");
  const [attendanceStats, setAttendanceStats] = useState(mockAttendanceStats);
  const [viewDate, setViewDate] = useState(new Date());

  useEffect(() => {
    if (!elarniv_users_token) {
      router.push("/login");
    }
  }, [router, elarniv_users_token]);

  const handleClassChange = (e) => {
    setSelectedClass(e.target.value);
    setStudents(mockStudents[e.target.value] || []);
    setAttendance({});
  };

  const handleAttendanceChange = (student, status) => {
    setAttendance({ ...attendance, [student]: status });
  };

  const saveAttendance = () => {
    const dateKey = selectedDate.toISOString().slice(0, 10);
    setAttendanceStats({ ...attendanceStats, [dateKey]: attendance });
    alert("Attendance saved!");
    setAttendance({});
  };

  const fetchTimetable = () => {
    const key = fetchDate.toISOString().slice(0, 16);
    setTimetable(mockTimetable[key] || "No class scheduled");
  };

  const saveTimetable = () => {
    const key = newDate.toISOString().slice(0, 16);
    mockTimetable[key] = newTimetableEntry;
    alert("Timetable updated!");
    setNewTimetableEntry("");
  };

  const getAttendanceStatsForDate = (date) => {
    const dateKey = date.toISOString().slice(0, 10);
    return attendanceStats[dateKey] || {};
  };

  // Dummy data for monthly attendance percentage
  const monthlyAttendanceData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Monthly Attendance Percentage",
        data: [85, 90, 88, 92, 87, 91],
        borderColor: "#3B82F6",
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ padding: "24px", maxWidth: "1200px", margin: "0 auto" }}
    >
      <Link href="/" passHref>
        <a className="btn btn-secondary position-absolute top-0 start-0 m-3">
          ← Back
        </a>
      </Link>
      {/* Header */}
      <h2 style={{ fontSize: "2rem", fontWeight: "bold", textAlign: "center", marginBottom: "24px", color: "#1E40AF" }}>
        📈 Class Analytics & Attendance
      </h2>

      {/* Class Selection */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px", marginBottom: "24px" }}>
        <div>
          <h4 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "8px", color: "#374151" }}>Select Class</h4>
          <select
            style={{ width: "100%", padding: "8px", border: "1px solid #D1D5DB", borderRadius: "6px", backgroundColor: "#F9FAFB" }}
            onChange={handleClassChange}
            value={selectedClass}
          >
            <option value="">Select a Class</option>
            {mockClasses.map((cls) => (
              <option key={cls} value={cls}>{cls}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Attendance Section */}
      {selectedClass && (
        <div style={{ marginTop: "24px", backgroundColor: "#FFFFFF", padding: "24px", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
          <h4 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "16px", color: "#374151" }}>
            Mark Attendance ({selectedDate.toDateString()})
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {students.map((student) => (
              <div key={student} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#F3F4F6", padding: "12px", borderRadius: "6px" }}>
                <span style={{ fontSize: "1rem", color: "#1F2937" }}>{student}</span>
                <div>
                  <button
                    type="button"
                    className="default-btn"
                    style={{
                      backgroundColor: attendance[student] === "Present" ? "#10B981" : "transparent",
                      color: attendance[student] === "Present" ? "#FFFFFF" : "#10B981",
                      border: `1px solid #10B981`,
                      marginRight: "8px",
                    }}
                    onClick={() => handleAttendanceChange(student, "Present")}
                  >
                    Present
                  </button>
                  <button
                    type="button"
                    className="default-btn"
                    style={{
                      backgroundColor: attendance[student] === "Absent" ? "#EF4444" : "transparent",
                      color: attendance[student] === "Absent" ? "#FFFFFF" : "#EF4444",
                      border: `1px solid #EF4444`,
                    }}
                    onClick={() => handleAttendanceChange(student, "Absent")}
                  >
                    Absent
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button
            type="submit"
            className="default-btn"
            onClick={saveAttendance}
            style={{ marginTop: "16px" }}
          >
            Save Attendance
          </button>
        </div>
      )}

      {/* Previous Days' Attendance */}
      <div style={{ marginTop: "24px", backgroundColor: "#FFFFFF", padding: "24px", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
        <h4 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "16px", color: "#374151" }}>View Previous Attendance</h4>
        <DatePicker
          selected={viewDate}
          onChange={(date) => setViewDate(date)}
          dateFormat="yyyy-MM-dd"
          style={{ width: "100%", padding: "8px", border: "1px solid #D1D5DB", borderRadius: "6px", backgroundColor: "#F9FAFB" }}
        />
        <div style={{ marginTop: "16px" }}>
          <h5 style={{ fontSize: "1rem", fontWeight: "500", marginBottom: "8px", color: "#374151" }}>Attendance for {viewDate.toDateString()}</h5>
          {students.map((student) => (
            <div key={student} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
              <span style={{ fontSize: "1rem", color: "#1F2937" }}>{student}</span>
              <span style={{ fontSize: "1rem", color: getAttendanceStatsForDate(viewDate)[student] === "Present" ? "#10B981" : "#EF4444" }}>
                {getAttendanceStatsForDate(viewDate)[student] || "Not Marked"}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Timetable Management */}
      <div style={{ marginTop: "24px", backgroundColor: "#FFFFFF", padding: "24px", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
        <h4 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "16px", color: "#374151" }}>Timetable Management</h4>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
          <div>
            <h5 style={{ fontSize: "1rem", fontWeight: "500", marginBottom: "8px", color: "#374151" }}>Fetch Timetable</h5>
            <DatePicker
              selected={fetchDate}
              onChange={(date) => setFetchDate(date)}
              showTimeSelect
              dateFormat="Pp"
              style={{ width: "100%", padding: "8px", border: "1px solid #D1D5DB", borderRadius: "6px", backgroundColor: "#F9FAFB" }}
            />
            <button
              type="submit"
              className="default-btn"
              onClick={fetchTimetable}
              style={{ marginTop: "8px" }}
            >
              Fetch
            </button>
            <p style={{ marginTop: "8px", color: "#374151" }}>Timetable: {timetable}</p>
          </div>
          <div>
            <h5 style={{ fontSize: "1rem", fontWeight: "500", marginBottom: "8px", color: "#374151" }}>Update Timetable</h5>
            <DatePicker
              selected={newDate}
              onChange={(date) => setNewDate(date)}
              showTimeSelect
              dateFormat="Pp"
              style={{ width: "100%", padding: "8px", border: "1px solid #D1D5DB", borderRadius: "6px", backgroundColor: "#F9FAFB" }}
            />
            <input
              type="text"
              placeholder="Enter class details"
              value={newTimetableEntry}
              onChange={(e) => setNewTimetableEntry(e.target.value)}
              style={{ width: "100%", padding: "8px", border: "1px solid #D1D5DB", borderRadius: "6px", backgroundColor: "#F9FAFB", marginTop: "8px" }}
            />
            <button
              type="submit"
              className="default-btn"
              onClick={saveTimetable}
              style={{ marginTop: "8px" }}
            >
              Save Timetable
            </button>
          </div>
        </div>
      </div>

      {/* Attendance Statistics */}
      <div style={{ marginTop: "24px", backgroundColor: "#FFFFFF", padding: "24px", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
        <h4 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "16px", color: "#374151" }}>Attendance Statistics</h4>
        <Bar
          data={{
            labels: students,
            datasets: [{
              label: "Attendance Record",
              data: students.map((s) => (getAttendanceStatsForDate(selectedDate)[s] === "Present" ? 1 : 0)),
              backgroundColor: "#3B82F6",
            }],
          }}
          options={{
            scales: {
              y: {
                beginAtZero: true,
                max: 1,
              },
            },
          }}
        />
      </div>

      {/* Monthly Attendance Percentage */}
      <div style={{ marginTop: "24px", backgroundColor: "#FFFFFF", padding: "24px", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
        <h4 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "16px", color: "#374151" }}>Monthly Attendance Percentage</h4>
        <Line
          data={monthlyAttendanceData}
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: "top",
              },
              title: {
                display: true,
                text: "Monthly Attendance Percentage",
              },
            },
          }}
        />
      </div>
    </motion.div>
  );
};

export default Analytics;