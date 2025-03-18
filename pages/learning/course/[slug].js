import React, { useEffect, useState } from "react";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import StickyBox from "react-sticky-box";
import Player from "@/components/Learning/Player";
import { useRouter } from "next/router";
import baseUrl from "@/utils/baseUrl";
import axios from "axios";
import VideoList from "@/components/Learning/VideoList";
import ProgressManager from "@/components/Learning/ProgressManager";
import CourseOverview from "@/components/Learning/CourseOverview";
import CourseAsset from "@/components/Learning/CourseAsset";
import Image from 'next/image';
import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaArrowRight } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import Sidebar from './Sidebar'; // Import the Sidebar component
config.autoAddCss = false;
import quizData from './quiz.json';
const Pagination = ({ totalPages, currentPage, onPageChange, visitedPages }) => {
    const visiblePages = 6;
    const [startPage, setStartPage] = useState(1);

    useEffect(() => {
        // Adjust startPage when currentPage changes
        let newStartPage = currentPage - Math.floor(visiblePages / 2);
        if (newStartPage < 1) {
            newStartPage = 1;
        } else if (newStartPage + visiblePages - 1 > totalPages) {
            newStartPage = Math.max(1, totalPages - visiblePages + 1);
        }
        setStartPage(newStartPage);
    }, [currentPage, totalPages, visiblePages]);

    const endPage = Math.min(startPage + visiblePages - 1, totalPages);
    const pages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

    const handlePrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    const isPageVisited = (page) => {
        return visitedPages.has(page);
    };


    return (
        <nav aria-label="Page navigation"> 
        <ul 
            className="pagination justify-content-center" 
            style={{
                backgroundColor: '#f0f8ff',
                borderRadius: '25px',
                padding: '8px 12px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            }}
        >


                {/* Previous Button */}
                <li className="page-item">
                    <button
                        className="page-link"
                        onClick={handlePrevious}
                        disabled={currentPage === 1}
                        style={{
                            borderRadius: '50%',
                            padding: '0.5rem 0.75rem',
                            border: '1px solid #007bff',
                            backgroundColor: 'transparent',
                            color: '#007bff',
                            margin: '0 2px',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                </li>

                {/* Page Numbers */}
                {pages.map(page => (
                    <li key={page} className={`page-item ${currentPage === page ? 'active' : ''}`}>
                        <button
                            className="page-link"
                            onClick={() => onPageChange(page)}
                            style={{
                                borderRadius: '50%',
                                width: '36px',
                                height: '36px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: '1px solid #007bff',
                                backgroundColor: isPageVisited(page) ? 'green' : (currentPage === page ? '#007bff' : 'transparent'),
                                color: currentPage === page ? 'white' : '#007bff',
                                margin: '0 2px'
                            }}
                        >
                            {page}
                        </button>
                    </li>
                ))}

                {/* Next Button */}
                <li className="page-item">
                    <button
                        className="page-link"
                        onClick={handleNext}
                        disabled={currentPage === totalPages}
                        style={{
                            borderRadius: '50%',
                            padding: '0.5rem 0.75rem',
                            border: '1px solid #007bff',
                            backgroundColor: 'transparent',
                            color: '#007bff',
                            margin: '0 2px',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </li>
            </ul>
        </nav>
    );
};

const pageContent = [
    {
        type: 'text',
        content: (
            <div>
                <h2>Hello, little stars!</h2>
                <p>Welcome to the world of Wiz Simulator.</p>
                <p>Click on the ➡️ icon on the top right to go to the next level.</p>
                <h3>Learning Objectives:</h3>
                <ul>
                    <li>Describe the Simulator</li>
                    <li>Explain the Blockly and Simulation Environments</li>
                    <li>Describe the applications and working mechanism of the Tri-Colour LED</li>
                    <li>Program the Tri-Colour LED to display various colours</li>
                    <li>Define the concept of sequence</li>
                </ul>
            </div>
        ),
    },
    { type: 'video', videoIndex: 0},
    { type: 'video' , videoIndex: 1},
    { type: 'blockly' },
    { type: 'video',videoIndex: 2},
    { type: 'simulator' },
    { type: 'blockly' },
    {
        type: 'text',
        content: (
            <div>
                <h2>Great Job!</h2>
                <p>In the previous activity, you lit up the Tri-Colour LED with the colour red, followed by green, which means that you lit the colours in a sequence i.e., one after the other to form a pattern.</p>
                <h3>Now, let us understand the concept of sequence.</h3>
                <p>A sequence is an ordered arrangement of things or numbers that come one after another to form a pattern.</p>
                <h3>Examples:</h3>
                <p>1) A rainbow forms a sequence of seven colours.</p>
                <img 
  src="https://tse3.mm.bing.net/th?id=OIP.JmlNAjICaUdLrL8zXLSZCwHaFj&pid=Api&P=0&h=180" 
  alt="Rainbow" 
  width="300" 
  height="200" 
/>

                <p>2) Traffic signals form a sequence of three colours.</p>
                <img 
  src="https://tse1.mm.bing.net/th?id=OIP.k63yG5zKm3k81KSl7rp6dAHaE8&pid=Api&P=0&h=180" 
  alt="Rainbow" 
  width="300" 
  height="200" 
/>

            </div>
        ),
    },
    { type: 'blockly' },
    {
        type: 'quiz',
        content: (
            <div>
               <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            background: "#EAF7FF",
            padding: "20px",
            borderRadius: "10px",
            fontFamily: "Arial, sans-serif",
            width: "90%",
            margin: "auto",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"
        }}>
            {/* Quiz Question Section */}
            <div style={{
                flex: 2,
                background: "white",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)"
            }}>
                <div style={{
                    background: "#D0ECFF",
                    padding: "15px",
                    borderRadius: "10px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <span style={{ fontWeight: "bold", color: "#0078D7", fontSize: "18px" }}>10/13</span>
                    <span style={{ color: "#0078D7", fontWeight: "bold" }}>MCQ</span>
                </div>
                
              
                {/* Quiz Options */}
                <div>
                    {[ "Light Eliminating Device", "Light Emitting Diode", "Light Emission Device", "Light Emission Diode"].map((option, index) => (
                        <button key={index} style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            width: "100%",
                            padding: "12px",
                            borderRadius: "8px",
                            border: "2px solid #00AEEF",
                            background: "white",
                            fontSize: "16px",
                            margin: "10px 0",
                            cursor: "pointer",
                            transition: "0.3s",
                            position: "relative",
                            textAlign: "left"
                        }} onMouseOver={(e) => e.target.style.background = "#00AEEF"}
                           onMouseOut={(e) => e.target.style.background = "white"}>
                            <span style={{
                                width: "30px",
                                height: "30px",
                                background: "#00AEEF",
                                color: "white",
                                borderRadius: "50%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                fontSize: "14px",
                                marginRight: "10px"
                            }}>{index + 1}</span>
                            {option}
                        </button>
                    ))}
                </div>

                {/* Navigation Buttons */}
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "20px",
                    padding: "10px 0",
                    borderTop: "2px solid #D0ECFF"
                }}>
                    
                </div>
            </div>

            {/* Read Me First Section */}
            <div style={{
                flex: 1,
                background: "white",
                padding: "15px",
                borderRadius: "10px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
                marginLeft: "20px"
            }}>
                <h3 style={{ color: "#0078D7", textDecoration: "underline", cursor: "pointer" }}>Read Me First</h3>
                <p><strong>Scenario:</strong> Read the instructions, think and get cracking.</p>
                <div style={{
                    background: "#F2F2F2",
                    padding: "15px",
                    borderRadius: "10px",
                    marginTop: "10px"
                }}>
                    <p style={{ fontWeight: "bold" }}>LEDs are used to display Traffic signal lights.</p>
                    <div style={{
                        width: "50px",
                        height: "70px",
                        background: "linear-gradient(180deg, red, orange)",
                        margin: "10px auto",
                        borderRadius: "5px"
                    }}></div>
                </div>
            </div>
        </div> 
            </div>
        ),
    },
    {
        type: 'quiz',
        content: (
            <div>
                 <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            background: "#EAF7FF",
            padding: "20px",
            borderRadius: "10px",
            fontFamily: "Arial, sans-serif",
            width: "90%",
            margin: "auto",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"
        }}>
            {/* Quiz Question Section */}
            <div style={{
                flex: 2,
                background: "white",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)"
            }}>
                <div style={{
                    background: "#D0ECFF",
                    padding: "15px",
                    borderRadius: "10px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <span style={{ fontWeight: "bold", color: "#0078D7", fontSize: "18px" }}>11/13</span>
                    <span style={{ color: "#0078D7", fontWeight: "bold" }}>MCQ</span>
                </div>
                
                <h2 style={{ color: "#0078D7", marginTop: "15px" }}>
  Fill in the blank. A rainbow forms a sequence of {quizData.answer}.
</h2>
            

                {/* Quiz Options */}
                <div>
                    {[ "seven", "Six", "Nine", "Ten"].map((option, index) => (
                        <button key={index} style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            width: "100%",
                            padding: "12px",
                            borderRadius: "8px",
                            border: "2px solid #00AEEF",
                            background: "white",
                            fontSize: "16px",
                            margin: "10px 0",
                            cursor: "pointer",
                            transition: "0.3s",
                            position: "relative",
                            textAlign: "left"
                        }} onMouseOver={(e) => e.target.style.background = "#00AEEF"}
                           onMouseOut={(e) => e.target.style.background = "white"}>
                            <span style={{
                                width: "30px",
                                height: "30px",
                                background: "#00AEEF",
                                color: "white",
                                borderRadius: "50%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                fontSize: "14px",
                                marginRight: "10px"
                            }}>{index + 1}</span>
                            {option}
                        </button>
                    ))}
                </div>

                {/* Navigation Buttons */}
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "20px",
                    padding: "10px 0",
                    borderTop: "2px solid #D0ECFF"
                }}>
                    
                </div>
            </div>

            {/* Read Me First Section */}
            <div style={{
                flex: 1,
                background: "white",
                padding: "15px",
                borderRadius: "10px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
                marginLeft: "20px"
            }}>
                <h3 style={{ color: "#0078D7", textDecoration: "underline", cursor: "pointer" }}>Read Me First</h3>
                <p><strong>Scenario:</strong> Read the instructions, think and get cracking.</p>
                <div style={{
                    background: "#F2F2F2",
                    padding: "15px",
                    borderRadius: "10px",
                    marginTop: "10px"
                }}>
                    <p style={{ fontWeight: "bold" }}>LEDs are used to display Traffic signal lights.</p>
                    <div style={{
                        width: "50px",
                        height: "70px",
                        background: "linear-gradient(180deg, red, orange)",
                        margin: "10px auto",
                        borderRadius: "5px"
                    }}></div>
                </div>
            </div>
        </div>
            </div>
        ),
    },
    {
        type: 'text',
        content: (
            <div>
                 <img 
  src="https://tse2.mm.bing.net/th?id=OIP.5EgyQWHHgE6wwR3i-gH9VwHaEi&pid=Api&P=0&h=180" 
  alt="Rainbow" 
  width="300" 
  height="200" 
/>
                <p>LED lights are durable and last up to 15 to 17 years with a constant amount of light.</p>
                <p>Unlike other lights, LED never dims with time.</p>
            </div>
        ),
    },
    {
        type: 'text',
        content: (
            <div>
                <h2>Now, it's time to summarize what we have learnt in this session.</h2>
                <ul>
                    <li>A simulator is a program or machine that simulates a real-life situation, which means that it creates a virtual version of it, often for the purpose of instruction or experiment. Example: flight simulator</li>
                    <li>A sequence is an ordered arrangement of things or numbers that come one after another to form a pattern.</li>
                    <li>An LED is a p-n Junction diode.</li>
                    <li>The LED emits light when current flows through it.</li>
                    <li>The LED works on the principle of Electroluminescence. whereby electrical energy is converted into light energy.</li>
                </ul>
                <p>In this session, you have enhanced your problem-solving skills, motor skills, and logical thinking skills by tackling challenges, Tri-Colour LED connections and Blockly programming related to them.</p>
            </div>
        ),
    },
];

const Index = ({ user }) => {
    const [videos, setVideos] = useState([]);
    const [course, setCourse] = useState({});
    const [selectedVideo, setSelectedVideo] = useState("");
    const [active, setActive] = useState("");
    const [contentState, setContentState] = useState("loading");
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const { query: { slug } } = useRouter();
    const [assetCourse, setAssetCourse] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [visitedPages, setVisitedPages] = useState(new Set([1]));  // Track visited pages


    useEffect(() => {
        const fetchCourseData = async () => {
            setIsLoading(true);
            try {
                const url = `${baseUrl}/api/learnings/videos/${slug}`;
                const response = await axios.get(url);
                setVideos(response.data.videos);
                setCourse(response.data.course);
                setAssetCourse(response.data.course);

                if (response.data.videos.length > 0) {
                    setContentState("content");
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                setContentState("error");
            } finally {
                setIsLoading(false);
            }
        };

        fetchCourseData();
    }, [slug]);

    const selectVideo = async (videoId) => {
        try {
            const payload = { params: { userId: user.id, courseId: course.id } };
            const url = `${baseUrl}/api/learnings/video/${videoId}`;
            const response = await axios.get(url, payload);
            const { data: { video } } = response;

            setSelectedVideo(video.video);
            setActive(video.id);
        } catch (err) {
            console.error("Error selecting video:", err);
            console.log(err.response?.data);
        }
    };

    const handleAssetSelect = (assetUrl) => {
        setSelectedVideo(assetUrl);
    };

    const handleOpenSimulator = () => {
        window.open('https://iot-simulator-oame.vercel.app/', '_blank');
    };

    const handleOpenBlockly = () => {
        window.open('https://blockly-editor-3u8a.vercel.app/', '_blank');
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
        setVisitedPages(prevVisitedPages => new Set(prevVisitedPages.add(page)));


        // Open Blockly Editor on page 4
        if (page === 4) {
            handleOpenBlockly();
            return; // Stop further execution
        }

        // Open IoT Simulator on page 6
        if (page === 6) {
            handleOpenSimulator();
            return; // Stop further execution
        }
    };

    const renderContent = () => {
        if (isLoading) {
            return (
                <div className="d-flex justify-content-center">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            );
        }

        if (contentState === "error") {
            return <div className="alert alert-danger">Error: Could not load course data.</div>;
        }

        const contentType = pageContent[currentPage - 1].type;

        switch (contentType) {
            case 'text':
                return (
                    <div className="text-content">
                        {pageContent[currentPage - 1].content}
                    </div>
                );
            case 'video':
                if (videos.length === 0) return <p>No videos available.</p>;
                return (
                    <div className="video-player-container">
                        <Player src={videos[currentVideoIndex % videos.length].video} />
                    </div>
                );
            case 'blockly':
                return (
                    <div className="blockly-editor">
                        <button className="btn btn-info" onClick={handleOpenBlockly}>Open Blockly Editor</button>
                    </div>
                );
            case 'simulator':
                return (
                    <div className="iot-simulator">
                        <button className="btn btn-info" onClick={handleOpenSimulator}>Open IoT Simulator</button>
                    </div>
                );
            case 'quiz':
                return (
                    <div className="quiz-content">
                        {pageContent[currentPage - 1].content}
                    </div>
                );
            default:
                return <p>Unknown content type.</p>;
        }
    };

    return (
        <>
            <Navbar user={user} />

            <div className="video-area py-5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-9 col-md-8">
                            <Pagination
                                totalPages={pageContent.length}
                                currentPage={currentPage}
                                onPageChange={handlePageChange}
                                visitedPages={visitedPages} // Pass visitedPages to Pagination
                            />
                            <div className="video-content">
                                {renderContent()}
                            </div>

                        </div>
                        <div className="col-lg-3 col-md-4">
                            <Sidebar
                                totalPages={pageContent.length}
                                currentPage={currentPage}
                                onPageChange={handlePageChange}
                                visitedPages={visitedPages}
                            />
                            <StickyBox offsetTop={20} offsetBottom={20}>
                                <div className="video-sidebar">
                                    <ProgressManager
                                        videos_count={videos.length}
                                        userId={user.id}
                                        courseId={course.id}
                                        selectedVideo={selectedVideo}
                                        onAssetSelect={handleAssetSelect}
                                    />
                                </div>
                            </StickyBox>
                        </div>
                    </div>
                </div>
            </div>

           
        </>
    );
};

export default Index;
