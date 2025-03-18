import React, { useState } from "react";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import { motion } from "framer-motion";
import Link from "next/link";
const Timetable = () => {
	const [school, setSchool] = useState("");
	const [selectedClass, setSelectedClass] = useState("");
	const [selectedDate, setSelectedDate] = useState(new Date());
	const [selectedTime, setSelectedTime] = useState("09:00");
	const [duration, setDuration] = useState("1 Hour");
	const [timetable, setTimetable] = useState([]);

	const handleAddSchedule = (e) => {
		e.preventDefault();
		if (!school || !selectedClass) {
			alert("Please select a school and class.");
			return;
		}

		const newEntry = {
			date: selectedDate.toDateString(),
			time: selectedTime,
			duration: duration,
			school: school,
			class: selectedClass,
		};

		setTimetable([...timetable, newEntry]);
		alert(`Timetable added for ${selectedClass} at ${school}`);
	};

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
				<h2 className="text-center fw-bold">📅 Add Student Timetable</h2>
				<p className="text-center text-muted">
					Select a date and time for the class.
				</p>

				<form onSubmit={handleAddSchedule} className="p-4 border rounded shadow bg-white">
					<div className="row">
						<div className="col-md-6">
							<label className="fw-bold">🏫 Select School</label>
							<select className="form-select" value={school} onChange={(e) => setSchool(e.target.value)} required>
								<option value="">Choose School</option>
								<option value="Greenwood High">Greenwood High</option>
								<option value="St. Peters School">St. Peters School</option>
							</select>
						</div>
						<div className="col-md-6">
							<label className="fw-bold">📚 Select Class</label>
							<select className="form-select" value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)} required>
								<option value="">Choose Class</option>
								<option value="Grade 1">Grade 1</option>
								<option value="Grade 2">Grade 2</option>
							</select>
						</div>
					</div>

					<div className="row mt-3">
						<div className="col-md-6">
							<label>📆 Select Date</label>
							<Calendar onChange={setSelectedDate} value={selectedDate} />
						</div>
						<div className="col-md-6">
							<label>⏰ Select Time</label>
							<TimePicker onChange={setSelectedTime} value={selectedTime} />
						</div>
					</div>

					<div className="mt-3">
						<label>⏳ Select Duration</label>
						<select className="form-select" value={duration} onChange={(e) => setDuration(e.target.value)} required>
							<option value="30 Minutes">30 Minutes</option>
							<option value="1 Hour">1 Hour</option>
							<option value="2 Hours">2 Hours</option>
						</select>
					</div>

					<div className="d-flex justify-content-center mt-4">
						<button type="submit" className="btn btn-success px-4">➕ Add Class</button>
					</div>
				</form>
			</motion.div>

			<Footer />
		</>
	);
};

export default Timetable;
