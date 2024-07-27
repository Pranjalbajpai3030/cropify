import React from 'react';
import backgroundImage from './image.jpg'; // Adjust the path if necessary
import { useNavigate } from 'react-router-dom';

const Landing = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/login');
    }
    return (
        <>
            <div className="landing">
                <div className="content">
                    <h1>Welcome to Cropify</h1>
                    <p>
                        Cropify is an application that analyzes crop images and provides suggestions for diseases and recommendations.
                    </p>
                    <button onClick={handleClick}>Get Started</button>
                </div>
            </div>

            <style jsx>{`
                .landing {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    background: url(${backgroundImage}) no-repeat center center;
                    background-size: cover;
                }
                
                .content {
                    text-align: center;
                    background-color: transparent; /* Fully transparent background */
                    padding: 20px;
                    border-radius: 10px;
                }

                h1 {
                    margin-bottom: 20px;
                    font-size: 2.5em;
                    color: white; /* Change text color to white */
                }
                
                p {
                    margin-bottom: 20px;
                    font-size: 1.2em;
                    color: white; /* Change text color to white */
                }
                
                button {
                    padding: 10px 20px;
                    font-size: 1em;
                    background-color: rgba(32, 143, 154, 0.8); /* Increased transparency */
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                }
                
                button:hover {
                    background-color: rgba(32, 143, 154, 1); /* Remove transparency on hover */
                }
            `}</style>
        </>
    );
};

export default Landing;
