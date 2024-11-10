import React from 'react';
import { Trophy, Crown, AlertTriangle, Star } from 'lucide-react';

const leaderboardData = [
  { name: "Nourhan Ayman Hamdy Yehia", points: 10, notes: "" },
  { name: "Salwa Shahen", points: 7, notes: "" },
  { name: "Shahd Galal Al Soud", points: 7, notes: "" },
  { name: "Ziad Ahmed Mohamed Elkafoury", points: 5, notes: "Excused (Week 2)" },
  { name: "Yassmein Zazoa Sarwat", points: 2, notes: "" },
  { name: "Abdelrahman Ayman", points: 2, notes: "1 Warning" },
  { name: "Hamza Sayed Abdelhafez Mahmoud", points: 0, notes: "1 Warning" },
  { name: "Adham Ayman Mohamed Elgamil", points: 0, notes: "2 Warnings" }
];

const LeaderboardDisplay = () => {
  const getGradient = (index) => {
    const gradients = {
      0: "bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-500",
      1: "bg-gradient-to-r from-slate-400 via-gray-300 to-slate-400",
      2: "bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700"
    };
    return gradients[index] || "bg-gradient-to-r from-indigo-600 via-blue-500 to-indigo-600";
  };

  const getBackground = (index) => {
    if (index === 0) return "bg-gradient-to-r from-yellow-900/10 to-yellow-900/5";
    if (index === 1) return "bg-gradient-to-r from-gray-800/10 to-gray-800/5";
    if (index === 2) return "bg-gradient-to-r from-amber-900/10 to-amber-900/5";
    return "bg-gradient-to-r from-slate-800/10 to-slate-800/5";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="relative overflow-hidden bg-slate-900/50 backdrop-blur-xl rounded-3xl shadow-2xl p-6 mb-8 border border-slate-800">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl"></div>
          
          <div className="relative">
            <div className="flex items-center justify-center mb-8">
              <Crown className="w-8 h-8 text-yellow-500 animate-pulse mr-3" />
              <h1 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
                Leaderboard
              </h1>
            </div>
            
            <div className="space-y-4">
              {leaderboardData.map((entry, index) => (
                <div
                  key={index}
                  className={`${getBackground(index)} rounded-2xl p-4 transition-all duration-500 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/10 border border-slate-800/50`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`${getGradient(index)} w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold shadow-lg`}>
                      {index === 0 ? <Crown className="w-6 h-6" /> : index + 1}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div>
                          <h3 className="font-semibold text-gray-100 text-lg">
                            {entry.name}
                          </h3>
                          <div className="flex items-center gap-2 mt-1">
                            <Trophy className={`w-4 h-4 ${index === 0 ? 'text-yellow-500' : 'text-blue-400'}`} />
                            <span className="text-sm text-gray-400">
                              {entry.points} points
                            </span>
                            {index < 3 && (
                              <div className="flex">
                                {[...Array(3 - index)].map((_, i) => (
                                  <Star key={i} className="w-4 h-4 text-yellow-500 animate-pulse" />
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                        
                        {entry.notes && (
                          <div className="flex items-center gap-2 text-sm">
                            {entry.notes.includes("Warning") ? (
                              <AlertTriangle className="w-4 h-4 text-red-400 animate-pulse" />
                            ) : null}
                            <span className={`${entry.notes.includes("Warning") ? "text-red-400" : "text-gray-400"}`}>
                              {entry.notes}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardDisplay;