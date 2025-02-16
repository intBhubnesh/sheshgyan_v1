import baseUrl from "@/utils/baseUrl";
import axios from "axios";
import React, { useEffect, useState } from "react";

const CourseAsset = ({ id: courseId, vertical = false, onAssetSelect }) => { // Added onAssetSelect prop
    const [assets, setAssets] = useState([]);

    useEffect(() => {
        const fetchAssets = async () => {
            const url = `${baseUrl}/api/assets/${courseId}`;
            try {
                const response = await axios.get(url);
                setAssets(response.data.assets);
            } catch (error) {
                console.error("Error fetching assets:", error);
            }
        };

        fetchAssets();
    }, [courseId]);

    // Function to handle asset click
    const handleAssetClick = (asset) => {
        if (asset.type === 'image') {
            console.log("Selecting image:", asset.lecture_file); // Log the image URL
            onAssetSelect(asset.lecture_file); // Call the function to set the image in Player
        } else {
            window.open(asset.lecture_file, '_blank'); // Open other types in a new tab
        }
    };


    return (
        <div className="course-assets">
            <div className="card shadow-lg rounded-lg p-5 bg-light">
                <div className="d-flex align-items-center mb-4">
                    <div className="icon-wrapper mr-3">
                        <i className="bx bx-folder-open bx-sm" style={{ fontSize: '1.5rem', color: '#5e72e4' }}></i>
                    </div>
                    <h4 className="card-title mb-0">Course Resources</h4>
                </div>

                <div className={`asset-list ${vertical ? 'vertical' : 'horizontal'}`}>
                    {assets.length > 0 ? (
                        assets.map((asset) => (
                            <div className="asset-item" key={asset.id}>
                                <div className="card asset-card h-100 border-0 shadow-sm rounded-lg">
                                    <div className="card-body text-center">
                                        <i
                                            className="bx bxs-file-doc bx-md mb-3"
                                            style={{ fontSize: '3rem', color: '#5e72e4' }}
                                        ></i>
                                        <h6 className="card-title font-weight-bold">{asset.lecture_name}</h6>
                                        <p className="text-muted mb-3">Click the asset to view.</p>
                                        <button
                                            className="btn btn-primary mt-3"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleAssetClick(asset);
                                            }}
                                        >
                                            View Asset
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-12 text-center">
                            <p className="text-muted">No resources available for this course yet.</p>
                        </div>
                    )}
                </div>
            </div>

            <style jsx>{`
				.asset-list {
					display: flex;
					flex-direction: ${vertical ? 'column' : 'row'};
					gap: ${vertical ? '20px' : '30px'};
				}

				.asset-item {
					width: ${vertical ? '100%' : 'auto'};
				}

				.asset-card {
					background-color: #ffffff;
					border-radius: 10px;
					box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
					padding: 20px;
					text-align: center;
					transform: translateY(0);
					transition: transform 0.2s ease-in-out;
				}

				.asset-card:hover {
					transform: translateY(-5px);
					box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
				}

				.btn-primary {
					background-color: #5e72e4;
					color: white;
					border-radius: 5px;
					padding: 10px 20px;
					font-weight: bold;
					border: none;
					cursor: pointer;
				}

				.btn-primary:hover {
					background-color: #42529f;
				}
			`}</style>
        </div>
    );
};

export default CourseAsset;
