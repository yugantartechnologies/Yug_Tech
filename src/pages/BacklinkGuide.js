import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function BacklinkGuide() {
    const backlinkStrategies = [
        {
            title: "Local Business Directories",
            platforms: [
                "Google My Business",
                "Bing Places",
                "Apple Maps Connect",
                "Facebook Business Page",
                "JustDial",
                "IndiaMart",
                "TradeIndia",
                "Yellow Pages India"
            ],
            tips: "Ensure consistent NAP (Name, Address, Phone) across all listings"
        },
        {
            title: "Industry-Specific Directories",
            platforms: [
                "Clutch.co",
                "GoodFirms",
                "ITFirms",
                "AppFutura",
                "DesignRush",
                "TopDevelopers",
                "TechBehemoths"
            ],
            tips: "Focus on technology and software development directories"
        },
        {
            title: "Local Community & Forums",
            platforms: [
                "Reddit (r/India, r/Entrepreneur)",
                "Quora",
                "Stack Overflow",
                "GitHub Community",
                "LinkedIn Groups",
                "Facebook Groups (Ahmedabad Tech)"
            ],
            tips: "Provide valuable answers and establish expertise"
        },
        {
            title: "Content Sharing Platforms",
            platforms: [
                "Medium",
                "Dev.to",
                "Hashnode",
                "Hackernoon",
                "Towards Data Science",
                "Analytics Vidhya"
            ],
            tips: "Publish high-quality technical articles and tutorials"
        },
        {
            title: "Guest Posting Opportunities",
            platforms: [
                "Tech Blogs",
                "Industry Publications",
                "Local News Websites",
                "Educational Platforms",
                "Startup Blogs"
            ],
            tips: "Offer to write about Ahmedabad's tech ecosystem"
        },
        {
            title: "Social Media & Influencer Outreach",
            platforms: [
                "LinkedIn Influencers",
                "Tech YouTubers",
                "Instagram Tech Pages",
                "Twitter Tech Communities",
                "Facebook Tech Groups"
            ],
            tips: "Share your expertise and collaborate with local influencers"
        }
    ];

    const localKeywords = [
        "IT company Ahmedabad",
        "software development Ahmedabad",
        "web development company Ahmedabad",
        "mobile app development Ahmedabad",
        "best IT services Navrangpura",
        "tech company Vijay Cross Road",
        "IT consultancy Ahmedabad",
        "digital marketing Ahmedabad"
    ];

    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <Navbar />
            <PageHeader
                title="Backlink Generation Guide"
                subtitle="Complete strategy for building high-quality backlinks for YugAntar Technologies"
                backgroundImage="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&h=400&fit=crop"
            />

            <main className="flex-grow py-16">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Introduction */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            Backlink Building Strategy for Ahmedabad IT Company
                        </h2>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                            This comprehensive guide outlines proven strategies to build high-quality backlinks
                            for YugAntar Technologies, focusing on local Ahmedabad market and technical expertise.
                        </p>
                    </div>

                    {/* Local Keywords Section */}
                    <div className="bg-gradient-to-r from-orange-100 to-orange-50 border border-slate-200 rounded-2xl p-8 mb-12 shadow-md">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6">Target Local Keywords</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {localKeywords.map((keyword, index) => (
                                <div key={index} className="site-card rounded-lg p-4 border border-slate-200 hover:border-orange-500/20 transition duration-300">
                                    <span className="text-orange-500 font-semibold text-sm">{keyword}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Backlink Strategies */}
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        {backlinkStrategies.map((strategy, index) => (
                            <div key={index} className="site-card rounded-xl p-6 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-4">{strategy.title}</h3>
                                    <div className="mb-6">
                                        <h4 className="font-semibold text-slate-600 mb-3 text-sm">Platforms:</h4>
                                        <ul className="space-y-2">
                                            {strategy.platforms.map((platform, idx) => (
                                                <li key={idx} className="text-slate-600 text-sm flex items-center">
                                                    <span className="w-1.5 h-1.5 bg-emerald-400/80 rounded-lg mr-3"></span>
                                                    {platform}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="site-card rounded-lg p-4 mt-auto">
                                    <h4 className="font-semibold text-orange-500 mb-2 flex items-center gap-2 text-sm">
                                        <span>💡</span> Pro Tip:
                                    </h4>
                                    <p className="text-slate-600 text-xs leading-relaxed">{strategy.tips}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Content Creation Strategy */}
                    <div className="site-card rounded-xl p-8 mb-12">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Content Creation for Backlinks</h3>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center p-6 rounded-2xl bg-white/40 border border-slate-200/50">
                                <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 text-orange-500">
                                    <span className="text-2xl">📝</span>
                                </div>
                                <h4 className="font-bold text-slate-900 mb-2">Technical Articles</h4>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Write in-depth tutorials on MERN stack, Python, AI/ML, and trending technologies
                                </p>
                            </div>
                            <div className="text-center p-6 rounded-2xl bg-white/40 border border-slate-200/50">
                                <div className="w-14 h-14 bg-orange-100/40 border border-orange-200/30 rounded-xl flex items-center justify-center mx-auto mb-4 text-orange-500">
                                    <span className="text-2xl">📊</span>
                                </div>
                                <h4 className="font-bold text-slate-900 mb-2">Industry Reports</h4>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Create reports on Ahmedabad's tech ecosystem and IT industry trends
                                </p>
                            </div>
                            <div className="text-center p-6 rounded-2xl bg-white/40 border border-slate-200/50">
                                <div className="w-14 h-14 bg-purple-500/10 border border-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 text-purple-400">
                                    <span className="text-2xl">🎥</span>
                                </div>
                                <h4 className="font-bold text-slate-900 mb-2">Video Content</h4>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Produce YouTube videos on coding tutorials and career guidance
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Action Plan */}
                    <div className="bg-gradient-to-r from-orange-100 to-orange-50 border border-slate-200 rounded-2xl p-8 mb-12 shadow-md">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6">30-Day Action Plan</h3>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 bg-emerald-500 text-slate-900 rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">1</div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-lg">Week 1: Foundation</h4>
                                    <p className="text-slate-600 text-sm mt-1">Set up Google My Business, claim listings, optimize social profiles</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 bg-orange-500 text-white rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">2</div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-lg">Week 2: Content Creation</h4>
                                    <p className="text-slate-600 text-sm mt-1">Publish 3-5 blog posts and share on relevant communities</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 bg-purple-500 text-slate-900 rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">3</div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-lg">Week 3: Outreach</h4>
                                    <p className="text-slate-600 text-sm mt-1">Contact local blogs, forums, and industry directories for backlinks</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 bg-orange-500 text-slate-900 rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">4</div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-lg">Week 4: Monitoring & Scaling</h4>
                                    <p className="text-slate-600 text-sm mt-1">Track backlinks, analyze performance, and scale successful strategies</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="text-center max-w-2xl mx-auto mt-16">
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Build Backlinks?</h3>
                        <p className="text-slate-600 mb-8 leading-relaxed">
                            Start implementing these strategies today to improve your search rankings and online visibility.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/blog"
                                className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors shadow-md"
                            >
                                Read Our Blog Posts
                            </Link>
                            <Link
                                to="/contact"
                                className="px-8 py-3 border border-slate-700 text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-semibold rounded-lg transition-colors"
                            >
                                Get Backlink Consultation
                            </Link>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}