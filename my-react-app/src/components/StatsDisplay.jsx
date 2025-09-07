












// import React, { useState, useEffect } from "react";
// import { Users, Link, Eye, TrendingUp } from 'lucide-react';

// function StatsDisplay() {
//   const [stats, setStats] = useState({
//     totalUsers: 0,
//     totalUrls: 0,
//     totalVisits: 0,
//     averageVisitsPerUrl: 0
//   });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchStats = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch('http://localhost:3400/detailed-stats');
//         const data = await response.json();
        
//         if (data.success) {
//           setStats(data.data);
//         } else {
//           setError('Failed to fetch statistics');
//         }
//       } catch (err) {
//         console.error('Error fetching stats:', err);
//         setError('Error connecting to server');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchStats();
    
//     // Refresh stats every 30 seconds
//     const interval = setInterval(fetchStats, 30000);
//     return () => clearInterval(interval);
//   }, []);

//   if (loading) {
//     return (
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
//         {[...Array(4)].map((_, i) => (
//           <div key={i} className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 shadow-lg">
//             <div className="h-8 bg-gray-200 rounded-lg mb-2 animate-pulse"></div>
//             <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
//           </div>
//         ))}
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 shadow-lg mb-12">
//         <div className="text-red-500">{error}</div>
//       </div>
//     );
//   }

//   return (
//     <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
//       {/* <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 group">
//         <div className="flex justify-center mb-2">
//           <Users className="w-8 h-8 text-violet-600" />
//         </div>
//         <div className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent mb-2">
//           {stats.totalUsers}
//         </div>
//         <div className="text-gray-600 font-medium">Registered Users</div>
//       </div> */}

//                 <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 text-center hover:shadow-xl transition-all duration-300 group">
//                   <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">99.9%</div>
//                   <div className="text-gray-600 font-medium">Uptime</div>
//                 </div>
      
//       <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 group">
//         <div className="flex justify-center mb-2">
//           <Link className="w-8 h-8 text-blue-600" />
//         </div>
//         <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
//           {stats.totalUrls}
//         </div>
//         <div className="text-gray-600 font-medium">Links Shortened</div>
//       </div>
      
//       <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 group">
//         <div className="flex justify-center mb-2">
//           <Eye className="w-8 h-8 text-cyan-600" />
//         </div>
//         <div className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-emerald-600 bg-clip-text text-transparent mb-2">
//           {stats.totalVisits}
//         </div>
//         <div className="text-gray-600 font-medium">Total Visits</div>
//       </div>
      
//       <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 group">
//         <div className="flex justify-center mb-2">
//           <TrendingUp className="w-8 h-8 text-emerald-600" />
//         </div>
//         <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-violet-600 bg-clip-text text-transparent mb-2">
//           {parseFloat(stats.averageVisitsPerUrl).toFixed(1)}
//         </div>
//         <div className="text-gray-600 font-medium">Avg. Visits/Link</div>
//       </div>
//     </div>
//   );
// }

// export default StatsDisplay;










import React, { useState, useEffect } from "react";
import { Link, Eye, TrendingUp } from 'lucide-react';

function StatsDisplay() {
  const [stats, setStats] = useState({
    totalUrls: 0,
    totalVisits: 0,
    averageVisitsPerUrl: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://url-shortener-e83c.onrender.com/stats/detailed-stats');
        const data = await response.json();
        
        if (data.success) {
          setStats(data.data);
        } else {
          setError('Failed to fetch statistics');
        }
      } catch (err) {
        console.error('Error fetching stats:', err);
        setError('Error connecting to server');
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
    
    // Refresh stats every 30 seconds
    const interval = setInterval(fetchStats, 30000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 shadow-lg">
            <div className="h-8 bg-gray-200 rounded-lg mb-2 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 shadow-lg mb-12">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 group">
        <div className="flex justify-center mb-2">
          <Link className="w-8 h-8 text-blue-600" />
        </div>
        <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
          {stats.totalUrls}
        </div>
        <div className="text-gray-600 font-medium">Links Shortened</div>
      </div>
      
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 group">
        <div className="flex justify-center mb-2">
          <Eye className="w-8 h-8 text-cyan-600" />
        </div>
        <div className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-emerald-600 bg-clip-text text-transparent mb-2">
          {stats.totalVisits}
        </div>
        <div className="text-gray-600 font-medium">Total Visits</div>
      </div>
      
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 group">
        <div className="flex justify-center mb-2">
          <TrendingUp className="w-8 h-8 text-emerald-600" />
        </div>
        <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-violet-600 bg-clip-text text-transparent mb-2">
          {parseFloat(stats.averageVisitsPerUrl).toFixed(1)}
        </div>
        <div className="text-gray-600 font-medium">Avg. Visits/Link</div>
      </div>
    </div>
  );
}

export default StatsDisplay;