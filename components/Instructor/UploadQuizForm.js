import React, { useState } from 'react';
import axios from 'axios';
import baseUrl from '@/utils/baseUrl';
import { parseCookies } from 'nookies';
import toast from 'react-hot-toast';
import LoadingSpinner from "@/utils/LoadingSpinner";


const UploadQuizForm = ({ courseId, onQuizUploadComplete }) => {
    const { elarniv_users_token } = parseCookies();
    const [quizTitle, setQuizTitle] = useState('');
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(false);


    const handleAddQuestion = () => {
        setQuestions([
            ...questions,
            {
                id: Date.now(),
                type: 'text',
                questionText: '',
                questionImage: null,
                options: ['', '', '', ''],
                answer: 0,
            },
        ]);
    };

    const handleQuestionChange = (id, field, value) => {
        setQuestions(
            questions.map((question) =>
                question.id === id ? { ...question, [field]: value } : question
            )
        );
    };

    const handleOptionChange = (questionId, optionIndex, value) => {
        setQuestions(
            questions.map((question) =>
                question.id === questionId
                    ? {
                        ...question,
                        options: question.options.map((option, index) =>
                            index === optionIndex ? value : option
                        ),
                    }
                    : question
            )
        );
    };

    const handleAnswerChange = (questionId, answerIndex) => {
        setQuestions(
            questions.map((question) =>
                question.id === questionId ? { ...question, answer: answerIndex } : question
            )
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {

            const payloadHeader = {
                headers: { Authorization: elarniv_users_token },
            };
            const payloadData = {
                title: quizTitle,
                questions: questions,
                courseId: courseId

            };

            const url = `${baseUrl}/api/courses/course/upload/quiz`;

            const response = await axios.post(url, payloadData, payloadHeader);

            toast.success(response.data.message);
            onQuizUploadComplete({
                id: Date.now(), // Or get the ID from the response if your API returns it
                title: quizTitle,
            });


            // Reset form or redirect
            setQuizTitle('');
            setQuestions([]);

        } catch (error) {
            toast.error('Error uploading quiz');
        } finally {
            setLoading(false);
        }
    };


    return (
        <>

            <form onSubmit={handleSubmit}>

                <div className="form-group">
                    <label className="form-label fw-semibold">Quiz Title</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Quiz Title"
                        value={quizTitle}
                        onChange={(e) => setQuizTitle(e.target.value)}
                    />
                </div>

                <button type="button" className="btn btn-primary" onClick={handleAddQuestion}>
                    Add Question
                </button>

                {questions.map((question, questionIndex) => (
                    <div key={question.id} className="question">
                        <h3>Question {questionIndex + 1}</h3>
                        {/* Question Type (Text/Image) */}
                        <div className="form-group">
                            <label className="form-label fw-semibold">Question Type</label>
                            <select
                                className="form-select"
                                value={question.type}
                                onChange={(e) =>
                                    handleQuestionChange(question.id, 'type', e.target.value)
                                }
                            >
                                <option value="text">Text</option>
                                <option value="image">Image</option>
                            </select>
                        </div>

                        {question.type === 'text' ? (
                            <div className="form-group">
                                <label className="form-label fw-semibold">Question Text</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={question.questionText}
                                    onChange={(e) =>
                                        handleQuestionChange(question.id, 'questionText', e.target.value)
                                    }
                                />
                            </div>
                        ) : (
                            <div className="form-group">
                                <label className="form-label fw-semibold">Upload Image</label>
                                {/*  Implement secure image upload  */}
                                <p>Image upload feature will be added</p>
                            </div>
                        )}

                        {/* Options */}
                        <h4>Options</h4>
                        {question.options.map((option, optionIndex) => (
                            <div key={optionIndex} className="form-group">
                                <label className="form-label fw-semibold">Option {optionIndex + 1}</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={option}
                                    onChange={(e) =>
                                        handleOptionChange(question.id, optionIndex, e.target.value)
                                    }
                                />
                            </div>
                        ))}

                        {/* Answer Selection */}
                        <h4>Answer</h4>
                        <div className="form-group">
                            {question.options.map((option, index) => (
                                <div className="form-check" key={index}>
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name={`answer-${question.id}`}
                                        id={`answer-${question.id}-${index}`}
                                        checked={question.answer === index}
                                        onChange={() => handleAnswerChange(question.id, index)}
                                    />
                                    <label
                                        className="form-check-label fw-semibold"
                                        htmlFor={`answer-${question.id}-${index}`}
                                    >
                                        Option {index + 1}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                <button type="submit" className="btn btn-success">
                    Upload Quiz
                    {loading ? <LoadingSpinner /> : ""}
                </button>
            </form>
        </>

    );
};

export default UploadQuizForm;
