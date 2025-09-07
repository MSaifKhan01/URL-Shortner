// import React, { useState } from "react";

// function GenerateUrl() {
//   const [makeUrl, setMakeUrl] = useState("");
//   const [shortUrl, setShortUrl] = useState("");
//   const [shortID, setShortID] = useState("");
//   const [copySuccess, setCopySuccess] = useState(false);

//   const handleURLChange = () => {
//     if (makeUrl === "") {
//       return;
//     }

//     fetch(`https://url-shortener-e83c.onrender.com/url/add`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ url: makeUrl }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setMakeUrl("");
//         if (data.msg === "url already created") {
//           setShortUrl(data.urlPresent.shortid);
//           setShortID(data.urlPresent.shortid);
//         } else {
//           setShortUrl(data.url);
//           setShortID(data.url);
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   const CopyLinkFunc = () => {
//     // Copy short URL to clipboard
//     navigator.clipboard
//       .writeText(`https://url-shortener-e83c.onrender.com/url/get/${shortID}`)
//       .then(() => {
//         // console.log("Link copied to clipboard");
//         setCopySuccess(true);
//         setTimeout(() => {
//           setCopySuccess(false);
//         }, 5000); // Reset message after 3 seconds
//       })
//       .catch((err) => {
//         console.error("Failed to copy link: ", err);
//         alert(err);
//       });
//   };

//   const ShareLinkFunc = () => {
//     // Share short URL using Web Share API
//     if (navigator.share) {
//       navigator
//         .share({
//           title: "Short URL",
//           text: "Check out this short URL:",
//           url: `https://url-shortener-e83c.onrender.com/url/get/${shortID}`,
//         })
//         .then(() => console.log("Link shared successfully"))
//         .catch((error) => console.error("Error sharing link:", error));
//     } else {
//       console.log("Web Share API not supported");
//     }
//   };

//   return (
//     <div className="container">
//       <div className="form-container">
//         <h1 className="form-title">URL Shortener</h1>
//         <div className="input-container">
//           <input
//             className="input-field"
//             type="text"
//             placeholder="Enter Long Url"
//             value={makeUrl}
//             onChange={(e) => setMakeUrl(e.target.value)}
//           />
//         </div>
//         <button className="submit-button" onClick={handleURLChange}>
//           Submit
//         </button>
//       </div>
//       <div className="short-url-container">
//         {shortID && (
//           <p className="short-url">
//             Short URL:{" "}
//             <a
//               className="short-url-link"
//               href={`https://url-shortener-e83c.onrender.com/url/get/${shortID}`}
//               target="_blank" // Open in a new tab
//               rel="noopener noreferrer" // Recommended for security
//             >
//               {`https://url-shortener-e83c.onrender.com/url/get/${shortID}`}
//             </a>
//           </p>
//         )}

//         {copySuccess && shortID && (
//           <span
//             style={{ color: "green", fontSize: "56px", fontWeight: "bold" }}
//           >
//             Link copied!
//           </span>
//         )}

//         <div className="copy-share-btn">
//           <button onClick={CopyLinkFunc}>Copy Link</button>
//           <button onClick={ShareLinkFunc}>Share Link</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default GenerateUrl;


import React, { useState } from "react";
import { Globe, Copy, Share2, ExternalLink, Zap, CheckCircle, LinkIcon, Sparkles, TrendingUp, Shield } from 'lucide-react';
import Toast from './Toast';
import StatsDisplay from './StatsDisplay';

function GenerateUrl() {
  const [makeUrl, setMakeUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [shortID, setShortID] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'info') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  const isValidUrl = (string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  const handleURLChange = async () => {
    if (makeUrl === "") {
      showToast("Please enter a URL to shorten", "error");
      return;
    }

    if (!isValidUrl(makeUrl)) {
      showToast("Please enter a valid URL (include http:// or https://)", "error");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("https://url-shortener-e83c.onrender.com/url/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: makeUrl }),
      });

      const data = await response.json();
      setMakeUrl("");

      if (data.msg === "url already created") {
        setShortUrl(data.urlPresent.shortid);
        setShortID(data.urlPresent.shortid);
        showToast("URL already exists! Here's your short link.", "info");
      } else {
        setShortUrl(data.url);
        setShortID(data.url);
        showToast("URL shortened successfully!", "success");
      }
    } catch (err) {
      console.error(err);
      showToast("Failed to shorten URL. Please try again.", "error");
    } finally {
      setIsLoading(false);
    }
  };

  const CopyLinkFunc = () => {
    const fullUrl = `https://url-shortener-e83c.onrender.com/url/get/${shortID}`;
    navigator.clipboard
      .writeText(fullUrl)
      .then(() => {
        showToast("Link copied to clipboard!", "success");
      })
      .catch((err) => {
        console.error("Failed to copy link: ", err);
        showToast("Failed to copy link", "error");
      });
  };

  const ShareLinkFunc = () => {
    const fullUrl = `https://url-shortener-e83c.onrender.com/url/get/${shortID}`;
    if (navigator.share) {
      navigator
        .share({
          title: "Short URL",
          text: "Check out this short URL:",
          url: fullUrl,
        })
        .then(() => showToast("Link shared successfully!", "success"))
        .catch((error) => {
          console.error("Error sharing link:", error);
          showToast("Failed to share link", "error");
        });
    } else {
      showToast("Web Share API not supported on this device", "info");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleURLChange();
    }
  };

  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-blue-50 to-cyan-50">
        <div className="absolute inset-0 opacity-40">
          <div className="w-full h-full bg-gradient-to-r from-violet-100/50 to-blue-100/50"></div>
        </div>
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-violet-400/30 to-blue-400/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-500"></div>

      <div className="relative z-10 pt-24 lg:pt-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-violet-200 mb-6">
              <Sparkles className="w-4 h-4 text-violet-600" />
              <span className="text-sm font-medium text-violet-700">Free URL Shortener</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Shorten
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600 bg-clip-text text-transparent">
                Your URLs
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Transform long, complex URLs into clean, shareable links.{" "}
              <span className="font-semibold bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
                Fast, reliable, and completely free.
              </span>
            </p>
            <StatsDisplay />
          </div>

          {/* URL Shortener Form */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-blue-600 rounded-3xl blur opacity-20"></div>
              <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-6 sm:p-8 lg:p-10">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-violet-600 to-blue-600 rounded-xl flex items-center justify-center">
                    <LinkIcon className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">Create Short Link</h2>
                </div>
                <div className="flex flex-col lg:flex-row gap-4">
                  <div className="flex-1 relative">
                    <input
                      className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:border-violet-500 focus:outline-none transition-all duration-300 placeholder-gray-400 bg-white/70 backdrop-blur-sm"
                      type="text"
                      placeholder="Paste your long URL here... (e.g., https://example.com)"
                      value={makeUrl}
                      onChange={(e) => setMakeUrl(e.target.value)}
                      onKeyPress={handleKeyPress}
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-500/10 to-blue-500/10 opacity-0 hover:opacity-100 transition-opacity pointer-events-none"></div>
                  </div>
                  <button
                    className="px-8 py-4 bg-gradient-to-r from-violet-600 to-blue-600 text-white font-semibold rounded-2xl hover:from-violet-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none group relative overflow-hidden"
                    onClick={handleURLChange}
                    disabled={isLoading}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    {isLoading ? (
                      <div className="flex items-center space-x-3 relative z-10">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Shortening...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-3 relative z-10">
                        <Zap className="w-5 h-5" />
                        <span>Shorten URL</span>
                      </div>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Result Section */}
          {shortID && (
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-3xl blur opacity-20"></div>
                <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-6 sm:p-8 lg:p-10 animate-in slide-in-from-bottom duration-500">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">Success!</h3>
                      <p className="text-gray-600">Your shortened URL is ready to share</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 mb-6 border border-gray-200">
                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <div className="flex items-center space-x-3 flex-1 min-w-0">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-violet-500 rounded-xl flex items-center justify-center">
                          <Globe className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-gray-500 mb-1">Your short link:</p>
                          <a
                            className="text-blue-600 hover:text-blue-800 font-semibold text-lg break-all hover:underline transition-colors"
                            href={`https://url-shortener-e83c.onrender.com/url/get/${shortID}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {`https://url-shortener-e83c.onrender.com/url/get/${shortID}`}
                          </a>
                        </div>
                        <ExternalLink className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={CopyLinkFunc}
                      className="flex-1 flex items-center justify-center space-x-3 px-6 py-4 bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-violet-700 transform hover:scale-105 transition-all duration-300 shadow-lg group"
                    >
                      <Copy className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      <span>Copy Link</span>
                    </button>
                    <button
                      onClick={ShareLinkFunc}
                      className="flex-1 flex items-center justify-center space-x-3 px-6 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold rounded-2xl hover:from-violet-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg group"
                    >
                      <Share2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      <span>Share Link</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Features Preview */}
          {!shortID && (
            <div className="max-w-4xl mx-auto mt-16">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-violet-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Lightning Fast</h3>
                  <p className="text-gray-600">Generate shortened URLs instantly with our optimized infrastructure.</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Secure & Reliable</h3>
                  <p className="text-gray-600">Your links are safe with enterprise-grade security and 99.9% uptime.</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Analytics Ready</h3>
                  <p className="text-gray-600">Track clicks and performance with detailed analytics insights.</p>
                </div>
              </div>
            </div>
          )}

          {/* Custom Toast */}
          {toast && (
            <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />
          )}
        </div>
      </div>
    </section>
  );
}

export default GenerateUrl;