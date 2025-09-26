import React from 'react'
import { Waves } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-slate-900/50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="space-y-4">
                            <div className="flex items-center space-x-2">
                                <Waves className="h-6 w-6 text-blue-400" />
                                <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                                    FloatChat
                                </span>
                            </div>
                            <p className="text-gray-400 text-sm max-w-xs">
                                AI-powered ocean data discovery platform for the next generation of marine research.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-white font-semibold mb-4">Product</h4>
                            <ul className="space-y-2 text-sm">
                                {['Features', 'Pricing', 'API', 'Documentation'].map((item) => (
                                    <li key={item}>
                                        <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-semibold mb-4">Company</h4>
                            <ul className="space-y-2 text-sm">
                                {['About', 'Blog', 'Careers', 'Contact'].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-semibold mb-4">Legal</h4>
                            <ul className="space-y-2 text-sm">
                                {['Privacy Policy', 'Terms of Service', 'Security'].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-gray-400">
                        <p>© 2025 FloatChat. Built for SIH 2025. Empowering ocean research through AI.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer