import React, { useState } from "react";
import Link from "next/link";

const studentsData = [
  { id: 1, first_name: "John", last_name: "Doe", email: "john.doe@example.com", phone: "123-456-7890", bio: "A passionate learner.", email_confirmed: true, role: "student", password: "password123", class: "3A", performance: "Excellent", attendance: Math.floor(Math.random() * 101) }, // Random attendance percentage
  { id: 2, first_name: "Jane", last_name: "Smith", email: "jane.smith@example.com", phone: "987-654-3210", bio: "Loves mathematics.", email_confirmed: false, role: "student", password: "password456", class: "3A", performance: "Good", attendance: Math.floor(Math.random() * 101) },
  { id: 3, first_name: "Alice", last_name: "Johnson", email: "alice.johnson@example.com", phone: "456-789-0123", bio: "Enjoys science.", email_confirmed: true, role: "student", password: "password789", class: "4B", performance: "Very Good", attendance: Math.floor(Math.random() * 101) },
  { id: 4, first_name: "Bob", last_name: "Brown", email: "bob.brown@example.com", phone: "654-321-0987", bio: "Aspiring artist.", email_confirmed: false, role: "student", password: "password101", class: "5A", performance: "Average", attendance: Math.floor(Math.random() * 101) },
  { id: 5, first_name: "Eve", last_name: "Davis", email: "eve.davis@example.com", phone: "321-654-9870", bio: "Chess champion.", email_confirmed: true, role: "student", password: "password111", class: "6B", performance: "Excellent", attendance: Math.floor(Math.random() * 101) }
];

const AdminStudentsView = () => {
  const [students, setStudents] = useState(studentsData);
  const [selectedClass, setSelectedClass] = useState("");
  const [displayedStudents, setDisplayedStudents] = useState([]);
  const [editPasswordId, setEditPasswordId] = useState(null);
  const [newPassword, setNewPassword] = useState("");

  const handlePasswordChange = (id) => {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === id ? { ...student, password: newPassword } : student
      )
    );
    setEditPasswordId(null);
    setNewPassword("");
  };

  const handleFetchClassData = () => {
    const filteredStudents = students.filter(student => student.class === selectedClass);
    setDisplayedStudents(filteredStudents);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", maxWidth: "1200px", margin: "auto" }}>
      <Link href="/" passHref>
        <a style={{ textDecoration: "none", color: "white", backgroundColor: "#6c757d", padding: "10px 15px", borderRadius: "5px", display: "inline-block", marginBottom: "20px" }}>
          ← Back
        </a>
      </Link>
      <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>Student Data (Class-wise)</h2>
      
      <div style={{ marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
        <select
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
          style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc", width: "200px" }}
        >
          <option value="">Select a Class</option>
          {Array.from(new Set(students.map(s => s.class))).map(className => (
            <option key={className} value={className}>Class {className}</option>
          ))}
        </select>
        <button
          onClick={handleFetchClassData}
          style={{ padding: "10px 20px", backgroundColor: "#28a745", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
        >
          Fetch Class Data
        </button>
      </div>

      {displayedStudents.length > 0 && (
        <div style={{ marginBottom: "20px" }}>
          <h3 style={{ backgroundColor: "#f4f4f4", padding: "10px", borderRadius: "5px", color: "#333" }}>Class {selectedClass}</h3>
          <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "10px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}>
            <thead>
              <tr style={{ backgroundColor: "#28a745", color: "white" }}>
                <th style={{ padding: "10px", border: "1px solid #ddd" }}>Name</th>
                <th style={{ padding: "10px", border: "1px solid #ddd" }}>Email</th>
                <th style={{ padding: "10px", border: "1px solid #ddd" }}>Phone</th>
                <th style={{ padding: "10px", border: "1px solid #ddd" }}>Email Confirmed</th>
                <th style={{ padding: "10px", border: "1px solid #ddd" }}>Bio</th>
                <th style={{ padding: "10px", border: "1px solid #ddd" }}>Performance</th>
                <th style={{ padding: "10px", border: "1px solid #ddd" }}>Attendance (%)</th>
                <th style={{ padding: "10px", border: "1px solid #ddd" }}>Password</th>
              </tr>
            </thead>
            <tbody>
              {displayedStudents.map(student => (
                <tr key={student.id} style={{ backgroundColor: student.id % 2 === 0 ? "#f9f9f9" : "white" }}>
                  <td style={{ padding: "10px", border: "1px solid #ddd" }}>{`${student.first_name} ${student.last_name}`}</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd" }}>{student.email}</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd" }}>{student.phone || "N/A"}</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd" }}>{student.email_confirmed ? "Yes" : "No"}</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd" }}>{student.bio || "N/A"}</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd" }}>{student.performance}</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd" }}>{student.attendance}%</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                    {editPasswordId === student.id ? (
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <input
                          type="text"
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          style={{ marginRight: "10px", padding: "5px", borderRadius: "3px", border: "1px solid #ccc" }}
                        />
                        <button
                          onClick={() => handlePasswordChange(student.id)}
                          style={{ padding: "5px 10px", backgroundColor: "#218838", color: "white", border: "none", cursor: "pointer", borderRadius: "3px" }}
                        >
                          Save
                        </button>
                      </div>
                    ) : (
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <span>{student.password}</span>
                        <button
                          onClick={() => setEditPasswordId(student.id)}
                          style={{ marginLeft: "10px", padding: "5px 10px", backgroundColor: "#1e7e34", color: "white", border: "none", cursor: "pointer", borderRadius: "3px" }}
                        >
                          Edit
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminStudentsView;