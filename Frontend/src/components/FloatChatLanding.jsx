import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

import {
    Waves,
    MessageSquare,
    Map,
    Database,
    Zap,
    Globe,
    ChevronRight,
    Play,
    Star,
    Check,
    Menu,
    X,
    Sparkles,
    Brain,
    BarChart3,
    Compass,
    Anchor,
    Fish
} from 'lucide-react';
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const FloatChatLanding = () => {

    const navigate = useNavigate();
    

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-x-hidden">
            {/* Animated Background Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-blue-500/10 to-transparent rounded-full animate-pulse"></div>
                <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-indigo-500/10 to-transparent rounded-full animate-pulse delay-1000"></div>
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/5 rounded-full animate-bounce"></div>
                <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-indigo-400/5 rounded-full animate-bounce delay-500"></div>
            </div>

            {/* Navigation */}
            <Header />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="text-center lg:text-left space-y-8">
                            <div className="space-y-4">
                                <Badge className="bg-blue-500/20 text-blue-300 border-blue-400/30 hover:bg-blue-500/30 transition-colors">
                                    <Sparkles className="w-3 h-3 mr-1" />
                                    AI-Powered Ocean Data Discovery
                                </Badge>
                                <div className="space-y-6">
                                    <h1 className="text-5xl lg:text-6xl font-black leading-tight">
                                        <span className="bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent">
                                            Dive Deep
                                        </span>
                                        <br />
                                        <span className="mt-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                                            Into the Ocean
                                        </span>
                                    </h1>
                                </div>
                                <p className="text-xl text-gray-300 max-w-2xl">
                                    Revolutionary AI chatbot that transforms complex ARGO oceanographic data into
                                    conversational insights. Discover ocean patterns through natural language queries.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Button
                                    onClick={() => navigate('/chatbot')}
                                    size="lg"
                                    className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 transform hover:scale-105 transition-all duration-300 shadow-xl text-lg px-8 py-3"
                                >
                                    <MessageSquare className="mr-2 h-5 w-5" />
                                    Start Exploring
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-white/20 text-blue-500 hover:bg-white/10 transform hover:scale-105 transition-all duration-300 text-lg px-8 py-3"
                                >
                                    <Play className="mr-2 h-5 w-5 text-blue-500 " />
                                    Watch Demo
                                </Button>
                            </div>

                            <div className="flex items-center gap-8 justify-center lg:justify-start text-sm text-gray-400">
                                <div className="flex items-center gap-2">
                                    <div className="flex -space-x-1">
                                        {[1, 2, 3, 4].map((i) => (
                                            <div key={i} className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 border-2 border-slate-900"></div>
                                        ))}
                                    </div>
                                    <span>Trusted by 50+ researchers</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                    <span className="ml-1">4.9/5</span>
                                </div>
                            </div>
                        </div>

                        {/* Hero Visual */}
                        <div className="relative">
                            {/* Gradient background */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-3xl blur-3xl"></div>

                            <Card className="relative bg-slate-800/50 backdrop-blur-lg border border-white/10 shadow-2xl 
                   rounded-3xl min-h-[420px]">
                                <CardContent className="p-8">
                                    <div className="space-y-6">
                                        {/* Status */}
                                        <div className="flex items-center gap-3 text-green-400">
                                            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                                            <span className="text-sm font-medium">AI Assistant Active</span>
                                        </div>

                                        {/* Query + Response */}
                                        <div className="space-y-4">
                                            <div className="bg-slate-700/50 rounded-xl p-4">
                                                <p className="text-gray-300 text-sm">
                                                    "Show me temperature profiles near the Indian Ocean for March 2024"
                                                </p>
                                            </div>

                                            <div className="bg-blue-500/20 rounded-xl p-4 border-l-4 border-blue-400">
                                                <div className="flex items-start gap-3">
                                                    <Brain className="w-5 h-5 text-blue-400 mt-0.5" />
                                                    <div className="space-y-2">
                                                        <p className="text-sm text-blue-100">
                                                            Found 47 ARGO floats with temperature data in that region.
                                                            Here's the analysis:
                                                        </p>
                                                        <div className="grid grid-cols-2 gap-2 text-xs">
                                                            <div className="bg-slate-800/50 rounded p-2">
                                                                <span className="text-gray-400">Avg Temp:</span>
                                                                <span className="text-white ml-1">26.8°C</span>
                                                            </div>
                                                            <div className="bg-slate-800/50 rounded p-2">
                                                                <span className="text-gray-400">Depth:</span>
                                                                <span className="text-white ml-1">0-2000m</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Loading Indicator */}
                                        <div className="flex items-center gap-2 text-xs text-gray-400 pt-10">
                                            <div className="flex gap-1">
                                                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                                                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-100"></div>
                                                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-200"></div>
                                            </div>
                                            <span>Processing ocean data...</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center space-y-4 mb-16">
                        <Badge className="bg-indigo-500/20 text-indigo-300 border-indigo-400/30">
                            <Zap className="w-3 h-3 mr-1" />
                            Powerful Features
                        </Badge>
                        <h2 className="text-4xl md:text-6xl font-bold">
                            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                                Ocean Intelligence
                            </span>
                            <br />
                            <span className="text-white">At Your Fingertips</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Transform complex oceanographic data into actionable insights with our cutting-edge AI platform
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: MessageSquare,
                                title: "Natural Language Queries",
                                description: "Ask questions in plain English and get intelligent responses about ocean data patterns, trends, and anomalies.",
                                gradient: "from-blue-500 to-cyan-500"
                            },
                            {
                                icon: Map,
                                title: "Interactive Geospatial Maps",
                                description: "Visualize ARGO float trajectories, data points, and oceanographic features on stunning interactive maps.",
                                gradient: "from-indigo-500 to-purple-500"
                            },
                            {
                                icon: BarChart3,
                                title: "Advanced Analytics",
                                description: "Generate depth-time plots, profile comparisons, and statistical analysis with AI-powered insights.",
                                gradient: "from-purple-500 to-pink-500"
                            },
                            {
                                icon: Database,
                                title: "Real-time Data Processing",
                                description: "Access live ARGO data with lightning-fast processing using optimized vector databases and RAG pipelines.",
                                gradient: "from-green-500 to-teal-500"
                            },
                            {
                                icon: Compass,
                                title: "Smart Data Discovery",
                                description: "AI-guided exploration helps you discover hidden patterns and correlations in vast ocean datasets.",
                                gradient: "from-orange-500 to-red-500"
                            },
                            {
                                icon: Globe,
                                title: "Global Ocean Coverage",
                                description: "Comprehensive access to worldwide ARGO float data with specialized focus on Indian Ocean regions.",
                                gradient: "from-teal-500 to-blue-500"
                            }
                        ].map((feature, index) => (
                            <Card
                                key={index}
                                className="group bg-slate-800/40 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl"
                            >
                                <CardContent className="p-6">
                                    <div className="space-y-4">
                                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} p-3 group-hover:scale-110 transition-transform duration-300`}>
                                            <feature.icon className="w-full h-full text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                                                {feature.title}
                                            </h3>
                                            <p className="text-gray-300 leading-relaxed">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center space-y-4 mb-16">
                        <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-400/30">
                            <Star className="w-3 h-3 mr-1" />
                            Testimonials
                        </Badge>
                        <h2 className="text-4xl md:text-5xl font-bold text-white">
                            Trusted by Ocean Scientists Worldwide
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Dr. Priya Sharma",
                                role: "Marine Scientist, INCOIS",
                                content: "FloatChat has revolutionized how we analyze ARGO data. What used to take hours of complex queries now takes minutes with natural language.",
                                rating: 5,
                                avatar: "PS"
                            },
                            {
                                name: "Prof. James Chen",
                                role: "Oceanographer, IIT Madras",
                                content: "The AI-powered insights have helped us discover temperature anomalies we would have missed. It's like having a research assistant that never sleeps.",
                                rating: 5,
                                avatar: "JC"
                            },
                            {
                                name: "Dr. Sarah Johnson",
                                role: "Climate Researcher, NOAA",
                                content: "Incredible tool for collaborative research. The interactive maps and real-time data processing are game-changers for our field studies.",
                                rating: 5,
                                avatar: "SJ"
                            }
                        ].map((testimonial, index) => (
                            <Card
                                key={index}
                                className="bg-slate-700/50 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
                            >
                                <CardContent className="p-6">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-1">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                            ))}
                                        </div>
                                        <p className="text-gray-300 italic leading-relaxed">
                                            "{testimonial.content}"
                                        </p>
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white font-semibold text-sm">
                                                {testimonial.avatar}
                                            </div>
                                            <div>
                                                <p className="text-white font-medium">{testimonial.name}</p>
                                                <p className="text-gray-400 text-sm">{testimonial.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center space-y-4 mb-16">
                        <Badge className="bg-green-500/20 text-green-300 border-green-400/30">
                            <Anchor className="w-3 h-3 mr-1" />
                            Pricing Plans
                        </Badge>
                        <h2 className="text-4xl md:text-5xl font-bold text-white">
                            Choose Your Ocean Adventure
                        </h2>
                        <p className="text-xl text-gray-300">
                            Flexible plans for researchers, institutions, and enterprises
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Explorer",
                                price: "Free",
                                description: "Perfect for individual researchers",
                                features: [
                                    "1,000 AI queries per month",
                                    "Basic data visualization",
                                    "Indian Ocean data access",
                                    "Community support"
                                ],
                                popular: false
                            },
                            {
                                name: "Professional",
                                price: "$49",
                                period: "/month",
                                description: "Ideal for research teams",
                                features: [
                                    "Unlimited AI queries",
                                    "Advanced analytics & insights",
                                    "Global ocean data access",
                                    "Custom visualizations",
                                    "Priority support",
                                    "Data export capabilities"
                                ],
                                popular: true
                            },
                            {
                                name: "Enterprise",
                                price: "Custom",
                                description: "For institutions & organizations",
                                features: [
                                    "Everything in Professional",
                                    "Custom data integration",
                                    "White-label solution",
                                    "Dedicated account manager",
                                    "SLA guarantee",
                                    "Advanced security features"
                                ],
                                popular: false
                            }
                        ].map((plan, index) => (
                            <Card
                                key={index}
                                className={`relative bg-slate-800/40 backdrop-blur-lg border transition-all duration-300 hover:transform hover:scale-105 ${plan.popular
                                    ? 'border-blue-400/50 ring-2 ring-blue-400/20 shadow-2xl shadow-blue-500/20'
                                    : 'border-white/10 hover:border-white/20'
                                    }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                        <Badge className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
                                            <Sparkles className="w-3 h-3 mr-1" />
                                            Most Popular
                                        </Badge>
                                    </div>
                                )}
                                <CardHeader className="text-center pb-6">
                                    <CardTitle className="text-2xl font-bold text-white">{plan.name}</CardTitle>
                                    <div className="space-y-2">
                                        <div className="flex items-baseline justify-center gap-1">
                                            <span className="text-4xl font-bold text-white">{plan.price}</span>
                                            {plan.period && <span className="text-gray-400">{plan.period}</span>}
                                        </div>
                                        <CardDescription className="text-gray-300">{plan.description}</CardDescription>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <ul className="space-y-3">
                                        {plan.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-center gap-3">
                                                <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                                                <span className="text-gray-300">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Button
                                        className={`w-full ${plan.popular
                                            ? 'bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600'
                                            : 'bg-slate-700 hover:bg-slate-600 text-white'
                                            } transform hover:scale-105 transition-all duration-200`}
                                        size="lg"
                                    >
                                        {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-indigo-600/20">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-6xl font-bold">
                            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                                Ready to Explore
                            </span>
                            <br />
                            <span className="text-white">The Ocean's Secrets?</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            Join thousands of researchers who are already discovering insights hidden in ocean data
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            onClick={() => navigate('/chatbot')}
                            size="lg"
                            className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 transform hover:scale-105 transition-all duration-300 shadow-xl text-lg px-8 py-4"
                        >
                            <Fish className="mr-2 h-5 w-5" />
                            Start Your Journey
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-white/20 text-blue-600 hover:bg-white/10 transform hover:scale-105 transition-all duration-300 text-lg px-8 py-4"
                        >
                            Schedule Demo
                        </Button>
                    </div>
                </div>
            </section>

            {/* Footer */}
          <Footer/>
        </div>
    );
};

export default FloatChatLanding;