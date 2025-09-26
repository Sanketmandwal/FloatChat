import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
    Send,
    Mic,
    MicOff,
    Paperclip,
    RotateCcw,
    Copy,
    ThumbsUp,
    ThumbsDown,
    MessageSquare,
    Plus,
    Search,
    MoreVertical,
    Trash2,
    Edit3,
    Pin,
    Activity,
    TrendingUp,
    Globe,
    Eye,
    Download,
    Share,
    Sparkles,
    Bot,
    User,
    ChevronDown,
    Clock,
    Database,
    BarChart3,
    Map,
    Thermometer,
    Droplets,
    MapPin,
    Calendar,
    Compass,
    Anchor,
    Fish,
    Waves
} from 'lucide-react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ScatterChart, Scatter, Cell } from 'recharts';
import { useNavigate } from 'react-router';

const Chatbot = () => {

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'Maps', href: '/map' },
        { name: 'About', href: '/about' },
        { name: 'Contact Us', href: '/contact' },
    ];

    const navigate = useNavigate()
    const [messages, setMessages] = useState([
        {
            id: 1,
            type: 'bot',
            content: "Hello! I'm FloatChat AI, your intelligent assistant for ARGO ocean data discovery. I can help you explore temperature profiles, salinity patterns, float trajectories, and much more. What oceanographic insights would you like to discover today?",
            timestamp: new Date(),
            suggestions: [
                "Show temperature profiles near Indian Ocean",
                "Compare salinity data for last 6 months",
                "Find nearest ARGO floats to Mumbai",
                "Analyze BGC parameters in Arabian Sea"
            ]
        }
    ]);

    const [inputMessage, setInputMessage] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [isRecording, setIsRecording] = useState(false);
    const [selectedChat, setSelectedChat] = useState(0);
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    const [recentChats] = useState([
        { id: 0, title: "ARGO Data Discovery", lastMessage: "Hello! I'm FloatChat AI...", timestamp: new Date(), pinned: true },
        { id: 1, title: "Indian Ocean Temperature Analysis", lastMessage: "Temperature profiles show...", timestamp: new Date(Date.now() - 3600000) },
        { id: 2, title: "Arabian Sea Salinity Study", lastMessage: "Salinity data indicates...", timestamp: new Date(Date.now() - 7200000) },
        { id: 3, title: "Mumbai Coast Float Tracking", lastMessage: "Found 12 active floats...", timestamp: new Date(Date.now() - 86400000) },
        { id: 4, title: "BGC Parameter Comparison", lastMessage: "Bio-geochemical analysis...", timestamp: new Date(Date.now() - 172800000) },
        { id: 5, title: "Seasonal Temperature Trends", lastMessage: "Seasonal variations show...", timestamp: new Date(Date.now() - 259200000) },
    ]);

    const temperatureData = [
        { depth: 0, temp: 28.5, salinity: 34.2 },
        { depth: 50, temp: 27.8, salinity: 34.5 },
        { depth: 100, temp: 26.2, salinity: 34.8 },
        { depth: 200, temp: 23.1, salinity: 35.1 },
        { depth: 500, temp: 18.5, salinity: 35.3 },
        { depth: 1000, temp: 12.8, salinity: 35.2 },
        { depth: 1500, temp: 8.2, salinity: 35.0 },
        { depth: 2000, temp: 4.1, salinity: 34.9 },
    ];

    const floatLocationData = [
        { name: 'Float 2902734', lat: 19.0760, lon: 72.8777, temp: 26.8, status: 'active' },
        { name: 'Float 2902856', lat: 18.5204, lon: 73.8567, temp: 27.2, status: 'active' },
        { name: 'Float 2902921', lat: 19.9975, lon: 73.7898, temp: 26.1, status: 'maintenance' },
        { name: 'Float 2903045', lat: 18.1124, lon: 72.9019, temp: 27.8, status: 'active' },
    ];

    const timeSeriesData = [
        { date: 'Jan', temp: 24.2, salinity: 34.8 },
        { date: 'Feb', temp: 25.1, salinity: 34.9 },
        { date: 'Mar', temp: 26.8, salinity: 35.1 },
        { date: 'Apr', temp: 28.2, salinity: 35.3 },
        { date: 'May', temp: 29.1, salinity: 35.2 },
        { date: 'Jun', temp: 28.7, salinity: 35.0 },
    ];

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = async () => {
        if (!inputMessage.trim()) return;

        const userMessage = {
            id: messages.length + 1,
            type: 'user',
            content: inputMessage,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        setInputMessage('');
        setIsTyping(true);

        // Simulate AI response
        setTimeout(() => {
            const botResponse = generateAIResponse(inputMessage);
            setMessages(prev => [...prev, botResponse]);
            setIsTyping(false);
        }, 2000);
    };

    const generateAIResponse = (query) => {
        const responses = {
            temperature: {
                content: "I've analyzed the temperature profiles for your query region. The data shows interesting thermal stratification patterns typical of the Indian Ocean. Here's a comprehensive analysis of the temperature distribution across different depths and locations.",
                analysis: "The temperature profiles reveal a typical thermocline structure with surface temperatures around 28-29°C, rapidly decreasing to 18°C at 500m depth, and stabilizing around 4°C at 2000m. This thermal gradient is crucial for understanding ocean circulation patterns and marine ecosystem dynamics.",
                insights: [
                    "Strong thermocline between 100-500m depth",
                    "Surface warming trend observed in recent months",
                    "Temperature anomalies detected in coastal areas",
                    "Seasonal variation of ±2°C in upper 200m"
                ],
                showDashboard: true,
                chartType: 'temperature'
            },
            salinity: {
                content: "Salinity analysis complete! I've processed comprehensive salinity data from multiple ARGO floats across your specified region. The results show distinct salinity patterns influenced by monsoon cycles and freshwater inputs.",
                analysis: "Salinity measurements indicate typical Arabian Sea values (35.8-36.2 PSU) contrasting with Bay of Bengal readings (33.5-34.5 PSU). This difference is primarily due to freshwater influx from major rivers and varying precipitation patterns across regions.",
                insights: [
                    "Higher salinity in Arabian Sea vs Bay of Bengal",
                    "Seasonal freshening during monsoon period",
                    "Salinity maximum at ~150m depth",
                    "Coastal dilution effects clearly visible"
                ],
                showDashboard: true,
                chartType: 'salinity'
            },
            location: {
                content: "Float location analysis complete! I've identified all active ARGO floats in your area of interest and mapped their current positions, trajectories, and operational status.",
                analysis: "Currently tracking 12 active ARGO floats within 200km of Mumbai coast. These floats are collecting real-time temperature, salinity, and pressure data with excellent spatial coverage of the region. Float WMO 2902734 is the nearest at 45km northwest.",
                insights: [
                    "12 floats actively profiling in region",
                    "Nearest float: 45km from Mumbai coast",
                    "All floats operational with recent data",
                    "Good spatial distribution for regional analysis"
                ],
                showDashboard: true,
                chartType: 'location'
            },
            bgc: {
                content: "Bio-geochemical parameter analysis shows fascinating insights into ocean productivity and carbon cycling in the Arabian Sea region. The BGC sensors provide crucial data on oxygen, chlorophyll, and nutrient distributions.",
                analysis: "BGC data reveals seasonal productivity cycles with peak chlorophyll concentrations during southwest monsoon. Oxygen minimum zones are well-defined between 200-1000m depth, indicating strong biological oxygen consumption and limited ventilation.",
                insights: [
                    "Chlorophyll peaks during monsoon season",
                    "Pronounced oxygen minimum at 400-800m",
                    "Carbon export efficiency varies seasonally",
                    "Nutrient upwelling drives primary production"
                ],
                showDashboard: true,
                chartType: 'bgc'
            },
            default: {
                content: "I've processed your oceanographic query and compiled comprehensive data analysis from available ARGO float measurements. Here's what the data reveals about ocean conditions in your region of interest.",
                analysis: "The analysis encompasses multiple parameters including temperature, salinity, and depth measurements from strategically positioned ARGO floats. Data quality is excellent with high-resolution vertical profiles providing detailed insights into water column structure.",
                insights: [
                    "High-quality multi-parameter data available",
                    "Strong vertical gradients observed",
                    "Regional patterns match climatological expectations",
                    "Recent measurements show typical seasonal behavior"
                ],
                showDashboard: true,
                chartType: 'overview'
            }
        };

        let responseType = 'default';
        if (query.toLowerCase().includes('temperature')) responseType = 'temperature';
        if (query.toLowerCase().includes('salinity')) responseType = 'salinity';
        if (query.toLowerCase().includes('float') || query.toLowerCase().includes('location')) responseType = 'location';
        if (query.toLowerCase().includes('bgc') || query.toLowerCase().includes('bio')) responseType = 'bgc';

        const response = responses[responseType];

        return {
            id: messages.length + 2,
            type: 'bot',
            content: response.content,
            timestamp: new Date(),
            analysis: response.analysis,
            insights: response.insights,
            showDashboard: response.showDashboard,
            chartType: response.chartType,
            suggestions: [
                "Generate detailed report for this analysis",
                "Show historical comparison data",
                "Export visualization as image",
                "Compare with global ocean patterns"
            ]
        };
    };

    const handleSuggestionClick = (suggestion) => {
        setInputMessage(suggestion);
        inputRef.current?.focus();
    };

    const toggleRecording = () => {
        setIsRecording(!isRecording);
    };

    const formatTime = (date) => {
        return new Intl.DateTimeFormat('en-US', {
            hour: '2-digit',
            minute: '2-digit'
        }).format(date);
    };

    const formatChatTime = (date) => {
        const now = new Date();
        const diffMs = now - date;
        const diffMins = Math.floor(diffMs / 60000);
        const diffHours = Math.floor(diffMs / 3600000);
        const diffDays = Math.floor(diffMs / 86400000);

        if (diffMins < 60) return `${diffMins}m ago`;
        if (diffHours < 24) return `${diffHours}h ago`;
        return `${diffDays}d ago`;
    };

    const renderDashboard = (chartType) => {
        switch (chartType) {
            case 'temperature':
                return (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
                        <Card className="bg-slate-800/50 border border-white/10">
                            <CardHeader className="pb-3">
                                <CardTitle className="text-sm font-medium text-blue-300">Temperature vs Depth Profile</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ResponsiveContainer width="100%" height={200}>
                                    <LineChart data={temperatureData}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                                        <XAxis dataKey="temp" stroke="#9CA3AF" fontSize={12} />
                                        <YAxis dataKey="depth" reversed stroke="#9CA3AF" fontSize={12} />
                                        <Tooltip
                                            contentStyle={{
                                                backgroundColor: '#1E293B',
                                                border: '1px solid #334155',
                                                borderRadius: '8px',
                                                color: '#F1F5F9'
                                            }}
                                        />
                                        <Line type="monotone" dataKey="temp" stroke="#3B82F6" strokeWidth={2} dot={{ fill: '#3B82F6', r: 4 }} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </CardContent>
                        </Card>

                        <Card className="bg-slate-800/50 border border-white/10">
                            <CardHeader className="pb-3">
                                <CardTitle className="text-sm font-medium text-green-300">Seasonal Temperature Trends</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ResponsiveContainer width="100%" height={200}>
                                    <AreaChart data={timeSeriesData}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                                        <XAxis dataKey="date" stroke="#9CA3AF" fontSize={12} />
                                        <YAxis stroke="#9CA3AF" fontSize={12} />
                                        <Tooltip
                                            contentStyle={{
                                                backgroundColor: '#1E293B',
                                                border: '1px solid #334155',
                                                borderRadius: '8px',
                                                color: '#F1F5F9'
                                            }}
                                        />
                                        <Area type="monotone" dataKey="temp" stroke="#10B981" fill="#10B981" fillOpacity={0.3} />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </CardContent>
                        </Card>
                    </div>
                );

            case 'salinity':
                return (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
                        <Card className="bg-slate-800/50 border border-white/10">
                            <CardHeader className="pb-3">
                                <CardTitle className="text-sm font-medium text-purple-300">Salinity vs Depth Profile</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ResponsiveContainer width="100%" height={200}>
                                    <LineChart data={temperatureData}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                                        <XAxis dataKey="salinity" stroke="#9CA3AF" fontSize={12} />
                                        <YAxis dataKey="depth" reversed stroke="#9CA3AF" fontSize={12} />
                                        <Tooltip
                                            contentStyle={{
                                                backgroundColor: '#1E293B',
                                                border: '1px solid #334155',
                                                borderRadius: '8px',
                                                color: '#F1F5F9'
                                            }}
                                        />
                                        <Line type="monotone" dataKey="salinity" stroke="#8B5CF6" strokeWidth={2} dot={{ fill: '#8B5CF6', r: 4 }} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </CardContent>
                        </Card>

                        <Card className="bg-slate-800/50 border border-white/10">
                            <CardHeader className="pb-3">
                                <CardTitle className="text-sm font-medium text-teal-300">Regional Salinity Comparison</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ResponsiveContainer width="100%" height={200}>
                                    <AreaChart data={timeSeriesData}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                                        <XAxis dataKey="date" stroke="#9CA3AF" fontSize={12} />
                                        <YAxis stroke="#9CA3AF" fontSize={12} />
                                        <Tooltip
                                            contentStyle={{
                                                backgroundColor: '#1E293B',
                                                border: '1px solid #334155',
                                                borderRadius: '8px',
                                                color: '#F1F5F9'
                                            }}
                                        />
                                        <Area type="monotone" dataKey="salinity" stroke="#14B8A6" fill="#14B8A6" fillOpacity={0.3} />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </CardContent>
                        </Card>
                    </div>
                );

            case 'location':
                return (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
                        <Card className="bg-slate-800/50 border border-white/10">
                            <CardHeader className="pb-3">
                                <CardTitle className="text-sm font-medium text-orange-300">Active Float Positions</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    {floatLocationData.map((float, index) => (
                                        <div key={index} className="flex items-center justify-between bg-slate-700/30 rounded-lg p-3">
                                            <div className="flex items-center gap-3">
                                                <div className={`w-3 h-3 rounded-full ${float.status === 'active' ? 'bg-green-400' : 'bg-yellow-400'} animate-pulse`}></div>
                                                <div>
                                                    <p className="text-sm font-medium text-white">{float.name}</p>
                                                    <p className="text-xs text-gray-400">{float.lat.toFixed(2)}°N, {float.lon.toFixed(2)}°E</p>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-sm font-medium text-blue-300">{float.temp}°C</p>
                                                <p className="text-xs text-gray-400 capitalize">{float.status}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-slate-800/50 border border-white/10">
                            <CardHeader className="pb-3">
                                <CardTitle className="text-sm font-medium text-red-300">Float Distribution Map</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="h-48 bg-slate-700/50 rounded-lg flex items-center justify-center border border-white/10">
                                    <div className="text-center space-y-2">
                                        <Map className="w-12 h-12 text-blue-400 mx-auto" />
                                        <p className="text-sm text-gray-300">Interactive Map</p>
                                        <p className="text-xs text-gray-400">Float positions & trajectories</p>
                                        <Button size="sm" className="border-white/20 text-gray-300 hover:bg-white/10">
                                            <Eye className="w-3 h-3 mr-1" />
                                            View Full Map
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                );

            default:
                return (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
                        <Card className="bg-slate-800/50 border border-white/10">
                            <CardHeader className="pb-3">
                                <CardTitle className="text-sm font-medium text-blue-300">Multi-Parameter Overview</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ResponsiveContainer width="100%" height={200}>
                                    <LineChart data={temperatureData}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                                        <XAxis dataKey="depth" stroke="#9CA3AF" fontSize={12} />
                                        <YAxis stroke="#9CA3AF" fontSize={12} />
                                        <Tooltip
                                            contentStyle={{
                                                backgroundColor: '#1E293B',
                                                border: '1px solid #334155',
                                                borderRadius: '8px',
                                                color: '#F1F5F9'
                                            }}
                                        />
                                        <Line type="monotone" dataKey="temp" stroke="#3B82F6" strokeWidth={2} name="Temperature" />
                                        <Line type="monotone" dataKey="salinity" stroke="#8B5CF6" strokeWidth={2} name="Salinity" />
                                    </LineChart>
                                </ResponsiveContainer>
                            </CardContent>
                        </Card>

                        <Card className="bg-slate-800/50 border border-white/10">
                            <CardHeader className="pb-3">
                                <CardTitle className="text-sm font-medium text-emerald-300">Data Quality Metrics</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="bg-slate-700/30 rounded-lg p-3 text-center">
                                        <p className="text-2xl font-bold text-green-400">98.2%</p>
                                        <p className="text-xs text-gray-400">Data Quality</p>
                                    </div>
                                    <div className="bg-slate-700/30 rounded-lg p-3 text-center">
                                        <p className="text-2xl font-bold text-blue-400">47</p>
                                        <p className="text-xs text-gray-400">Active Floats</p>
                                    </div>
                                    <div className="bg-slate-700/30 rounded-lg p-3 text-center">
                                        <p className="text-2xl font-bold text-purple-400">2.1k</p>
                                        <p className="text-xs text-gray-400">Profiles</p>
                                    </div>
                                    <div className="bg-slate-700/30 rounded-lg p-3 text-center">
                                        <p className="text-2xl font-bold text-orange-400">6h</p>
                                        <p className="text-xs text-gray-400">Last Update</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                );
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
            <div className="flex h-screen">

                {/* Recent Chats Sidebar */}
                <div className="w-80 bg-slate-800/40 backdrop-blur-lg border-r border-white/10 flex flex-col">
                    {/* Sidebar Header */}
                    <div className="p-4 border-b border-white/10">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-semibold">Recent Chats</h2>
                            <Button size="icon" variant="ghost" className="text-gray-400">
                                <Plus className="w-5 h-5" />
                            </Button>
                        </div>
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <Input
                                placeholder="Search conversations..."
                                className="pl-10 bg-slate-700/50 border-white/20 text-white placeholder:text-gray-400"
                            />
                        </div>
                    </div>

                    {/* Chat List */}
                    <div className="flex-1 overflow-y-auto">
                        {recentChats.map((chat) => (
                            <div
                                key={chat.id}
                                onClick={() => setSelectedChat(chat.id)}
                                className={`p-4 border-b border-white/5 cursor-pointer hover:bg-white/5 transition-colors ${selectedChat === chat.id ? 'bg-blue-600/20 border-r-2 border-r-blue-400' : ''
                                    }`}
                            >
                                <div className="flex items-start justify-between">
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 mb-1">
                                            {chat.pinned && <Pin className="w-3 h-3 text-yellow-400" />}
                                            <h3 className="text-sm font-medium text-white truncate">{chat.title}</h3>
                                        </div>
                                        <p className="text-xs text-gray-400 truncate mb-2">{chat.lastMessage}</p>
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs text-gray-500">{formatChatTime(chat.timestamp)}</span>
                                            <Button size="icon" variant="ghost" className="w-6 h-6 text-gray-400 opacity-0 group-hover:opacity-100">
                                                <MoreVertical className="w-3 h-3" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Sidebar Footer */}
                    <div className="p-4 border-t border-white/10">
                        <div className="flex items-center gap-2 text-xs text-gray-400">
                            <Activity className="w-4 h-4 text-green-400" />
                            <span>Connected to ARGO Global Data Repository</span>
                        </div>
                    </div>
                </div>

                {/* Main Chat Area */}
                <div className="flex-1 flex flex-col bg-gradient-to-br from-slate-900/50 via-blue-900/50 to-indigo-900/50">

                    {/* Chat Header */}
                    <div className="p-4 border-b border-white/10 bg-slate-800/20 backdrop-blur-sm">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <div className="relative">
                                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                                        <Bot className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-slate-900 animate-pulse"></div>
                                </div>
                                <div>
                                    <h1 className="text-lg font-bold">FloatChat AI Assistant</h1>
                                    <p className="text-xs text-gray-400">Specialized in ARGO Ocean Data Analysis</p>
                                </div>
                            </div>

                            <div className="hidden md:flex ml-80  space-x-8">
                                {navItems.map((item) => (
                                    <button
                                        key={item.name}
                                        onClick={() => navigate(item.href)}
                                        className="text-gray-300 hover:text-white transition-colors duration-200 hover:scale-105 transform"
                                    >
                                        {item.name}
                                    </button>
                                ))}
                            </div>

                            <div className="flex items-center space-x-2">
                                <Badge className="bg-green-500/20 text-green-300 border-green-400/30">
                                    <Database className="w-3 h-3 mr-1" />
                                    Live Data
                                </Badge>
                            </div>
                        </div>
                    </div>

                    {/* Chat Messages */}
                    <div className="flex-1 overflow-y-auto p-6 space-y-6">
                        {messages.map((message) => (
                            <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-4xl w-full ${message.type === 'user' ? 'flex justify-end' : ''}`}>

                                    {/* User Message */}
                                    {message.type === 'user' && (
                                        <div className="flex items-start gap-3 max-w-2xl">
                                            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl px-4 py-3 shadow-lg">
                                                <p className="text-white">{message.content}</p>
                                                <p className="text-xs text-blue-200 mt-2 opacity-70">{formatTime(message.timestamp)}</p>
                                            </div>
                                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center flex-shrink-0">
                                                <User className="w-4 h-4 text-white" />
                                            </div>
                                        </div>
                                    )}

                                    {/* Bot Message */}
                                    {message.type === 'bot' && (
                                        <div className="flex items-start gap-3 w-full">
                                            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                                                <Bot className="w-4 h-4 text-white" />
                                            </div>
                                            <div className="flex-1 space-y-4">
                                                <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/10">
                                                    <div className="flex items-center gap-2 mb-3">
                                                        <Sparkles className="w-4 h-4 text-yellow-400" />
                                                        <span className="text-sm font-medium text-blue-300">FloatChat AI Analysis</span>
                                                        <span className="text-xs text-gray-400">{formatTime(message.timestamp)}</span>
                                                    </div>

                                                    <p className="text-white mb-4 leading-relaxed">{message.content}</p>

                                                    {/* Analysis Section */}
                                                    {message.analysis && (
                                                        <div className="bg-slate-700/50 rounded-xl p-4 mb-4">
                                                            <h4 className="text-sm font-medium text-green-300 mb-2 flex items-center gap-2">
                                                                <BarChart3 className="w-4 h-4" />
                                                                Detailed Analysis
                                                            </h4>
                                                            <p className="text-gray-300 text-sm leading-relaxed">{message.analysis}</p>
                                                        </div>
                                                    )}

                                                    {/* Key Insights */}
                                                    {message.insights && (
                                                        <div className="bg-slate-700/50 rounded-xl p-4 mb-4">
                                                            <h4 className="text-sm font-medium text-purple-300 mb-3 flex items-center gap-2">
                                                                <TrendingUp className="w-4 h-4" />
                                                                Key Insights
                                                            </h4>
                                                            <div className="grid gap-2">
                                                                {message.insights.map((insight, index) => (
                                                                    <div key={index} className="flex items-start gap-2">
                                                                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                                                                        <p className="text-gray-300 text-sm">{insight}</p>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    )}

                                                    {/* Dashboard/Visualizations */}
                                                    {message.showDashboard && (
                                                        <div className="bg-slate-700/30 rounded-xl p-4">
                                                            <div className="flex items-center justify-between mb-4">
                                                                <h4 className="text-sm font-medium text-cyan-300 flex items-center gap-2">
                                                                    <LineChart className="w-4 h-4" />
                                                                    Data Visualizations & Dashboard
                                                                </h4>
                                                                <div className="flex items-center gap-2">
                                                                    <Button size="sm" variant="ghost" className="text-cyan-400 hover:text-cyan-300">
                                                                        <Download className="w-3 h-3 mr-1" />
                                                                        Export
                                                                    </Button>
                                                                    <Button size="sm" variant="ghost" className="text-cyan-400 hover:text-cyan-300">
                                                                        <Share className="w-3 h-3 mr-1" />
                                                                        Share
                                                                    </Button>
                                                                </div>
                                                            </div>
                                                            {renderDashboard(message.chartType)}
                                                        </div>
                                                    )}

                                                    {/* Action Buttons */}
                                                    <div className="flex items-center gap-2 mt-4 pt-3 border-t border-white/10">
                                                        <Button size="sm" variant="ghost" className="text-gray-400 ">
                                                            <Copy className="w-3 h-3 mr-1" />
                                                            Copy
                                                        </Button>
                                                        <Button size="sm" variant="ghost" className="text-gray-400 ">
                                                            <Download className="w-3 h-3 mr-1" />
                                                            Export
                                                        </Button>
                                                        <Button size="sm" variant="ghost" className="text-gray-400 ">
                                                            <Share className="w-3 h-3 mr-1" />
                                                            Share
                                                        </Button>
                                                        <div className="ml-auto flex items-center gap-1">
                                                            <Button size="sm" variant="ghost" className="text-gray-400 hover:text-green-400">
                                                                <ThumbsUp className="w-3 h-3" />
                                                            </Button>
                                                            <Button size="sm" variant="ghost" className="text-gray-400 hover:text-red-400">
                                                                <ThumbsDown className="w-3 h-3" />
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Suggestions */}
                                                {message.suggestions && (
                                                    <div className="flex flex-wrap gap-2">
                                                        {message.suggestions.map((suggestion, index) => (
                                                            <Button
                                                                key={index}
                                                                size="sm"
                                                                className="text-xs border-white/20 text-gray-300 hover:bg-white/10  hover:border-blue-400/50 transition-all duration-200"
                                                                onClick={() => handleSuggestionClick(suggestion)}
                                                            >
                                                                {suggestion}
                                                            </Button>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}

                        {/* Typing Indicator */}
                        {isTyping && (
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                                    <Bot className="w-4 h-4 text-white" />
                                </div>
                                <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                                    <div className="flex items-center gap-3">
                                        <div className="flex gap-1">
                                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-100"></div>
                                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-200"></div>
                                        </div>
                                        <span className="text-sm text-gray-400">FloatChat AI is analyzing ocean data...</span>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="border-t border-white/10 p-4 bg-slate-800/20 backdrop-blur-sm">
                        {/* Quick Suggestion Pills */}
                        <div className="mb-4">
                            <div className="flex flex-wrap gap-2">
                                <Button
                                    size="sm"
                                    variant="ghost"
                                    className="text-xs bg-slate-700/30 hover:bg-slate-700/50 border border-white/10 text-blue-300 hover:text-blue-200"
                                    onClick={() => handleSuggestionClick("Show temperature profiles near Mumbai coast")}
                                >
                                    <Thermometer className="w-3 h-3 mr-1" />
                                    Temperature Analysis
                                </Button>
                                <Button
                                    size="sm"
                                    variant="ghost"
                                    className="text-xs bg-slate-700/30 hover:bg-slate-700/50 border border-white/10 text-purple-300 hover:text-purple-200"
                                    onClick={() => handleSuggestionClick("Compare salinity between Arabian Sea and Bay of Bengal")}
                                >
                                    <Droplets className="w-3 h-3 mr-1" />
                                    Salinity Patterns
                                </Button>
                                <Button
                                    size="sm"
                                    variant="ghost"
                                    className="text-xs bg-slate-700/30 hover:bg-slate-700/50 border border-white/10 text-orange-300 hover:text-orange-200"
                                    onClick={() => handleSuggestionClick("Find active ARGO floats near Indian Ocean")}
                                >
                                    <Anchor className="w-3 h-3 mr-1" />
                                    Float Locations
                                </Button>
                                <Button
                                    size="sm"
                                    variant="ghost"
                                    className="text-xs bg-slate-700/30 hover:bg-slate-700/50 border border-white/10 text-green-300 hover:text-green-200"
                                    onClick={() => handleSuggestionClick("Analyze BGC parameters in Arabian Sea region")}
                                >
                                    <Fish className="w-3 h-3 mr-1" />
                                    BGC Analysis
                                </Button>
                            </div>
                        </div>

                        {/* Message Input */}
                        <div className="flex items-end gap-3">
                            <div className="flex-1 relative">
                                <Textarea
                                    ref={inputRef}
                                    value={inputMessage}
                                    onChange={(e) => setInputMessage(e.target.value)}
                                    placeholder="Ask about ocean data... (e.g., 'Show temperature profiles near Mumbai coast' or 'Compare salinity trends in Arabian Sea')"
                                    className="min-h-[60px] max-h-32 bg-slate-700/50 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400/20 resize-none pr-12 backdrop-blur-sm"
                                    onKeyPress={(e) => {
                                        if (e.key === 'Enter' && !e.shiftKey) {
                                            e.preventDefault();
                                            handleSendMessage();
                                        }
                                    }}
                                />
                                <Button
                                    size="sm"
                                    variant="ghost"
                                    className="absolute right-2 bottom-2 text-gray-400 "
                                    onClick={() => setInputMessage('')}
                                >
                                    <RotateCcw className="w-4 h-4" />
                                </Button>
                            </div>

                            <div className="flex items-center gap-2">
                                <Button
                                    size="icon"
                                    variant="ghost"
                                    className={`text-gray-400  ${isRecording ? 'text-red-400 animate-pulse' : ''}`}
                                    onClick={toggleRecording}
                                >
                                    {isRecording ? (
                                        <MicOff className="w-5 h-5" />
                                    ) : (
                                        <Mic className="w-5 h-5" />
                                    )}
                                </Button>

                                <Button
                                    size="icon"
                                    variant="ghost"
                                    className="text-gray-400 "
                                >
                                    <Paperclip className="w-5 h-5" />
                                </Button>

                                <Button
                                    onClick={handleSendMessage}
                                    disabled={!inputMessage.trim() || isTyping}
                                    className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105"
                                >
                                    <Send className="w-4 h-4 mr-1" />
                                    Send
                                </Button>
                            </div>
                        </div>

                        {/* Input Hints */}
                        <div className="flex items-center justify-between mt-3 text-xs text-gray-500">
                            <div className="flex items-center gap-4">
                                <span>💡 Press Enter to send, Shift+Enter for new line</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span>{inputMessage.length}/2000</span>
                                <Badge variant="outline" className="border-white/20 text-gray-400">
                                    <Waves className="w-3 h-3 mr-1" />
                                    ARGO Global Data
                                </Badge>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chatbot;