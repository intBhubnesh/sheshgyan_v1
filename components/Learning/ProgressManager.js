import React, { useEffect, useState } from "react";
import { progress } from "@/utils/helper";
import baseUrl from "@/utils/baseUrl";
import axios from "axios";
import { useRouter } from "next/router";
import CourseAsset from "./CourseAsset";

const ProgressManager = ({ userId, courseId, videos_count, selectedVideo }) => {
    const [pro, setPro] = useState(0);
    const router = useRouter();
    const [showAsset, setShowAsset] = useState(false); // State to control asset display

    useEffect(() => {
        if (courseId) {
            const fetchProgress = async () => {
                const payload = {
                    params: { userId: userId, courseId: courseId },
                };
                const url = `${baseUrl}/api/learnings/progress`;
                const response = await axios.get(url, payload);
                setPro(response.data.courseProgress.length);
            };

            fetchProgress();
        }
    }, [courseId, selectedVideo]);

    const handleOpenSimulator = () => {
        window.open(
            `https://iot-simulator-oame.vercel.app/?returnUrl=${encodeURIComponent(window.location.href)}`,
            "_blank"
        );
    };

    const handleOpenBlockly = () => {
        window.open(
            `https://blockly-editor.vercel.app/?returnUrl=${encodeURIComponent(window.location.href)}`,
            "_blank"
        );
    };

    const handleViewAsset = () => {
        setShowAsset(true); // Show the asset display
    };

    const handleCloseAsset = () => {
        setShowAsset(false); // Hide the asset display
    };

    return (
        <div className="progress-manager mb-5">
            {/* Progress Card */}
            <div className="card shadow-lg rounded-lg p-5 bg-white">
                <div className="d-flex align-items-center mb-4">
                    <div className="icon-wrapper mr-3">
                        <i className="bx bx-trending-up bx-sm" style={{ fontSize: '1.5rem', color: '#664de5' }}></i>
                    </div>
                    <h4 className="card-title mb-0" style={{ color: '#343a40', fontWeight: '600' }}>Course Progress</h4>
                </div>

                <p className="mb-3 text-muted">
                    You have completed <strong>{pro}</strong> of <strong>{videos_count + 2}</strong> steps. Keep up the
                    good work!
                </p>

                <div className="progress" style={{ height: '12px', borderRadius: '0.75rem', overflow: 'hidden' }}>
                    <div
                        className="progress-bar bg-gradient-primary"
                        role="progressbar"
                        style={{
                            width: `${progress(pro, videos_count + 2)}%`,
                            borderRadius: '0.75rem',
                            backgroundColor: '#664de5' // Consistent color
                        }}
                        aria-valuenow={progress(pro, videos_count + 2)}
                        aria-valuemin="0"
                        aria-valuemax="100"
                    >
                        {progress(pro, videos_count + 2)}%
                    </div>
                </div>

                {/* Next Steps Section */}
                {pro === videos_count && (
                    <div className="mt-5 text-center">
                        <h5 className="mb-3" style={{ color: '#343a40', fontWeight: '600' }}>Next Steps</h5>
                        <p className="text-muted">Enhance your learning with these tools:</p>
                        <div className="d-flex flex-column align-items-center"> {/* Vertical Alignment */}
                            <button
                                onClick={handleOpenSimulator}
                                className="btn btn-primary btn-lg mx-2 mb-3" // Added mb-3 for spacing
                                style={{
                                    padding: "12px 24px",
                                    fontWeight: "600",
                                    borderRadius: '0.5rem',
                                    backgroundColor: '#664de5',
                                    borderColor: '#664de5',
                                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                    transition: 'all 0.2s ease-in-out',
                                    color: 'white',
                                    width: '250px' // Set a fixed width
                                }}
                                onMouseOver={(e) => {
                                    e.target.style.backgroundColor = '#5538dc';
                                    e.target.style.borderColor = '#5538dc';
                                }}
                                onMouseOut={(e) => {
                                    e.target.style.backgroundColor = '#664de5';
                                    e.target.style.borderColor = '#664de5';
                                }}
                            >
                                <i className="bx bx-chip mr-2"></i> IoT Simulator
                            </button>
                            <button
                                onClick={handleOpenBlockly}
                                className="btn btn-warning btn-lg mx-2"
                                style={{
                                    padding: "12px 24px",
                                    fontWeight: "600",
                                    borderRadius: '0.5rem',
                                    backgroundColor: '#ffc107',
                                    borderColor: '#ffc107',
                                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                    transition: 'all 0.2s ease-in-out',
                                    color: '#212529',
                                    width: '250px' // Set a fixed width
                                }}
                                onMouseOver={(e) => {
                                    e.target.style.backgroundColor = '#e0a800';
                                    e.target.style.borderColor = '#e0a800';
                                }}
                                onMouseOut={(e) => {
                                    e.target.style.backgroundColor = '#ffc107';
                                    e.target.style.borderColor = '#ffc107';
                                }}
                            >
                                <i className="bx bx-code-block mr-2"></i> Blockly Editor
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Course Assets Section */}
            <div className="mt-5">
                <h5 className="mb-3" style={{ color: '#343a40', fontWeight: '600' }}>Course Assets</h5>
                {!showAsset ? (
                    <>
                        <button onClick={handleViewAsset} className="btn btn-info">
                            View Assets
                        </button>
                    </>
                ) : (
                    <>
                        <button onClick={handleCloseAsset} className="btn btn-secondary mb-3">
                            Hide Assets
                        </button>
                        <CourseAsset id={courseId} vertical={true} />
                    </>
                )}
            </div>
        </div>
    );
};

export default ProgressManager;
