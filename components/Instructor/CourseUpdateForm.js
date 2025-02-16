import React, { useState, useEffect } from "react";
import controls from "@/utils/RTEControl";
import dynamic from "next/dynamic";

const RichTextEditor = dynamic(() => import("@mantine/rte"), {
    ssr: false,
    loading: () => null,
});
import axios from "axios";
import { parseCookies } from "nookies";
import baseUrl from "@/utils/baseUrl";
import LoadingSpinner from "@/utils/LoadingSpinner";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import Link from "next/link";

// Import the UploadVideoForm component
import UploadVideoForm from "./UploadVideoForm"; // Adjust the path as necessary
import AddAssetForm from "./UploadAssetForm"; // Import the AddAssetForm
import CourseVideos from "./CourseVideos"; // Import the CourseVideos component
import CourseAssets from "./CourseAssets"; // Import the CourseAssets component
import UploadQuizForm from "./UploadQuizForm"; // Import the UploadQuizForm component... // ✅ Extract courseId

const INITIAL_VALUE = {
    title: "",
    short_desc: "",
    overview: "",
    latest_price: "",
    before_price: "",
    lessons: "",
    duration: "",
    image: "",
    access_time: "",
    requirements: "",
    what_you_will_learn: "",
    who_is_this_course_for: "",
    catId: "",
};

const CourseUpdateForm = ({ courseData }) => {
    const { elarniv_users_token } = parseCookies();
    const [course, setCourse] = useState(INITIAL_VALUE);
    const [disabled, setDisabled] = React.useState(true);
    const [loading, setLoading] = React.useState(false);
    const [categories, setCategories] = useState([]);
    const [imagePreview, setImagePreview] = React.useState("");
    const router = useRouter();

    // State to control the visibility of the UploadVideoForm
    const [showUploadVideoForm, setShowUploadVideoForm] = useState(false);
    const [showAddAssetForm, setShowAddAssetForm] = useState(false);
    const [showUploadQuizForm, setShowUploadQuizForm] = useState(false);
    const [addedVideos, setAddedVideos] = useState([]);
    const [addedAssets, setAddedAssets] = useState([]);
    const [addedQuizzes, setAddedQuizzes] = useState([]);

    useEffect(() => {
        const {
            title,
            short_desc,
            overview,
            latest_price,
            before_price,
            lessons,
            duration,
            image,
            access_time,
            requirements,
            what_you_will_learn,
            who_is_this_course_for,
            catId,
        } = courseData;
        setCourse({
            title,
            short_desc,
            overview,
            latest_price,
            before_price,
            lessons,
            duration,
            image,
            access_time,
            requirements,
            what_you_will_learn,
            who_is_this_course_for,
            catId,
        });
        // console.log(courseData);
    }, [courseData]);

    useEffect(() => {
        const isCourse = Object.values(course).every((el) => Boolean(el));
        isCourse ? setDisabled(false) : setDisabled(true);
    }, [course]);

    useEffect(() => {
        const fetchData = async () => {
            const payload = {
                headers: { Authorization: elarniv_users_token },
            };
            const response = await axios.get(
                `${baseUrl}/api/categories`,
                payload
            );
            setCategories(response.data.categories);
        };
        fetchData();
    }, []);

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        if (name === "image") {
            const image = files[0].size / 1024 / 1024;
            if (image > 2) {
                toast.error(
                    "The photo size greater than 2 MB. Make sure less than 2 MB.",
                    {
                        style: {
                            border: "1px solid #ff0033",
                            padding: "16px",
                            color: "#ff0033",
                        },
                        iconTheme: {
                            primary: "#ff0033",
                            secondary: "#FFFAEE",
                        },
                    }
                );
                e.target.value = null;
                return;
            }
            setCourse((prevState) => ({
                ...prevState,
                image: files[0],
            }));
            setImagePreview(window.URL.createObjectURL(files[0]));
        } else {
            setCourse((prevState) => ({ ...prevState, [name]: value }));
        }
    };

    const handleImageUpload = async () => {
        const data = new FormData();
        data.append("file", course.image);
        data.append("upload_preset", process.env.UPLOAD_PRESETS);
        data.append("cloud_name", process.env.CLOUD_NAME);
        let response;
        if (course.image) {
            response = await axios.post(process.env.CLOUDINARY_URL, data);
        }
        const imageUrl = response.data.url;

        return imageUrl;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            let photo;
            if (course.image) {
                photo = await handleImageUpload();

                photo = photo.replace(/^http:\/\//i, "https://");
            }

            const {
                title,
                short_desc,
                overview,
                latest_price,
                before_price,
                lessons,
                duration,
                access_time,
                requirements,
                what_you_will_learn,
                who_is_this_course_for,
                catId,
            } = course;
            const payloadData = {
                title,
                short_desc,
                overview,
                latest_price,
                before_price,
                lessons,
                duration,
                image: photo,
                access_time,
                requirements,
                what_you_will_learn,
                who_is_this_course_for,
                catId,
            };
            const payloadHeader = {
                headers: { Authorization: elarniv_users_token },
            };

            const url = `${baseUrl}/api/courses/course/${courseData.id}`;
            const response = await axios.put(url, payloadData, payloadHeader);
            setLoading(false);

            toast.success(response.data.message, {
                style: {
                    border: "1px solid #4BB543",
                    padding: "16px",
                    color: "#4BB543",
                },
                iconTheme: {
                    primary: "#4BB543",
                    secondary: "#FFFAEE",
                },
            });

            router.push(`/instructor/courses`);
        } catch (err) {
            // console.log(err);
            let {
                response: {
                    data: { message },
                },
            } = err;
            toast.error(message, {
                style: {
                    border: "1px solid #ff0033",
                    padding: "16px",
                    color: "#ff0033",
                },
                iconTheme: {
                    primary: "#ff0033",
                    secondary: "#FFFAEE",
                },
            });
        } finally {
            setLoading(false);
        }
    };
    const [selectedOption, setSelectedOption] = useState("");
    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
        const courseId = courseData.id; // Access courseId from props

        if (e.target.value === "uploadVideo") {
            setShowUploadVideoForm(true);
            setShowAddAssetForm(false);
            setShowUploadQuizForm(false);
            setSelectedOption("");
        } else if (e.target.value === "assets") {
            setShowAddAssetForm(true);
            setShowUploadVideoForm(false);
            setShowUploadQuizForm(false);
            setSelectedOption("");
        } else if (e.target.value === "quizzes") {
            setShowUploadQuizForm(true);
            setShowUploadVideoForm(false);
            setShowAddAssetForm(false);
            setSelectedOption("");
        } else {
            setShowUploadVideoForm(false);
            setShowAddAssetForm(false);
            setShowUploadQuizForm(false);
        }
    };

    // Function to handle video upload completion
    const handleVideoUploadComplete = (newVideo) => {
        // Add the newly uploaded video to the addedVideos state
        setAddedVideos([...addedVideos, newVideo]);

        // Hide the UploadVideoForm
        setShowUploadVideoForm(false);
    };
    const handleAssetUploadComplete = (newAsset) => {
        // Add the newly uploaded video to the addedVideos state
        setAddedAssets([...addedAssets, newAsset]);

        // Hide the UploadVideoForm
        setShowAddAssetForm(false);
    };
    const handleQuizUploadComplete = (newQuiz) => {
        // Add the newly uploaded video to the addedVideos state
        setAddedQuizzes([...addedQuizzes, newQuiz]);

        // Hide the UploadVideoForm
        setShowUploadQuizForm(false);
    };

    const handleDeleteVideo = (videoId) => {
        // Filter out the video with the matching videoId
        const updatedVideos = addedVideos.filter((video) => video.id !== videoId);
        setAddedVideos(updatedVideos);
    };

    const handleDeleteAsset = (assetId) => {
        // Filter out the asset with the matching assetId
        const updatedAssets = addedAssets.filter((asset) => asset.id !== assetId);
        setAddedAssets(updatedAssets);
    };

    return (
        <div className="container mt-5">
            <div className="mb-4 d-flex justify-content-between align-items-center">
                <h1>Edit Course</h1>
                <Link href="/instructor/courses" className="btn btn-secondary">
                    Back to Courses
                </Link>
            </div>

            <div className="card shadow-sm">
                <div className="card-body p-5">
                    <form onSubmit={handleSubmit}>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="form-label fw-semibold">Course Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Course Title"
                                        name="title"
                                        value={course.title}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="form-label fw-semibold">Lessons</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="5"
                                        name="lessons"
                                        value={course.lessons}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="form-label fw-semibold">Latest Price</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="20"
                                        name="latest_price"
                                        value={course.latest_price}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="form-label fw-semibold">Before Price</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="30"
                                        name="before_price"
                                        value={course.before_price}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="form-label fw-semibold">Duration</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="4 Hours or 2 Weeks"
                                        name="duration"
                                        value={course.duration}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="form-label fw-semibold">Access Time</label>
                                    <select
                                        className="form-select"
                                        name="access_time"
                                        value={course.access_time}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select</option>
                                        <option value="Lifetime">Lifetime</option>
                                        <option value="Three Months">Three Months</option>
                                        <option value="Six Months">Six Months</option>
                                        <option value="1 Year">1 Year</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="form-label fw-semibold">Course Image</label>
                                    <input
                                        type="file"
                                        className="form-control file-control"
                                        name="image"
                                        onChange={handleChange}
                                    />
                                    <div className="form-text">Upload image size 750x500!</div>

                                    <div className="mt-2">
                                        {imagePreview ? (
                                            <img
                                                src={imagePreview}
                                                alt="Image Preview"
                                                style={{ maxWidth: "100px" }}
                                            />
                                        ) : (
                                            <img
                                                src={course.image}
                                                alt="Image Preview"
                                                style={{ maxWidth: "100px" }}
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="form-label fw-semibold">Categories</label>
                                    <select
                                        className="form-select"
                                        name="catId"
                                        value={course.catId}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select</option>
                                        {categories.map((cat) => (
                                            <option key={cat.id} value={cat.id}>
                                                {cat.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="form-group">
                                    <label className="form-label fw-semibold">Short Description</label>
                                    <textarea
                                        className="form-control"
                                        rows="3"
                                        placeholder="Short Description"
                                        name="short_desc"
                                        value={course.short_desc}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="form-group">
                                    <label className="form-label fw-semibold">Overview</label>

                                    <RichTextEditor
                                        controls={controls}
                                        value={course.overview}
                                        onChange={(e) => setCourse((prevState) => ({ ...prevState, overview: e }))}
                                    />
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="form-group">
                                    <label className="form-label fw-semibold">Requirements</label>

                                    <RichTextEditor
                                        controls={controls}
                                        value={course.requirements}
                                        onChange={(e) => setCourse((prevState) => ({ ...prevState, requirements: e }))}
                                    />
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="form-group">
                                    <label className="form-label fw-semibold">What You Will Learn</label>
                                    <RichTextEditor
                                        controls={controls}
                                        value={course.what_you_will_learn}
                                        onChange={(e) => setCourse((prevState) => ({ ...prevState, what_you_will_learn: e }))}
                                    />
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="form-group">
                                    <label className="form-label fw-semibold">Who is this course for</label>
                                    <RichTextEditor
                                        controls={controls}
                                        value={course.who_is_this_course_for}
                                        onChange={(e) => setCourse((prevState) => ({ ...prevState, who_is_this_course_for: e }))}
                                    />
                                </div>
                            </div>

                            <div className="col-12">
                                <button type="submit" className="btn btn-primary" disabled={disabled || loading}>
                                    {loading ? <LoadingSpinner /> : "Update Course"}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="card shadow-sm mt-4">
                <div className="card-body p-5">
                    <h2>Add Course Content</h2>
                    <div className="mb-3">
                        <label className="form-label fw-semibold">Select Content Type:</label>
                        <select className="form-select" value={selectedOption} onChange={handleSelectChange}>
                            <option value="">Select an option</option>
                            <option value="uploadVideo">Upload Video</option>
                            <option value="assets">Add Assets</option>
                            <option value="quizzes">Add Quizzes</option>
                        </select>
                    </div>

                    {showUploadVideoForm && (
                        <UploadVideoForm courseId={courseData.id} onUploadComplete={handleVideoUploadComplete} />
                    )}

                    {showAddAssetForm && (
                        <AddAssetForm courseId={courseData.id} onUploadComplete={handleAssetUploadComplete} />
                    )}

                    {showUploadQuizForm && (
                        <UploadQuizForm courseId={courseData.id} onUploadComplete={handleQuizUploadComplete} />
                    )}
                </div>
            </div>
            {/* Display Added Videos */}
            {addedVideos.length > 0 && (
                <div className="card shadow-sm mt-4">
                    <div className="card-body p-5">
                        <h2>Added Videos</h2>
                        <div className="row">
                            {addedVideos.map((video) => (
                                <CourseVideos
                                    key={video.id}
                                    {...video}
                                    onDelete={handleDeleteVideo}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}
            {/* Display Added Assets */}
            {addedAssets.length > 0 && (
                <div className="card shadow-sm mt-4">
                    <div className="card-body p-5">
                        <h2>Added Assets</h2>
                        <div className="row">
                            {addedAssets.map((asset) => (
                                <CourseAssets
                                    key={asset.id}
                                    {...asset}
                                    onDelete={handleDeleteAsset}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CourseUpdateForm;
