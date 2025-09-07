





const UrlModel = require('../models/url.model'); 
const UserModel = require('../models/user.model'); 

async function detailedStats(req, res) {
    try {
        // Get user count
        const userCount = await UserModel.countDocuments();
        
        // Get URL count
        const urlCount = await UrlModel.countDocuments();
        
        // Get total visits across all URLs
        const totalVisitsResult = await UrlModel.aggregate([
            {
                $project: {
                    visitCount: { $size: "$visithistory" }
                }
            },
            {
                $group: {
                    _id: null,
                    totalVisits: { $sum: "$visitCount" }
                }
            }
        ]);
        
        const totalVisits = totalVisitsResult.length > 0 ? totalVisitsResult[0].totalVisits : 0;

        res.json({
            success: true,
            data: {
                totalUsers: userCount,
                totalUrls: urlCount,
                totalVisits: totalVisits,
                averageVisitsPerUrl: urlCount > 0 ? (totalVisits / urlCount).toFixed(2) : 0
            }
        });
    } catch (error) {
        console.error('Error fetching detailed statistics:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching statistics'
        });
    }
};

module.exports = { detailedStats };
