import React, { useState } from 'react';
import {
    Waves,
    Brain,
    Database,
    Globe,
    Target,
    Users,
    Award,
    Rocket,
    Heart,
    Lightbulb,
    Code,
    BarChart3,
    MapPin,
    Cpu,
    MessageSquare,
    Search,
    Eye,
    ArrowRight,
    CheckCircle2,
    Building,
    GraduationCap,
    Mail,
    Github,
    Linkedin,
    ExternalLink,
    Calendar,
    Shield,
    Zap,
    Sparkles
} from 'lucide-react';
import Header from './Header';
import Footer from './Footer';


const Button = ({ className, variant, size, children, ...props }) => (
    <button className={className} {...props}>
        {children}
    </button>
);

const Card = ({ className, children }) => (
    <div className={className}>{children}</div>
);

const CardContent = ({ className, children }) => (
    <div className={className}>{children}</div>
);

const CardHeader = ({ className, children }) => (
    <div className={className}>{children}</div>
);

const CardTitle = ({ className, children }) => (
    <h3 className={className}>{children}</h3>
);

const Badge = ({ className, children, ...props }) => (
    <span className={className} {...props}>
        {children}
    </span>
);

// --- Custom Animation Styles ---
// Defines the 'fade-in' animation used on tab content.
const CustomStyles = () => (
    <style>
        {`
            @keyframes fadeIn {
                from {
                    opacity: 0;
                    transform: translateY(1rem);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            .animate-fade-in {
                animation: fadeIn 0.5s ease-in-out forwards;
            }
        `}
    </style>
);


const About = () => {
    const [activeTab, setActiveTab] = useState('mission');

    const stats = [
        { label: "Ocean Data Points", value: "2M+", icon: Database, color: "text-blue-400" },
        { label: "ARGO Floats Tracked", value: "4,000+", icon: Globe, color: "text-green-400" },
        { label: "Countries Supported", value: "25+", icon: Building, color: "text-purple-400" },
        { label: "Research Institutions", value: "50+", icon: GraduationCap, color: "text-orange-400" }
    ];

    const timeline = [
        { year: "2024", month: "March", title: "Project Conception", description: "Identified the critical gap in ocean data accessibility and began developing the AI-powered solution.", milestone: "Ideation Phase" },
        { year: "2024", month: "June", title: "Technical Foundation", description: "Built the core RAG pipeline and integrated with ARGO Global Data Repository for real-time ocean data access.", milestone: "Development Phase" },
        { year: "2024", month: "September", title: "SIH 2024 Prototype", description: "Developed working prototype demonstrating natural language querying of oceanographic data.", milestone: "Prototype Complete" },
        { year: "2024", month: "December", title: "Future Vision", description: "Planned integration with global ocean monitoring systems and expansion to satellite data.", milestone: "Roadmap Defined" }
    ];

    const team = [
        { name: "Lead AI Engineer", role: "Machine Learning & NLP Specialist", description: "Expert in RAG pipelines, LLM integration, and conversational AI systems.", avatar: "AI", skills: ["Python", "TensorFlow", "RAG", "LLMs"], color: "from-blue-500 to-indigo-500" },
        { name: "Ocean Data Scientist", role: "Oceanography & Data Analysis", description: "Marine science expert specializing in ARGO float data and oceanographic patterns.", avatar: "OD", skills: ["NetCDF", "MATLAB", "Ocean Modeling", "Data Viz"], color: "from-green-500 to-teal-500" },
        { name: "Full Stack Developer", role: "Frontend & Backend Development", description: "Full-stack engineer building scalable systems and beautiful user interfaces.", avatar: "FS", skills: ["React", "Node.js", "PostgreSQL", "AWS"], color: "from-purple-500 to-pink-500" },
        { name: "UI/UX Designer", role: "Product Design & User Experience", description: "Design expert creating intuitive interfaces for complex scientific data.", avatar: "UX", skills: ["Figma", "User Research", "Prototyping", "Design Systems"], color: "from-orange-500 to-red-500" }
    ];

    const technologies = [
        { name: "Large Language Models", desc: "GPT, LLaMA, Mistral for natural language understanding", icon: Brain },
        { name: "Retrieval Augmented Generation", desc: "RAG pipelines for contextual data retrieval", icon: Search },
        { name: "Vector Databases", desc: "FAISS/Chroma for efficient similarity search", icon: Database },
        { name: "React & Modern Web", desc: "Responsive interfaces with Tailwind CSS", icon: Code },
        { name: "PostgreSQL", desc: "Structured storage for oceanographic data", icon: Database },
        { name: "Real-time Processing", desc: "Live ARGO data ingestion and analysis", icon: Zap },
        { name: "Geospatial Visualization", desc: "Interactive maps with Plotly and Leaflet", icon: MapPin },
        { name: "Model Context Protocol", desc: "MCP for seamless AI-data integration", icon: Cpu }
    ];


    const tabContent = {
        mission: (
            <div className="space-y-8">
                <Card className="bg-slate-800/50 backdrop-blur-lg border border-white/10 shadow-2xl">
                    <CardContent className="p-8">
                        <div className="flex items-center justify-center mb-6">
                            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center">
                                <Target className="w-10 h-10 text-white" />
                            </div>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                                Ready to Dive Deep
                            </span>
                            <br />
                            <span className="text-white">Into Ocean Intelligence?</span>
                        </h2>

                        <p className="text-lg text-gray-300 max-w-3xl mx-auto text-center mb-6">
                            Join us in revolutionizing how the world accesses and understands ocean data. Experience the future of marine research today.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 transform hover:scale-105 transition-all duration-300 shadow-xl text-lg px-8 py-4 rounded-md text-white flex items-center justify-center"
                            >
                                <MessageSquare className="mr-2 h-5 w-5" />
                                Try FloatChat Now
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-white/20 text-white hover:bg-white/10 transform hover:scale-105 transition-all duration-300 text-lg px-8 py-4 rounded-md flex items-center justify-center"
                            >
                                <Github className="mr-2 h-5 w-5" />
                                View Source Code
                            </Button>
                        </div>

                        <div className="flex items-center justify-center gap-8 text-sm text-gray-400">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-green-400" />
                                <span>Open Source</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-green-400" />
                                <span>Real-time Data</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-green-400" />
                                <span>Global Coverage</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <div className="grid md:grid-cols-3 gap-6">
                    <Card className="bg-slate-800/40 backdrop-blur-lg border border-white/10 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105">
                        <CardContent className="p-6 text-center">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Mail className="w-6 h-6 text-white" />
                            </div>
                            <h4 className="text-lg font-semibold text-white mb-2">Email Us</h4>
                            <p className="text-gray-300 text-sm mb-4">General inquiries and support</p>
                            <Button variant="outline" className="border-white/20 text-gray-300 hover:bg-white/10 w-full rounded-md py-2">
                                floatchat@oceanai.dev
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className="bg-slate-800/40 backdrop-blur-lg border border-white/10 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105">
                        <CardContent className="p-6 text-center">
                            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Github className="w-6 h-6 text-white" />
                            </div>
                            <h4 className="text-lg font-semibold text-white mb-2">Open Source</h4>
                            <p className="text-gray-300 text-sm mb-4">Contribute to the project</p>
                            <Button variant="outline" className="border-white/20 text-gray-300 hover:bg-white/10 w-full rounded-md py-2 flex items-center justify-center">
                                <ExternalLink className="w-3 h-3 mr-1" />
                                GitHub Repository
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className="bg-slate-800/40 backdrop-blur-lg border border-white/10 hover:border-green-400/50 transition-all duration-300 transform hover:scale-105">
                        <CardContent className="p-6 text-center">
                            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Linkedin className="w-6 h-6 text-white" />
                            </div>
                            <h4 className="text-lg font-semibold text-white mb-2">Connect</h4>
                            <p className="text-gray-300 text-sm mb-4">Follow our journey</p>
                            <Button variant="outline" className="border-white/20 text-gray-300 hover:bg-white/10 w-full rounded-md py-2 flex items-center justify-center">
                                <ExternalLink className="w-3 h-3 mr-1" />
                                LinkedIn Profile
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        ),
        story: (
            <div className="space-y-12">
                <div className="text-center space-y-4">
                    <Badge className="bg-blue-500/20 text-blue-300 border-blue-400/30 inline-flex items-center px-2 py-1 rounded-md">
                        <Calendar className="w-3 h-3 mr-1" />
                        Our Journey
                    </Badge>
                    <h3 className="text-4xl font-bold text-white">The FloatChat Story</h3>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Born from the frustration of accessing complex ocean data, FloatChat represents a paradigm shift in how we interact with scientific information.
                    </p>
                </div>

                <Card className="bg-slate-800/40 backdrop-blur-lg border border-white/10">
                    <CardContent className="p-8">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="space-y-6">
                                <div className="space-y-4">
                                    <h4 className="text-2xl font-bold text-white">The Challenge</h4>
                                    <p className="text-gray-300 leading-relaxed">
                                        Oceanographic data, particularly from ARGO floats, contains invaluable insights about our planet's climate system. However, accessing and interpreting this data required specialized knowledge, complex tools, and significant technical expertise.
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <h4 className="text-2xl font-bold text-white">The Solution</h4>
                                    <p className="text-gray-300 leading-relaxed">
                                        We envisioned an AI assistant that could understand natural language questions about ocean data and provide instant, accurate responses with beautiful visualizations. FloatChat transforms complex NetCDF files into conversational insights.
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="bg-slate-700/50 rounded-xl p-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Lightbulb className="w-6 h-6 text-yellow-400" />
                                        <h5 className="text-lg font-semibold text-white">Innovation</h5>
                                    </div>
                                    <p className="text-gray-300 text-sm">First conversational AI specifically designed for oceanographic data analysis</p>
                                </div>

                                <div className="bg-slate-700/50 rounded-xl p-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Shield className="w-6 h-6 text-green-400" />
                                        <h5 className="text-lg font-semibold text-white">Reliability</h5>
                                    </div>
                                    <p className="text-gray-300 text-sm">Built on robust RAG architecture ensuring accurate, contextual responses</p>
                                </div>

                                <div className="bg-slate-700/50 rounded-xl p-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Users className="w-6 h-6 text-blue-400" />
                                        <h5 className="text-lg font-semibold text-white">Accessibility</h5>
                                    </div>
                                    <p className="text-gray-300 text-sm">Making ocean data accessible to everyone, from researchers to students</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <div className="space-y-8">
                    <h4 className="text-2xl font-bold text-center text-white">Development Timeline</h4>
                    <div className="relative max-w-2xl mx-auto">
                        {timeline.map((item, index) => (
                            <div key={index} className="flex items-start gap-6">
                                <div className="flex flex-col items-center flex-shrink-0">
                                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold">
                                        '{item.year.slice(-2)}
                                    </div>
                                    {index < timeline.length - 1 && (
                                        <div className="w-px h-24 bg-gradient-to-b from-blue-500 to-transparent mt-2"></div>
                                    )}
                                </div>
                                <div className="flex-1 pb-12">
                                    <Card className="bg-slate-800/40 backdrop-blur-lg border border-white/10 hover:border-blue-400/50 transition-all duration-300">
                                        <CardContent className="p-6">
                                            <div className="flex flex-wrap items-center gap-2 mb-2">
                                                <Badge className="bg-blue-500/20 text-blue-300 px-2 py-0.5 text-sm rounded-md">{item.month} {item.year}</Badge>
                                                <Badge variant="outline" className="border-white/20 text-gray-300 px-2 py-0.5 text-sm rounded-md">{item.milestone}</Badge>
                                            </div>
                                            <h5 className="text-lg font-semibold text-white mb-2">{item.title}</h5>
                                            <p className="text-gray-300">{item.description}</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        ),
        team: (
            <div className="space-y-12">
                <div className="text-center space-y-4">
                    <Badge className="bg-purple-500/20 text-purple-300 border-purple-400/30 inline-flex items-center px-2 py-1 rounded-md">
                        <Users className="w-3 h-3 mr-1" />
                        Our Team
                    </Badge>
                    <h3 className="text-4xl font-bold text-white">Meet the Innovators</h3>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        A diverse team of ocean scientists, AI engineers, and designers united by a shared passion for making ocean data accessible to everyone.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {team.map((member, index) => (
                        <Card key={index} className="bg-slate-800/40 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 group">
                            <CardContent className="p-8">
                                <div className="flex items-start gap-4">
                                    <div className={`w-16 h-16 bg-gradient-to-r ${member.color} rounded-2xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                        {member.avatar}
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-xl font-bold text-white mb-1">{member.name}</h4>
                                        <p className="text-blue-300 font-medium mb-3">{member.role}</p>
                                        <p className="text-gray-300 text-sm mb-4 leading-relaxed">{member.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {member.skills.map((skill, skillIndex) => (
                                                <Badge key={skillIndex} variant="outline" className="border-white/20 text-gray-300 text-xs px-2 py-0.5 rounded-md">
                                                    {skill}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <Card className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 backdrop-blur-lg border border-white/10">
                    <CardContent className="p-8 text-center">
                        <div className="space-y-6">
                            <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto">
                                <Heart className="w-8 h-8 text-white" />
                            </div>
                            <div>
                                <h4 className="text-2xl font-bold text-white mb-4">Join Our Mission</h4>
                                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                                    We're always looking for passionate individuals who share our vision of democratizing ocean data. Whether you're a marine scientist, developer, or designer, there's a place for you in our journey.
                                </p>
                                <Button className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 transform hover:scale-105 transition-all duration-200 rounded-md py-2 px-4 text-white flex items-center justify-center mx-auto">
                                    <Mail className="mr-2 h-4 w-4" />
                                    Get In Touch
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        ),
        technology: (
            <div className="space-y-12">
                <div className="text-center space-y-4">
                    <Badge className="bg-green-500/20 text-green-300 border-green-400/30 inline-flex items-center px-2 py-1 rounded-md">
                        <Cpu className="w-3 h-3 mr-1" />
                        Technology Stack
                    </Badge>
                    <h3 className="text-4xl font-bold text-white">Cutting-Edge Architecture</h3>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        FloatChat leverages the latest advances in AI, cloud computing, and data science to deliver unprecedented ocean data accessibility.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {technologies.map((tech, index) => (
                        <Card key={index} className="bg-slate-800/40 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 group">
                            <CardContent className="p-6">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <tech.icon className="w-5 h-5 text-white" />
                                        </div>
                                        <h4 className="text-lg font-semibold text-white">{tech.name}</h4>
                                    </div>
                                    <p className="text-gray-300 text-sm leading-relaxed">{tech.desc}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <Card className="bg-slate-800/40 backdrop-blur-lg border border-white/10">
                    <CardHeader className="p-6 pb-2">
                        <CardTitle className="flex items-center gap-2 text-white text-xl">
                            <BarChart3 className="w-5 h-5 text-blue-400" />
                            System Architecture
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 pt-4">
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                            <div className="text-center space-y-3">
                                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto">
                                    <Database className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h5 className="font-semibold text-white">ARGO Data</h5>
                                    <p className="text-xs text-gray-400">NetCDF Ingestion</p>
                                </div>
                            </div>
                            <ArrowRight className="w-6 h-6 text-gray-400 mx-auto hidden md:block" />
                            <div className="text-center space-y-3">
                                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto">
                                    <Brain className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h5 className="font-semibold text-white">AI Processing</h5>
                                    <p className="text-xs text-gray-400">RAG Pipeline</p>
                                </div>
                            </div>
                            <ArrowRight className="w-6 h-6 text-gray-400 mx-auto hidden md:block" />
                            <div className="text-center space-y-3">
                                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto">
                                    <MessageSquare className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h5 className="font-semibold text-white">Chat Interface</h5>
                                    <p className="text-xs text-gray-400">User Experience</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        )
    };

    return (
        <>
            <Header />
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/95 to-indigo-900 text-white font-sans">
                <CustomStyles />
                <div className="fixed inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-blue-500/10 to-transparent rounded-full animate-pulse"></div>
                    <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-indigo-500/10 to-transparent rounded-full animate-pulse delay-1000"></div>
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/5 rounded-full animate-bounce"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-indigo-400/5 rounded-full animate-bounce delay-500"></div>
                </div>

                <div className="relative z-10">
                    <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
                        <div className="max-w-7xl mx-auto text-center space-y-8">
                            <div className="space-y-6">
                                <Badge className="bg-blue-500/20 text-blue-300 border-blue-400/30 hover:bg-blue-500/30 transition-colors text-lg px-4 py-2 rounded-md inline-flex items-center">
                                    <Waves className="w-4 h-4 mr-2" />
                                    About FloatChat
                                </Badge>

                                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                                    <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                                        Revolutionizing
                                    </span>
                                    <br />
                                    <span className="text-white">Ocean Data Discovery</span>
                                </h1>

                                <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                                    We're on a mission to democratize access to oceanographic data through the power of conversational AI, making complex scientific insights as easy to access as asking a question.
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                                {stats.map((stat, index) => (
                                    <Card key={index} className="bg-slate-800/40 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105">
                                        <CardContent className="p-6 text-center">
                                            <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                                            <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                                            <p className="text-sm text-gray-400">{stat.label}</p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="py-12 px-4 sm:px-6 lg:px-8">
                        <div className="max-w-7xl mx-auto">
                            <div className="flex flex-wrap justify-center gap-2 mb-12">
                                {[
                                    { id: 'mission', label: 'Our Mission', icon: Target },
                                    { id: 'story', label: 'Our Story', icon: Lightbulb },
                                    { id: 'team', label: 'Our Team', icon: Users },
                                    { id: 'technology', label: 'Technology', icon: Cpu }
                                ].map((tab) => (
                                    <Button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        variant={activeTab === tab.id ? "default" : "outline"}
                                        className={`flex items-center rounded-md px-4 py-2 ${activeTab === tab.id
                                                ? 'bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white'
                                                : 'border border-white/20 text-gray-300 hover:bg-white/10 hover:text-white'
                                            } transform hover:scale-105 transition-all duration-200`}
                                    >
                                        <tab.icon className="mr-2 h-4 w-4" />
                                        {tab.label}
                                    </Button>
                                ))}
                            </div>

                            <div className="animate-fade-in">
                                {tabContent[activeTab]}
                            </div>
                        </div>
                    </section>

                    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-indigo-600/20">
                        <div className="max-w-4xl mx-auto text-center space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-4xl font-bold text-white">Ready to Dive In?</h2>
                                <p className="text-xl text-gray-300">Experience the future of ocean data discovery with FloatChat. Join us in making oceanographic insights accessible to all.</p>
                            </div>

                            <div className="flex flex-wrap justify-center gap-4">
                                <Button className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 transform hover:scale-105 transition-all duration-200 px-6 py-3 rounded-md text-white flex items-center">
                                    <MessageSquare className="mr-2 h-4 w-4" />
                                    Try FloatChat
                                </Button>
                                <Button variant="outline" className="border border-white/20 text-gray-300 hover:bg-white/10 px-6 py-3 rounded-md flex items-center">
                                    <ExternalLink className="mr-2 h-4 w-4" />
                                    View Repository
                                </Button>
                            </div>
                        </div>
                    </section>

                    <Footer />
                </div>
            </div>
        </>
    );
};

export default About;
