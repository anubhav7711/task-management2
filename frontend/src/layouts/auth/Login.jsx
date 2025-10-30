import React, { useState, useEffect } from 'react';
import "./login.css";
import login from "../../assets/register/login.png";
import email from "../../assets/register/email.png";
import password from "../../assets/register/password.png";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useToast, Spinner } from '@chakra-ui/react';

function Login() {
  const navigate = useNavigate();
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });

  // Redirect logged-in users away from login page
  useEffect(() => {
    const token = localStorage.getItem('tm_token');
    if (token) {
      navigate('/admin/dashboard'); // redirect if already logged in
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('api/login', formData);
      localStorage.setItem('tm_token', response.data.token); // store token
      navigate('/admin/dashboard'); // redirect to dashboard
    } catch (error) {
      const Error = error.response?.data?.message || "Login failed";
      setFormData({ email: '', password: '' });

      toast({
        title: Error,
        status: 'error',
        position: 'top',
        duration: 5000,
        isClosable: true,
      });

      setLoading(false);
    }
  };

  return (
    <div className='login-main-container'>
      <div className='login-container'>
        <div className='login-left-container'>
          <p className='signup-text'>Sign In</p>
          <form onSubmit={handleSubmit}>
            <div className='input-main-container'>
              <img className='input-icon' src={email} alt="email" />
              <input
                placeholder='Email *'
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className='input-main-container'>
              <img className='input-icon' src={password} alt="password" />
              <input
                placeholder='Password *'
                type='password'
                name='password'
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button className='login-btn' type='submit'>
              {loading ? <Spinner color='white' /> : 'Login'}
            </button>
          </form>
          <p className='account-text'>
            Don’t have an account? <Link to='/register'><span>Sign Up</span></Link>
          </p>
        </div>
        <div className='login-right-container'>
          <img className='login-img' src={login} alt="login" />
        </div>
      </div>
    </div>
  );
}

export default Login;
