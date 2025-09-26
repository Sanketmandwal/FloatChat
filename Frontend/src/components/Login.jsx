import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router';
import Header from './Header';
import { AppContext } from '@/context/AppContext';
import { toast } from 'react-toastify';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();
  const { backendUrl, setToken } = useContext(AppContext);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const response = await axios.post(`${backendUrl}/api/user/login`, { password, email });
      const data = response.data;

      if (data.success) {
        localStorage.setItem('token', data.token);
        setToken(data.token);
        navigate('/');
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const bubbles = Array.from({ length: 15 }, (_, i) => (
    <div
      key={i}
      className="absolute rounded-full bg-white opacity-10 animate-pulse"
      style={{
        width: `${Math.random() * 20 + 10}px`,
        height: `${Math.random() * 20 + 10}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
        animationDuration: `${Math.random() * 3 + 2}s`
      }}
    />
  ));

  return (
    <>
      <Header />
      <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700">
        {/* Animated Background Waves */}
        <div className="absolute inset-0">
          <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="none">
            <defs>
              <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(34, 197, 94, 0.3)" />
                <stop offset="100%" stopColor="rgba(59, 130, 246, 0.3)" />
              </linearGradient>
              <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(14, 165, 233, 0.4)" />
                <stop offset="100%" stopColor="rgba(6, 182, 212, 0.4)" />
              </linearGradient>
            </defs>
            <path
              d="M0,400 C320,300 420,200 740,250 C1080,300 1200,400 1440,300 L1440,800 L0,800 Z"
              fill="url(#wave1)"
              className="animate-pulse"
              style={{ animationDuration: '4s' }}
            />
            <path
              d="M0,500 C360,400 480,350 800,400 C1120,450 1280,350 1440,400 L1440,800 L0,800 Z"
              fill="url(#wave2)"
              className="animate-pulse"
              style={{ animationDelay: '1s', animationDuration: '3s' }}
            />
          </svg>
        </div>

        {/* Floating Bubbles */}
        <div className="absolute inset-0 pointer-events-none">
          {bubbles}
        </div>

        {/* Parallax Fish */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute text-blue-300 text-6xl opacity-20 transition-all duration-1000"
            style={{
              left: `${Math.sin(mousePos.x * 0.001) * 50 + 10}%`,
              top: `${Math.cos(mousePos.y * 0.001) * 30 + 20}%`
            }}
          >
            🐠
          </div>
          <div
            className="absolute text-teal-300 text-4xl opacity-30 transition-all duration-700"
            style={{
              right: `${Math.sin(mousePos.x * 0.002) * 40 + 15}%`,
              top: `${Math.cos(mousePos.y * 0.002) * 25 + 40}%`
            }}
          >
            🐟
          </div>
          <div
            className="absolute text-cyan-300 text-5xl opacity-25 transition-all duration-500"
            style={{
              left: `${Math.sin(mousePos.x * 0.0015) * 30 + 70}%`,
              bottom: `${Math.cos(mousePos.y * 0.0015) * 20 + 30}%`
            }}
          >
            🦑
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
          <div className="w-full max-w-md">
            {/* Login Card */}
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 transform hover:scale-105 transition-all duration-500">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="text-6xl mb-4 animate-bounce">🌊</div>
                <h1 className="text-4xl font-bold text-white mb-2 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                  Ocean Portal
                </h1>
                <p className="text-blue-200">Dive into your account</p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Field */}
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="text-blue-300 text-xl">📧</span>
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-14 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm group-hover:bg-white/15"
                    placeholder="Email Address"
                    autoComplete="email"
                    required
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>

                {/* Password Field */}
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="text-blue-300 text-xl">🔐</span>
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-14 pr-14 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm group-hover:bg-white/15"
                    placeholder="Password"
                    autoComplete="current-password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-blue-300 hover:text-white transition-colors duration-200"
                  >
                    <span className="text-xl">{showPassword ? '👁️' : '👁️‍🗨️'}</span>
                  </button>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center text-blue-200 cursor-pointer hover:text-white transition-colors">
                    <input type="checkbox" className="mr-2 accent-cyan-400" />
                    Remember me
                  </label>
                  <button type="button" className="text-cyan-300 hover:text-white transition-colors underline-offset-4 hover:underline">
                    Forgot password?
                  </button>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-4 px-6 rounded-2xl font-semibold text-white text-lg transition-all duration-300 relative overflow-hidden group ${
                    isLoading
                      ? 'bg-gray-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0'
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center">
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                        Diving In...
                      </>
                    ) : (
                      <>
                        <span className="mr-2">🚀</span>
                        Sign In
                      </>
                    )}
                  </div>
                  <div className="absolute inset-0 rounded-2xl bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
              </form>

              {/* Sign Up Link */}
              <div className="text-center mt-8">
                <p className="text-blue-200">
                  New to Ocean Portal?{' '}
                  <button 
                    type="button" 
                    onClick={() => navigate("/signup")} 
                    className="text-cyan-300 hover:text-white transition-colors underline-offset-4 hover:underline font-semibold"
                  >
                    Create Account
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 20 }, (_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-300 rounded-full opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 4 + 3}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <style jsx="true">{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }
        `}</style>
      </div>
    </>
  );
};

export default Login;