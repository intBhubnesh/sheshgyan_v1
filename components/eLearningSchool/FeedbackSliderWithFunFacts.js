import React, { useState, useEffect } from "react"; 
import { motion } from "framer-motion";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import axios from "axios";
import baseUrl from "@/utils/baseUrl";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const FeedbackSliderWithFunFacts = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const fetchTests = async () => {
      const url = `${baseUrl}/api/testimonials`;
      const response = await axios.get(url);
      setTestimonials(response.data.testimonials);
    };
    fetchTests();
  }, []);

  // Student Growth Analytics Data with Achievements
  const growthData = {
    labels: ["Class 3", "Class 4", "Class 5", "Class 6", "Class 7"],
    datasets: [
      {
        label: "Student Growth (%)",
        data: [0, 20, 45, 70, 100],
        borderColor: "#007BFF",
        backgroundColor: "rgba(0, 123, 255, 0.2)",
        pointRadius: 6,
        pointBackgroundColor: "#007BFF",
        pointBorderColor: "#fff",
        fill: true,
      },
    ],
  };

  const growthOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const achievements = [
              "IoT",
              "Robotics",
              "Python",
              "Advanced Python",
              "Web Development",
            ];
            return `${context.raw}% - ${achievements[context.dataIndex]}`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials]);

  return (
    <div style={styles.container}>
      <div style={styles.innerContainer}>
        {/* Growth Chart on Left */}
        <motion.div
          style={styles.chartContainer}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 style={styles.chartTitle}>📈 Student Growth Over Time</h3>
          <p style={styles.chartDescription}>
            Our students show consistent improvement as they progress through classes.
          </p>
          <div style={{ height: "250px" }}>
            <Line data={growthData} options={growthOptions} />
          </div>
        </motion.div>

        {/* Student Photo on Right */}
        <motion.div
          style={styles.photoContainer}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src="https://www.competitionsciences.org/wp-content/uploads/2019/03/generic-first-place-cropped.jpg"
            alt="Student"
            style={styles.studentPhoto}
          />
        </motion.div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    background: "#ffffff", // Changed from yellow to white
    color: "#333",
    padding: "80px 20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  },
  innerContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "40px",
    maxWidth: "1200px",
    width: "100%",
    alignItems: "center",
  },
  chartContainer: {
    background: "#f9f9f9",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
  },
  chartTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "10px",
  },
  chartDescription: {
    color: "#555",
    textAlign: "center",
    marginBottom: "20px",
  },
  photoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  studentPhoto: {
    width: "100%",
    maxWidth: "400px",
    borderRadius: "10px",
    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
  },
};

export default FeedbackSliderWithFunFacts;
