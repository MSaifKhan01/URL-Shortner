



// import React from "react"; 
// import { ExternalLink, Zap, Shield, BarChart3, Users, Globe, Heart, Star } from 'lucide-react';

// function About() { 
//   return ( 
//     <section className="min-h-screen relative overflow-hidden">
//       {/* Animated Background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
//         <div className="absolute inset-0 opacity-60">
//           <div className="w-full h-full bg-gradient-to-r from-purple-100/50 to-blue-100/50"></div>
//         </div>
//       </div>

//       {/* Floating Elements */}
//       <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
//       <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-400/15 to-indigo-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
//       <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-gradient-to-r from-violet-400/25 to-purple-400/25 rounded-full blur-3xl animate-pulse delay-500"></div>

//       <div className="relative z-10 pt-24 lg:pt-32 px-4 sm:px-6 lg:px-8 pb-16">
//         <div className="max-w-6xl mx-auto">
//           {/* Header */}
//           <div className="text-center mb-16">
//             <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-200 mb-6">
//               <Heart className="w-4 h-4 text-purple-600" />
//               <span className="text-sm font-medium text-purple-700">About LinkShrink</span>
//             </div>
//             <h1 className="text-5xl sm:text-6xl font-bold mb-6">
//               <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
//                 Our Story
//               </span>
//             </h1>
//             <div className="w-24 h-1.5 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mb-8"></div>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//               Empowering millions of users worldwide with simple, fast, and reliable URL shortening services.
//             </p>
//           </div>

//           <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
//             {/* Mission & Values */}
//             <div className="space-y-8">
//               <div className="relative group">
//                 <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
//                 <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20">
//                   <div className="flex items-center space-x-3 mb-6">
//                     <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
//                       <Star className="w-6 h-6 text-white" />
//                     </div>
//                     <h2 className="text-2xl font-bold text-gray-800">Our Mission</h2>
//                   </div>
//                   <p className="text-gray-600 leading-relaxed text-lg">
//                     Welcome to our URL shortening service! We are here to make your long and unwieldy URLs shorter, making them easier to manage and share. Whether you're posting links on social media, sending them in emails, or using them anywhere else, our tool simplifies the process.
//                   </p>
//                 </div>
//               </div>

//               <div className="relative group">
//                 <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
//                 <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20">
//                   <div className="flex items-center space-x-3 mb-6">
//                     <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
//                       <Users className="w-6 h-6 text-white" />
//                     </div>
//                     <h2 className="text-2xl font-bold text-gray-800">Why Choose Us?</h2>
//                   </div>
//                   <p className="text-gray-600 leading-relaxed text-lg">
//                     We take great pride in delivering a speedy and dependable service that helps you efficiently share your content. Our platform also provides detailed analytics, allowing you to monitor the performance of your shortened links and gain valuable insights into their usage.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Contact & Stats */}
//             <div className="space-y-8">
//               <div className="relative group">
//                 <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 rounded-3xl blur opacity-30"></div>
//                 <div className="relative bg-gradient-to-r from-violet-600 to-purple-600 rounded-3xl p-8 text-white">
//                   <div className="flex items-center space-x-3 mb-6">
//                     <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
//                       <Globe className="w-6 h-6 text-white" />
//                     </div>
//                     <h2 className="text-2xl font-bold">Get In Touch</h2>
//                   </div>
//                   <p className="mb-8 opacity-90 text-lg leading-relaxed">
//                     Thank you for choosing our URL shortener. If you have any questions, suggestions, or feedback, please do not hesitate to contact us.
//                   </p>
//                   <a 
//                     href="https://www.linkedin.com/in/mohd-saif-khan-3b4979202/" 
//                     target="_blank" 
//                     rel="noopener noreferrer" 
//                     className="inline-flex items-center space-x-3 bg-white text-violet-600 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-lg group"
//                   >
//                     <span>Connect on LinkedIn</span>
//                     <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                   </a>
//                 </div>
//               </div>

//               {/* Stats Grid */}
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 text-center hover:shadow-xl transition-all duration-300 group">
//                   <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">99.9%</div>
//                   <div className="text-gray-600 font-medium">Uptime</div>
//                 </div>
//                 <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 text-center hover:shadow-xl transition-all duration-300 group">
//                   <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">⚡</div>
//                   <div className="text-gray-600 font-medium">Fast Response</div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Enhanced Features Section */}
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             <div className="relative group">
//               <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-violet-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
//               <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
//                 <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-violet-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
//                   <Zap className="w-7 h-7 text-white" />
//                 </div>
//                 <h3 className="text-lg font-semibold text-gray-800 mb-3">Lightning Fast</h3>
//                 <p className="text-gray-600">Generate shortened URLs instantly with our optimized infrastructure and global CDN.</p>
//               </div>
//             </div>

//             <div className="relative group">
//               <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
//               <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
//                 <div className="w-14 h-14 bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
//                   <Shield className="w-7 h-7 text-white" />
//                 </div>
//                 <h3 className="text-lg font-semibold text-gray-800 mb-3">Secure & Reliable</h3>
//                 <p className="text-gray-600">Your links are protected with enterprise-grade security and 99.9% guaranteed uptime.</p>
//               </div>
//             </div>

//             <div className="relative group">
//               <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
//               <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
//                 <div className="w-14 h-14 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
//                   <BarChart3 className="w-7 h-7 text-white" />
//                 </div>
//                 <h3 className="text-lg font-semibold text-gray-800 mb-3">Analytics Ready</h3>
//                 <p className="text-gray-600">Track clicks, locations, and performance with detailed real-time analytics.</p>
//               </div>
//             </div>

//             <div className="relative group">
//               <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
//               <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
//                 <div className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
//                   <Globe className="w-7 h-7 text-white" />
//                 </div>
//                 <h3 className="text-lg font-semibold text-gray-800 mb-3">Global Reach</h3>
//                 <p className="text-gray-600">Accessible worldwide with lightning-fast response times across all continents.</p>
//               </div>
//             </div>
//           </div>

//           {/* Achievement Stats */}
//           <div className="mt-16 text-center">
//             <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-8">
//               Trusted by Millions
//             </h3>
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//               <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
//                 <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">1M+</div>
//                 <div className="text-gray-600 font-medium">URLs Shortened</div>
//               </div>
//               <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
//                 <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">50K+</div>
//                 <div className="text-gray-600 font-medium">Happy Users</div>
//               </div>
//               <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
//                 <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">100+</div>
//                 <div className="text-gray-600 font-medium">Countries</div>
//               </div>
//               <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
//                 <div className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent mb-2">24/7</div>
//                 <div className="text-gray-600 font-medium">Support</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   ); 
// } 

// export default About;












import React, { useState, useEffect } from "react"; 
import { ExternalLink, Zap, Shield, BarChart3, Users, Globe, Heart, Star } from 'lucide-react';

function About() { 
  const [stats, setStats] = useState({
    totalUrls: 0,
    totalVisits: 0,
    averageVisitsPerUrl: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('https://url-shortener-e83c.onrender.com/detailed-stats');
        const data = await response.json();
        
        if (data.success) {
          setStats(data.data);
        }
      } catch (err) {
        console.error('Error fetching stats:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return ( 
    <section className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
        <div className="absolute inset-0 opacity-60">
          <div className="w-full h-full bg-gradient-to-r from-purple-100/50 to-blue-100/50"></div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-400/15 to-indigo-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-gradient-to-r from-violet-400/25 to-purple-400/25 rounded-full blur-3xl animate-pulse delay-500"></div>

      <div className="relative z-10 pt-24 lg:pt-32 px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-200 mb-6">
              <Heart className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium text-purple-700">About LinkShrink</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Our Story
              </span>
            </h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Empowering millions of users worldwide with simple, fast, and reliable URL shortening services.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Mission & Values */}
            <div className="space-y-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">Our Mission</h2>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Welcome to our URL shortening service! We are here to make your long and unwieldy URLs shorter, making them easier to manage and share. Whether you're posting links on social media, sending them in emails, or using them anywhere else, our tool simplifies the process.
                  </p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">Why Choose Us?</h2>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    We take great pride in delivering a speedy and dependable service that helps you efficiently share your content. Our platform also provides detailed analytics, allowing you to monitor the performance of your shortened links and gain valuable insights into their usage.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact & Stats */}
            <div className="space-y-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 rounded-3xl blur opacity-30"></div>
                <div className="relative bg-gradient-to-r from-violet-600 to-purple-600 rounded-3xl p-8 text-white">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold">Get In Touch</h2>
                  </div>
                  <p className="mb-8 opacity-90 text-lg leading-relaxed">
                    Thank you for choosing our URL shortener. If you have any questions, suggestions, or feedback, please do not hesitate to contact us.
                  </p>
                  <a 
                    href="https://www.linkedin.com/in/mohd-saif-khan-3b4979202/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center space-x-3 bg-white text-violet-600 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-lg group"
                  >
                    <span>Connect on LinkedIn</span>
                    <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 text-center hover:shadow-xl transition-all duration-300 group">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">99.9%</div>
                  <div className="text-gray-600 font-medium">Uptime</div>
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 text-center hover:shadow-xl transition-all duration-300 group">
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">⚡</div>
                  <div className="text-gray-600 font-medium">Fast Response</div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Features Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-violet-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-violet-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Lightning Fast</h3>
                <p className="text-gray-600">Generate shortened URLs instantly with our optimized infrastructure and global CDN.</p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Secure & Reliable</h3>
                <p className="text-gray-600">Your links are protected with enterprise-grade security and 99.9% guaranteed uptime.</p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <BarChart3 className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Analytics Ready</h3>
                <p className="text-gray-600">Track clicks, locations, and performance with detailed real-time analytics.</p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Globe className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Global Reach</h3>
                <p className="text-gray-600">Accessible worldwide with lightning-fast response times across all continents.</p>
              </div>
            </div>
          </div>

          {/* Achievement Stats */}
          <div className="mt-16 text-center">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-8">
              Our Impact
            </h3>
            {loading ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
                    <div className="h-10 bg-gray-200 rounded-lg mb-3 animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                    {stats.totalUrls}+
                  </div>
                  <div className="text-gray-600 font-medium">URLs Shortened</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                    {stats.totalVisits}+
                  </div>
                  <div className="text-gray-600 font-medium">Total Visits</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
                  <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {parseFloat(stats.averageVisitsPerUrl).toFixed(1)}
                  </div>
                  <div className="text-gray-600 font-medium">Avg. Visits/Link</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  ); 
} 

export default About;