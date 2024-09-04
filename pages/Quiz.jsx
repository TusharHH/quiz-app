import { useState } from 'react';
import {Link} from 'react-router-dom';
import Timer from '../components/Timer';
import CardFlip from '../components/Card';

import './Quiz.css'

const QuizComponent = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [timerKey, setTimerKey] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);

    const questions = [
        { question: "Flames", answer: "Sholay" },
        { question: "Life will not come again", answer: "Zindagi na milegi dobara" },
        { question: "Tomorrow may not be", answer: "Kal ho na ho" },
        { question: "From the Heart", answer: "Dil se" },
        { question: "Tax", answer: "Lagaan" },
        { question: "A Sweet", answer: "Barfi" },
        { question: "Blind Tune", answer: "Andhadhun" },
        { question: "Agree", answer: "Raazi" },
        { question: "As long as life is there", answer: "jab tak hai jaan" },
        { question: "The Heart Desires", answer: "Dil Chahta Hai" },
        { question: "Naughty", answer: "Chhichhore" },
        { question: "Air air", answer: "Hawa Hawai" },
        { question: "Truth Goodness Beauty", answer: "Satyam Shivam Sundaram" },
        { question: "Cut Kite", answer: "Kati Patang" },
        { question: "Tongue", answer: "Zubaan" },
        { question: "The Youth is crazy", answer: "Yeh Jawaani Hai Deewani" },
        { question: "Say Love", answer: "Kaho na Pyaar hai" },
        { question: "Something Happens", answer: "Kuch Kuch hota hai" },
        { question: "Air Creature", answer: "Hawaizada" },
        { question: "Let the heart beat", answer: "Dil Dhadkne Do" },
        { question: "Achieved Goal", answer: "Siddhartha" },
        { question: "Rich", answer: "Raaes" },
        { question: "Sour Sweet", answer: "Khatta Meetha" },
        { question: "Know or not know", answer: "Jaane tu ya jaane na" },
        { question: "Found Someone", answer: "Koi Mil gaya" },
        { question: "Foreign Land", answer: "Pardes" },
        { question: "Secret", answer: "Raaz" },
        { question: "Traitor", answer: "Deshdrohi" },
        { question: "Friendship", answer: "Dostana" },
        { question: "King of India", answer: "Raja Hindustani" },
        { question: "Sneakily", answer: "Chupke chupke" },
        { question: "Ancient City", answer: "Mohenjo Daro" },
        { question: "Lovers with hearts will take the bride", answer: "Dilwale dulhania le jayenge" },
        { question: "Cut and mix", answer: "Katti batti" },
        { question: "Meeting", answer: "Sangam" },
        { question: "Blank paper", answer: "Kora kagaz" },
        { question: "Royal Warrior", answer: "Rajput" },
        { question: "Wife and queen", answer: "Bahu Begam" },
        { question: "Blast", answer: "Dhoom" },
        { question: "Politics", answer: "Raajneeti" },
        { question: "Fearless", answer: "Dabangg" },
        { question: "The heart's", answer: "Dilwale" },
        { question: "Splash", answer: "Chhapaak" },
    ];


    const handleNextQuestion = () => {
        setIsFlipped(false);
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setTimerKey(timerKey + 1);
            setIsPaused(false);
        } else {
            alert('Quiz Finished!');
        }
    };

    const handleTimeUp = () => {
        // alert('Time is up!');
    };

    const handlePauseResumeTimer = () => {
        setIsPaused(!isPaused);
    };

    return (
        <>
            <div className="w-full h-[100vh] bg-yellow-300 flex items-center justify-center p-5">
                {/* blue container */}
                <div className='bg-sky-300 h-full w-full flex items-center justify-center border-4 border-black rounded-3xl p-5'>
                    {/* second yellow container  */}
                    <div className='bg-yellow-300 border-black border-4 h-full w-full rounded-3xl p-5'>
                        {/* content container  */}
                        <div className=' bg-white h-full w-full border-black  border-4 rounded-3xl flex flex-col justify-center items-center'>
                            <ul className="flex gap-10 my-12">
                                <Link to="/wall">
                                <li className="text-xl font-bold bg-gray-200 px-8 py-4 rounded-2xl hover:scale-105 hover:shadow-lg duration-300 cursor-pointer">Gratitude Wall</li>
                                </Link>
                                <li className="text-xl font-bold bg-yellow-200 px-8 py-4 rounded-2xl hover:scale-105 hover:shadow-lg duration-300 cursor-pointer">Quiz</li>
                            </ul>
                            <div className='quiz-container p-10 bg-slate-400'>
                                <h1>Your Quiz</h1>
                                <Timer onTimeUp={handleTimeUp} keyProp={timerKey} isPaused={isPaused} />
                                <CardFlip
                                    question={questions[currentQuestionIndex].question}
                                    answer={questions[currentQuestionIndex].answer}
                                    isFlipped={isFlipped}
                                    setIsFlipped={setIsFlipped}
                                />
                                <div className='button-group'>
                                    <button onClick={handleNextQuestion}>Next</button>
                                    <button onClick={handlePauseResumeTimer}>
                                        {isPaused ? 'Resume Timer' : 'Pause Timer'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default QuizComponent;
