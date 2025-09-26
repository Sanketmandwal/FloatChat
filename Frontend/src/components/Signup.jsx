import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, User, Mail, Briefcase, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router';
import Header from './Header';
import { AppContext } from '@/context/AppContext';
import { toast } from 'react-toastify';
import axios from 'axios';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [profession, setProfession] = useState('');
    const [otherProfession, setOtherProfession] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const { backendUrl, setToken } = React.useContext(AppContext);
    const professions = [
        'Student',
        'Teacher',
        'Government Official',
        'NGO Worker',
        'Software Developer',
        'Doctor',
        'Engineer',
        'Business Owner',
        'Researcher',
        'Consultant',
        'Other'
    ];



    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const handleProfessionSelect = (prof) => {
        setProfession(prof);
        if (prof !== 'Other') {
            setOtherProfession('');
        }
        setShowDropdown(false);
    };

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const { data } = await axios.post(`${backendUrl}/api/user/signup`, { name, password, email, profession: profession === 'Other' ? otherProfession : profession });
            console.log(data)
            if (data.success) {
                localStorage.setItem('token', data.token);
                setToken(data.token);
                navigate('/');
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    const bubbles = Array.from({ length: 18 }, (_, i) => (
        <div
            key={i}
            className="absolute rounded-full bg-white opacity-10 animate-pulse"
            style={{
                width: `${Math.random() * 25 + 8}px`,
                height: `${Math.random() * 25 + 8}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${Math.random() * 3 + 2}s`
            }}
        />
    ));

    return (
        <>
            <Header />
            <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700">
                {/* Animated Background Waves */}
                <div className="absolute inset-0 z-0">
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
                            <linearGradient id="wave3" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="rgba(168, 85, 247, 0.2)" />
                                <stop offset="100%" stopColor="rgba(59, 130, 246, 0.2)" />
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
                        <path
                            d="M0,600 C300,500 600,450 900,500 C1200,550 1350,450 1440,500 L1440,800 L0,800 Z"
                            fill="url(#wave3)"
                            className="animate-pulse"
                            style={{ animationDelay: '2s', animationDuration: '5s' }}
                        />
                    </svg>
                </div>

                {/* Floating Bubbles */}
                <div className="absolute inset-0 pointer-events-none z-1">
                    {bubbles}
                </div>

                {/* Parallax Sea Creatures */}
                <div className="absolute inset-0 pointer-events-none z-1">
                    <div
                        className="absolute text-blue-300 text-5xl opacity-25 transition-all duration-1000"
                        style={{
                            left: `${Math.sin(mousePos.x * 0.0008) * 60 + 5}%`,
                            top: `${Math.cos(mousePos.y * 0.0008) * 40 + 15}%`
                        }}
                    >
                        🐙
                    </div>
                    <div
                        className="absolute text-teal-300 text-6xl opacity-20 transition-all duration-800"
                        style={{
                            right: `${Math.sin(mousePos.x * 0.0012) * 50 + 10}%`,
                            top: `${Math.cos(mousePos.y * 0.0012) * 35 + 25}%`
                        }}
                    >
                        🦈
                    </div>
                    <div
                        className="absolute text-cyan-300 text-4xl opacity-30 transition-all duration-600"
                        style={{
                            left: `${Math.sin(mousePos.x * 0.0015) * 45 + 60}%`,
                            bottom: `${Math.cos(mousePos.y * 0.0015) * 30 + 20}%`
                        }}
                    >
                        🐢
                    </div>
                    <div
                        className="absolute text-purple-300 text-3xl opacity-25 transition-all duration-900"
                        style={{
                            right: `${Math.sin(mousePos.x * 0.001) * 40 + 70}%`,
                            bottom: `${Math.cos(mousePos.y * 0.001) * 25 + 40}%`
                        }}
                    >
                        🦀
                    </div>
                </div>

                {/* Main Content - Fixed z-index and padding */}
                <div className="relative z-30 flex items-center justify-center min-h-screen p-4 pt-24 pb-8">
                    <div className="w-full max-w-md">
                        {/* Signup Card - Reduced padding and spacing */}
                        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/20 transform hover:scale-105 transition-all duration-500">
                            {/* Header - Reduced spacing */}
                            <div className="text-center mb-6">
                                <div className="text-4xl mb-2 animate-bounce">🌊</div>
                                <h1 className="text-3xl font-bold text-white mb-2 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                                    Join Ocean Portal
                                </h1>
                                <p className="text-blue-200 text-sm">Create your account and dive in</p>
                            </div>

                            {/* Form - Reduced spacing */}
                            <div className="space-y-4">
                                {/* Name Field */}
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <User className="h-4 w-4 text-blue-300" />
                                    </div>
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full pl-10 pr-3 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm group-hover:bg-white/15"
                                        placeholder="Full Name"
                                        required
                                    />
                                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                                </div>

                                {/* Email Field */}
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Mail className="h-4 w-4 text-blue-300" />
                                    </div>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full pl-10 pr-3 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm group-hover:bg-white/15"
                                        placeholder="Email Address"
                                        required
                                    />
                                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                                </div>

                                {/* Password Field */}
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <span className="text-blue-300 text-lg">🔐</span>
                                    </div>
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full pl-10 pr-10 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm group-hover:bg-white/15"
                                        placeholder="Password"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-blue-300 hover:text-white transition-colors duration-200"
                                    >
                                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                    </button>
                                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                                </div>

                                {/* Profession Dropdown */}
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                                        <Briefcase className="h-4 w-4 text-blue-300" />
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => setShowDropdown(!showDropdown)}
                                        className="w-full pl-10 pr-10 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm group-hover:bg-white/15 text-left"
                                    >
                                        <span className={profession ? 'text-white' : 'text-blue-200'}>
                                            {profession || 'Select Profession'}
                                        </span>
                                    </button>
                                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                        <ChevronDown className={`h-4 w-4 text-blue-300 transition-transform duration-200 ${showDropdown ? 'rotate-180' : ''}`} />
                                    </div>
                                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                                    {/* Dropdown Options */}
                                    {showDropdown && (
                                        <div className="absolute top-full left-0 right-0 mt-2 bg-white/15 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl z-50 max-h-48 overflow-y-auto">
                                            {professions.map((prof) => (
                                                <button
                                                    key={prof}
                                                    onClick={() => handleProfessionSelect(prof)}
                                                    className="w-full px-3 py-2 text-left text-white hover:bg-white/10 transition-colors duration-200 first:rounded-t-xl last:rounded-b-xl text-sm"
                                                >
                                                    {prof}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Other Profession Field (shows when "Other" is selected) */}
                                {profession === 'Other' && (
                                    <div className="relative group animate-fadeIn">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <span className="text-blue-300 text-lg">✏️</span>
                                        </div>
                                        <input
                                            type="text"
                                            value={otherProfession}
                                            onChange={(e) => setOtherProfession(e.target.value)}
                                            className="w-full pl-10 pr-3 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm group-hover:bg-white/15"
                                            placeholder="Please specify your profession"
                                            required
                                        />
                                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                                    </div>
                                )}

                                {/* Terms & Conditions */}
                                <div className="flex items-start text-xs">
                                    <input type="checkbox" className="mt-0.5 mr-2 accent-cyan-400" required />
                                    <label className="text-blue-200 leading-relaxed">
                                        I agree to the{' '}
                                        <a href="#" className="text-cyan-300 hover:text-white transition-colors underline-offset-4 hover:underline">
                                            Terms & Conditions
                                        </a>{' '}
                                        and{' '}
                                        <a href="#" className="text-cyan-300 hover:text-white transition-colors underline-offset-4 hover:underline">
                                            Privacy Policy
                                        </a>
                                    </label>
                                </div>

                                {/* Submit Button */}
                                <button
                                    onClick={handleSubmit}
                                    disabled={isLoading}
                                    className={`w-full py-3 px-6 rounded-xl font-semibold text-white text-base transition-all duration-300 relative overflow-hidden group ${isLoading
                                        ? 'bg-gray-600 cursor-not-allowed'
                                        : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0'
                                        }`}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="relative flex items-center justify-center">
                                        {isLoading ? (
                                            <>
                                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                                                Creating Account...
                                            </>
                                        ) : (
                                            <>
                                                <span className="mr-2">🚀</span>
                                                Create Account
                                            </>
                                        )}
                                    </div>
                                    <div className="absolute inset-0 rounded-xl bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                                </button>
                            </div>

                            {/* Login Link */}
                            <div className="text-center mt-6">
                                <p className="text-blue-200 text-sm">
                                    Already have an account?{' '}
                                    <button onClick={() => { navigate('/login') }} href="#" className="text-cyan-300 hover:text-white transition-colors underline-offset-4 hover:underline font-semibold">
                                        Sign In
                                    </button>
                                </p>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="text-center mt-6">
                            <p className="text-blue-300 text-xs">
                                🌊 Powered by Ocean Waves • Privacy Policy • Terms
                            </p>
                        </div>
                    </div>
                </div>

                {/* Floating Particles */}
                <div className="absolute inset-0 pointer-events-none z-1">
                    {Array.from({ length: 25 }, (_, i) => (
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

                <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
            </div>
        </>
    );
};

export default Signup;
