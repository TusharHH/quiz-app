import { useState, useEffect, useRef } from 'react';
import './styles/Timer.css';

const Timer = ({ onTimeUp, keyProp, isPaused }) => {
    const [timeLeft, setTimeLeft] = useState(30);
    const intervalRef = useRef(null);

    useEffect(() => {
        resetTimer();
        return () => clearInterval(intervalRef.current);
    }, [keyProp]);

    useEffect(() => {
        if (!isPaused) {
            startTimer();
        } else {
            clearInterval(intervalRef.current);
        }
        return () => clearInterval(intervalRef.current);
    }, [isPaused]);

    const startTimer = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime <= 1) {
                    clearInterval(intervalRef.current);
                    onTimeUp();
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);
    };

    const resetTimer = () => {
        clearInterval(intervalRef.current);
        setTimeLeft(30);
        if (!isPaused) startTimer();
    };

    const getBarColor = () => {
        if (timeLeft <= 10) return '#ff0000'; 
        if (timeLeft <= 20) return '#ffff00'; 
        return '#007bff'; 
    };

    return (
        <>
            <div className="timer-container">
                <div
                    className="timer-bar"
                    style={{ 
                        width: `${(timeLeft / 30) * 100}%`,
                        backgroundColor: getBarColor(),
                        transition: 'width 1s linear, background-color 0.5s ease'
                    }}
                />
            </div>
            <h1>Time: {timeLeft}</h1>
        </>
    );
};

export default Timer;
