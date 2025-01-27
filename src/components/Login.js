import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './From.css';
import bg from '../components/bag.jpg'; // Adjust the path if needed

const Login = (props) => {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/api/auth/signin", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: credentials.email, password: credentials.password })
            });

            const json = await response.json();
            console.log("Response from server:", json);

            if (json.msg==="success") {
                localStorage.setItem('auth-token', json.authToken); 
                navigate("/home");
            } else {
                alert(json.error || "Invalid credentials");
            }
        } catch (error) {
            console.error("Error during login:", error);
        }
    };

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    return (
        <div className="form-container" style={{ backgroundImage: `url(${bg})` }}>
            <form className="form" onSubmit={handleSubmit}>
                <div className="header">Login</div>
                <div className="inputs">
                    <input 
                        placeholder="Email" 
                        className="input" 
                        type="email" 
                        value={credentials.email} 
                        onChange={onChange} 
                        id="email" 
                        name="email" 
                        aria-describedby="emailHelp" 
                    />
                    <input 
                        placeholder="Password" 
                        className="input" 
                        type="password" 
                        value={credentials.password} 
                        onChange={onChange} 
                        name="password" 
                        id="password" 
                    />
                    <div className="checkbox-container">
                        <label className="checkbox">
                            <input type="checkbox" id="checkbox" />
                        </label>
                        <label htmlFor="checkbox" className="checkbox-text">Remember me</label>
                    </div>
                    <button className="login-btn" type="submit">Submit</button>
                    <Link className="forget" to="#">Forget password?</Link>
                    <p className="signup-link">Don't have an account? <Link to="/signup">Sign up</Link></p>
                </div>
            </form>
        </div>
    );
};

export default Login;
