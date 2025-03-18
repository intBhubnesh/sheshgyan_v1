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
        const imageUrl = response.data.url; return imageUrl;
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
    const handleQuizUploadComplete = async (quizData) => {
        // Add the newly uploaded video to the addedVideos state
        // setAddedQuizzes([...addedQuizzes, newQuiz]);
        const courseId = courseData.id;
        try {
            // Read existing quizzes from quiz.json
            const response = await axios.get('/api/quizzes');
            const existingQuizzes = response.data;

            // Add the new quiz data to the existing quizzes with courseId as the key
            existingQuizzes[courseId] = quizData;

            // Write the updated quizzes back to quiz.json
            await axios.post('/api/quizzes', existingQuizzes);

            setAddedQuizzes([quizData]); //HERE
            toast.success('Quizzes uploaded successfully!');
        } catch (error) {
            console.error('Error saving quizzes:', error);
            toast.error('Failed to upload quizzes.');
        }


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
    const QuizForm = ({ onQuizUploadComplete, courseId }) => {
        const [questions, setQuestions] = useState([{
            questionText: "",
            questionImage: null, // New: Question image
            questionImagePreview: null, // New: Question image preview
            options: [
                { text: "", image: null, imagePreview: null, isCorrect: false }, //New image field
                { text: "", image: null, imagePreview: null, isCorrect: false },
                { text: "", image: null, imagePreview: null, isCorrect: false },
                { text: "", image: null, imagePreview: null, isCorrect: false }
            ],
        }]);

        const handleAddQuestion = () => {
            setQuestions([
                ...questions,
                {
                    questionText: "",
                    questionImage: null,
                    questionImagePreview: null,
                    options: [
                        { text: "", image: null, imagePreview: null, isCorrect: false },
                        { text: "", image: null, imagePreview: null, isCorrect: false },
                        { text: "", image: null, imagePreview: null, isCorrect: false },
                        { text: "", image: null, imagePreview: null, isCorrect: false }
                    ],
                },
            ]);
        };

        const handleQuestionChange = (index, event) => {
            const newQuestions = [...questions];
            newQuestions[index].questionText = event.target.value;
            setQuestions(newQuestions);
        };

        const handleQuestionImageChange = (index, event) => {
            const { files } = event.target;
            if (files && files[0]) {
                const newQuestions = [...questions];
                newQuestions[index].questionImage = files[0];
                newQuestions[index].questionImagePreview = URL.createObjectURL(files[0]);
                setQuestions(newQuestions);
            }
        };

        const handleOptionChange = (questionIndex, optionIndex, event) => {
            const newQuestions = [...questions];
            newQuestions[questionIndex].options[optionIndex].text = event.target.value;
            setQuestions(newQuestions);
        };

        const handleOptionImageChange = (questionIndex, optionIndex, event) => {
            const { files } = event.target;
            if (files && files[0]) {
                const newQuestions = [...questions];
                newQuestions[questionIndex].options[optionIndex].image = files[0];
                newQuestions[questionIndex].options[optionIndex].imagePreview = URL.createObjectURL(files[0]);
                setQuestions(newQuestions);
            }
        };

        const handleCorrectAnswerChange = (questionIndex, optionIndex) => {
            const newQuestions = [...questions];
            newQuestions[questionIndex].options = newQuestions[questionIndex].options.map((option, index) => ({
                ...option,
                isCorrect: index === optionIndex,
            }));
            setQuestions(newQuestions);
        };

        const handleSubmit = async (e) => {
            e.preventDefault();

            // Function to upload image and return URL
            const uploadImage = async (imageFile) => {
                if (!imageFile) return null;
                const data = new FormData();
                data.append("file", imageFile);
                data.append("upload_preset", process.env.UPLOAD_PRESETS);
                data.append("cloud_name", process.env.CLOUD_NAME);
                const response = await axios.post(process.env.CLOUDINARY_URL, data);
                return response.data.url;
            };

            // Upload images and create quiz data
            const quizData = await Promise.all(
                questions.map(async (question) => {
                    const questionImageUrl = await uploadImage(question.questionImage);
                    const optionsWithImageUrls = await Promise.all(
                        question.options.map(async (option) => {
                            const optionImageUrl = await uploadImage(option.image);
                            return { ...option, image: optionImageUrl };
                        })
                    );

                    return {
                        questionText: question.questionText,
                        questionImage: questionImageUrl,
                        options: optionsWithImageUrls,
                    };
                })
            );

            // Call the callback function with the quiz data
            onQuizUploadComplete(quizData, courseId);
        };

        return (
            <form onSubmit={handleSubmit}>
                {questions.map((question, questionIndex) => (
                    <div key={questionIndex} className="mb-4">
                        <h4 className="mb-3">Question {questionIndex + 1}</h4>

                        {/* Question Text Input */}
                        <div className="mb-3">
                            <label className="form-label">Question Text</label>
                            <input
                                type="text"
                                className="form-control"
                                value={question.questionText}
                                onChange={(event) => handleQuestionChange(questionIndex, event)}
                            />
                        </div>

                        {/* Question Image Upload */}
                        <div className="mb-3">
                            <label className="form-label">Question Image</label>
                            <input
                                type="file"
                                className="form-control"
                                accept="image/*"
                                onChange={(event) => handleQuestionImageChange(questionIndex, event)}
                            />
                            {question.questionImagePreview && (
                                <img
                                    src={question.questionImagePreview}
                                    alt="Question Preview"
                                    style={{ maxWidth: "100px", marginTop: "10px" }}
                                />
                            )}
                        </div>

                        {/* Options */}
                        {question.options.map((option, optionIndex) => (
                            <div key={optionIndex} className="mb-3">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name={`question-${questionIndex}`}
                                        id={`question-${questionIndex}-option-${optionIndex}`}
                                        checked={option.isCorrect}
                                        onChange={() => handleCorrectAnswerChange(questionIndex, optionIndex)}
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor={`question-${questionIndex}-option-${optionIndex}`}
                                    >
                                        Correct Answer
                                    </label>
                                </div>
                                <div className="mb-2">
                                    <label className="form-label">Option {optionIndex + 1} Text</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={option.text}
                                        onChange={(event) => handleOptionChange(questionIndex, optionIndex, event)}
                                    />
                                </div>
                                {/* Option Image Upload */}
                                <div className="mb-3">
                                    <label className="form-label">Option {optionIndex + 1} Image</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        accept="image/*"
                                        onChange={(event) => handleOptionImageChange(questionIndex, optionIndex, event)}
                                    />
                                    {option.imagePreview && (
                                        <img
                                            src={option.imagePreview}
                                            alt={`Option ${optionIndex + 1} Preview`}
                                            style={{ maxWidth: "100px", marginTop: "10px" }}
                                        />
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                ))}

                <button type="button" className="btn btn-secondary" onClick={handleAddQuestion}>
                    Add Question
                </button>
                <button type="submit" className="btn btn-primary">
                    Upload Quizzes
                </button>
            </form>
        );
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                            <label>Course Title</label>
                            <input
                                type="text"
                                className="form-control"
                                name="title"
                                value={course.title}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                            <label>Short Description</label>
                            <textarea
                                name="short_desc"
                                className="form-control"
                                cols="30"
                                rows="3"
                                value={course.short_desc}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                            <label>Course Overview</label>
                            <RichTextEditor
                                controls={controls}
                                value={course.overview}
                                onChange={(e) =>
                                    setCourse((prevState) => ({
                                        ...prevState,
                                        overview: e,
                                    }))
                                }
                            />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                            <label>Latest Price</label>
                            <input
                                type="text"
                                className="form-control"
                                name="latest_price"
                                value={course.latest_price}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                            <label>Before Price</label>
                            <input
                                type="text"
                                className="form-control"
                                name="before_price"
                                value={course.before_price}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                            <label>Lessons</label>
                            <input
                                type="text"
                                className="form-control"
                                name="lessons"
                                value={course.lessons}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                            <label>Duration</label>
                            <input
                                type="text"
                                className="form-control"
                                name="duration"
                                value={course.duration}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                            <label>Access Time</label>
                            <input
                                type="text"
                                className="form-control"
                                name="access_time"
                                value={course.access_time}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                            <label>Category</label>
                            <select
                                className="form-select"
                                name="catId"
                                value={course.catId}
                                onChange={handleChange}
                            >
                                <option value="0">Select A Category</option>
                                {categories.map((cat) => (
                                    <option value={cat.id} key={cat.id}>
                                        {cat.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                            <label>Requirements</label>
                            <RichTextEditor
                                controls={controls}
                                value={course.requirements}
                                onChange={(e) =>
                                    setCourse((prevState) => ({
                                        ...prevState,
                                        requirements: e,
                                    }))
                                }
                            />
                        </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                            <label>What You Will Learn</label>

                            <RichTextEditor
                                controls={controls}
                                value={course.what_you_will_learn}
                                onChange={(e) =>
                                    setCourse((prevState) => ({
                                        ...prevState,
                                        what_you_will_learn: e,
                                    }))
                                }
                            />
                        </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                            <label>Who is this course for</label>
                            <RichTextEditor
                                controls={controls}
                                value={course.who_is_this_course_for}
                                onChange={(e) =>
                                    setCourse((prevState) => ({
                                        ...prevState,
                                        who_is_this_course_for: e,
                                    }))
                                }
                            />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                            <label>Course Image</label>
                            <input
                                type="file"
                                className="form-control-file"
                                name="image"
                                onChange={handleChange}
                                accept="image/*"
                            />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="preview-image">
                            <img
                                src={imagePreview ? imagePreview : course.image}
                                alt="image"
                            />
                        </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                        <button
                            type="submit"
                            className="default-btn"
                            disabled={disabled}
                        >
                            Update Course <span></span>
                            {loading ? <LoadingSpinner /> : ""}
                        </button>
                    </div>
                </div>
            </form>
            <div>
                <h2>Add Content</h2>
                <select value={selectedOption} onChange={handleSelectChange}>
                    <option value="">Select an option</option>
                    <option value="uploadVideo">Upload Video</option>
                    <option value="assets">Add Assets</option>
                    <option value="quizzes">Add Quizzes</option>
                </select>

                {showUploadVideoForm && (
                    <UploadVideoForm
                        courseId={courseData.id}
                        onVideoUploadComplete={handleVideoUploadComplete}
                    />
                )}
                {showAddAssetForm && (
                    <AddAssetForm
                        courseId={courseData.id}
                        onAssetUploadComplete={handleAssetUploadComplete}
                    />
                )}
                {showUploadQuizForm && (
                    <QuizForm
                        courseId={courseData.id}
                        onQuizUploadComplete={handleQuizUploadComplete}
                    />
                )}
            </div>
            <div>
                <h2>Added Videos</h2>
                {addedVideos.length === 0 ? (
                    <p>No videos added yet.</p>
                ) : (
                    <CourseVideos videos={addedVideos} onDelete={handleDeleteVideo} />
                )}
            </div>
            <div>
                <h2>Added Assets</h2>
                {addedAssets.length === 0 ? (
                    <p>No assets added yet.</p>
                ) : (
                    <CourseAssets assets={addedAssets} onDelete={handleDeleteAsset} />
                )}
            </div>
            <div>
    <h2>Added Quizzes</h2>
    {addedQuizzes.length === 0 ? (
        <p>No quizzes added yet.</p>
    ) : (
        addedQuizzes.map((quiz, index) => ( // Map through the quizzes array
            <div key={index}>
                <h3>Quiz {index + 1}</h3>
                {Array.isArray(quiz) ? ( // Check if quiz is an array before mapping
                    quiz.map((question, qIndex) => (
                        <div key={qIndex}>
                            <p>Question: {question.questionText}</p>
                            {question.questionImage && (
                                <img
                                    src={question.questionImage}
                                    alt="Question Image"
                                    style={{ maxWidth: '100px' }}
                                />
                            )}
                            <ul>
                                {question.options.map((option, oIndex) => (
                                    <li key={oIndex}>
                                        {option.text}
                                        {option.image && (
                                            <img
                                                src={option.image}
                                                alt="Option Image"
                                                style={{ maxWidth: '50px' }}
                                            />
                                        )}
                                        ({option.isCorrect ? 'Correct' : 'Incorrect'})
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))
                ) : (
                    <div>
                        <p>Invalid quiz format.</p>
                    </div>
                )}
            </div>
        ))
    )}
</div>

        </>
    );
};

export default CourseUpdateForm;
