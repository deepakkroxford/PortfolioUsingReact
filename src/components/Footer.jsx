import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Facebook, Twitter, Linkedin,Github } from 'lucide-react';

const Footer = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
        window.scrollTo(0, 0);
    };

    return (
        <footer className="bg-black text-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* About Section */}
                    {/* <div className="space-y-4">
            <h2 className="text-lg font-semibold">About</h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              Welcome to our website! We provide high-quality solutions tailored to your needs. Our team is dedicated to delivering exceptional results for every project.
            </p>
          </div> */}

                    {/* Navigation Links */}
                    <div className="space-y-4">
                        <h2 className="text-lg font-semibold">Quick Links</h2>
                        <ul className="flex space-x-4">
                            {['Home', 'About', 'Contact', 'Projects'].map((item) => (
                                <li key={item}>
                                    <button
                                        onClick={() => handleNavigation(`/${item.toLowerCase()}`)}
                                        className="text-sm text-gray-400 hover:text-white transition-colors duration-300 transform hover:translate-y-1"
                                    >
                                        {item}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div className="space-y-4">
                        <h2 className="text-lg font-semibold">Connect With Us</h2>
                        <ul className="flex space-x-4">
                            {[
                                { name: 'Facebook', icon: Facebook, url: 'https://www.facebook.com' },
                                { name: 'Twitter', icon: Twitter, url: 'https://www.twitter.com' },
                                { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com' },
                                {name:'Github', icon:Github,url: 'https://github.com'},
                            ].map((social) => (
                                <li key={social.name}>
                                    <a
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-110"
                                    >
                                        <social.icon className="w-5 h-5 text-white" />
                                        <span className="sr-only">{social.name}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-gray-800 pt-4 text-center text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Deepak Kumar Singh. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;