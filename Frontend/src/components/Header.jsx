import React, { useEffect, useState, useRef } from 'react'
import { Waves, Sparkles, ChevronRight, Menu, X, User, LogOut, Settings } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '@/context/AppContext';

const Header = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { token, setToken, userData } = useContext(AppContext);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsProfileDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const navItems = [
        { name: 'Chatbot', href: '/chatbot' },
        { name: 'Maps', href: '/map' },
        { name: 'About', href: '/about' },
        { name: 'Contact Us', href: '/contact' },
    ];

    const handleLogout = () => {
        setToken('');
        localStorage.removeItem('token'); 
        setIsProfileDropdownOpen(false);
        navigate('/');
    };

    const getInitials = (name) => {
        return name?.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2) || 'U';
    };

    const getGradientColor = (name) => {
        const colors = [
            'from-purple-500 to-pink-500',
            'from-blue-500 to-cyan-500',
            'from-green-500 to-emerald-500',
            'from-orange-500 to-red-500',
            'from-indigo-500 to-purple-500',
            'from-cyan-500 to-blue-500'
        ];
        const index = name?.charCodeAt(0) % colors.length || 0;
        return colors[index];
    };

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-2">
                        <div className="relative">
                            <Waves className="h-8 w-8 text-blue-400" />
                            <Sparkles className="h-4 w-4 text-yellow-400 absolute -top-1 -right-1 animate-pulse" />
                        </div>
                        <span onClick={() => navigate('/')} className="cursor-pointer text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                            FloatChat
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => navigate(item.href)}
                                className="text-gray-300 hover:text-white transition-colors duration-200 hover:scale-105 transform"
                            >
                                {item.name}
                            </button>
                        ))}
                        
                        {/* User Authentication Section */}
                        {token && userData ? (
                            <div className="relative" ref={dropdownRef}>
                                <button
                                    onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                                    className="flex items-center space-x-2 p-2 rounded-full hover:bg-white/10 transition-all duration-200 group"
                                >
                                    <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${getGradientColor(userData.name)} flex items-center justify-center text-white font-bold text-sm shadow-lg ring-2 ring-white/20 group-hover:ring-white/40 transition-all duration-200`}>
                                        {getInitials(userData.name)}
                                    </div>
                                    <div className="flex flex-col text-left">
                                        <span className="text-white text-sm font-medium">
                                            {userData.name.split(' ')[0]}
                                        </span>
                                        <span className="text-gray-400 text-xs">
                                            {userData.profession}
                                        </span>
                                    </div>
                                    <ChevronRight className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${isProfileDropdownOpen ? 'rotate-90' : ''}`} />
                                </button>

                                {/* Dropdown Menu */}
                                {isProfileDropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-78 bg-slate-800/95 backdrop-blur-lg rounded-xl shadow-xl border border-white/10 py-2 animate-in slide-in-from-top-2 duration-200">
                                        <div className="px-4 py-3 border-b border-white/10">
                                            <div className="flex items-center space-x-3">
                                                <div className={`w-12 h-12 rounded-full bg-gradi    ent-to-r ${getGradientColor(userData.name)} flex items-center justify-center text-white font-bold shadow-lg`}>
                                                    {getInitials(userData.name)}
                                                </div>
                                                <div className="flex-1">
                                                    <p className="text-white font-medium">{userData.name}</p>
                                                    <p className="text-gray-400 text-sm">{userData.email}</p>
                                                    <p className="text-blue-400 text-xs">{userData.profession}</p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="py-1">
                                            <button
                                                onClick={() => {
                                                    navigate('/myprofile');
                                                    setIsProfileDropdownOpen(false);
                                                }}
                                                className="flex items-center w-full px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200"
                                            >
                                                <User className="h-4 w-4 mr-3" />
                                                My Profile
                                            </button>
                                            <button
                                                onClick={() => {
                                                    navigate('/settings');
                                                    setIsProfileDropdownOpen(false);
                                                }}
                                                className="flex items-center w-full px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200"
                                            >
                                                <Settings className="h-4 w-4 mr-3" />
                                                Settings
                                            </button>
                                            <hr className="border-white/10 my-1" />
                                            <button
                                                onClick={handleLogout}
                                                className="flex items-center w-full px-4 py-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-colors duration-200"
                                            >
                                                <LogOut className="h-4 w-4 mr-3" />
                                                Logout
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Button onClick={() => navigate("/login")} className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 transform hover:scale-105 transition-all duration-200 shadow-lg">
                                Get Started
                                <ChevronRight className="ml-1 h-4 w-4" />
                            </Button>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-white"
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </Button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-white/10">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navItems.map((item) => (
                                <button
                                    key={item.name}
                                    onClick={() => {
                                        navigate(item.href);
                                        setIsMenuOpen(false);
                                    }}
                                    className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200"
                                >
                                    {item.name}
                                </button>
                            ))}
                            
                            {/* Mobile User Section */}
                            {token && userData ? (  
                                <div className="border-t border-white/10 pt-3 mt-3">
                                    <div className="flex items-center px-3 py-2 mb-2">
                                        <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${getGradientColor(userData.name)} flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                                            {getInitials(userData.name)}
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-white font-medium">{userData.name}</p>
                                            <p className="text-gray-400 text-sm">{userData.profession}</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => {
                                            navigate('/profile');
                                            setIsMenuOpen(false);
                                        }}
                                        className="flex items-center w-full px-3 py-2 text-gray-300 hover:text-white"
                                    >
                                        <User className="h-4 w-4 mr-3" />
                                        My Profile
                                    </button>
                                    <button
                                        onClick={() => {
                                            handleLogout();
                                            setIsMenuOpen(false);
                                        }}
                                        className="flex items-center w-full px-3 py-2 text-red-400 hover:text-red-300"
                                    >
                                        <LogOut className="h-4 w-4 mr-3" />
                                        Logout
                                    </button>
                                </div>
                            ) : (
                                <Button 
                                    onClick={() => {
                                        navigate("/login");
                                        setIsMenuOpen(false);
                                    }} 
                                    className="w-full mt-4 bg-gradient-to-r from-blue-500 to-indigo-500"
                                >
                                    Get Started
                                </Button>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Header