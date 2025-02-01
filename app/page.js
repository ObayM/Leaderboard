'use client'
import React, { useState, useEffect } from 'react';
import { Trophy, Crown, Star, Sparkles, Award } from 'lucide-react';
import Footer from '@/components/footer';

const leaderboardData = [
    { "name": "Hannah Shaban", "points": 24 },
    { "name": "Heba Shafeek Omar", "points": 24 },
    { "name": "Mohamed El Sayed Abdel Raouf El Sayed", "points": 24 },
    { "name": "Marwan Ahmed Hassan", "points": 24 },
    { "name": "Nourhan Ayman Hamdy Yehia", "points": 23 },
    { "name": "Mohammed Ali", "points": 23 },
    { "name": "Ahmed Nasr Ahmed", "points": 23 },
    { "name": "Yassin Ali Gaber Abdelaziz", "points": 22 },
    { "name": "Eslam Emam Hussien", "points": 22 },
    { "name": "Omar Abdelhamied Elazab Mohamed", "points": 22 },
    { "name": "Aser Tamer Maher Mohamed Osman", "points": 22 },
    { "name": "Lujain Salem", "points": 22 },
    { "name": "Rawan Zaki", "points": 20 },
    { "name": "Yassmein Zazoa", "points": 19 },
    { "name": "Ziad Elkafoury", "points": 19 },
    { "name": "Thomas Keroles", "points": 18 },
    { "name": "Yasmin Mohamed Gamal", "points": 18 },
    { "name": "Shahd Galal", "points": 18 },
    { "name": "Amr Ehab AbdelAziz Arafat", "points": 17 },
    { "name": "Mostafa Ahmed Rezk", "points": 17 },
    { "name": "Yara Nagi Ahmed", "points": 17 },
    { "name": "Salwa Waleed", "points": 16 },
    { "name": "Moaaz Mohamed", "points": 16 },
    { "name": "Nour Hussein", "points": 16 },
    { "name": "Nancy Shaban Hassan", "points": 15 },
    { "name": "AbdulRahman Ayman Saleh", "points": 14 },
    { "name": "Hamsa", "points": 14 }
];

const ParticleEffect = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-blue-500/20 rounded-full animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 10}s`
          }}
        />
      ))}
    </div>
  );
};

const LeaderboardDisplay = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Calculate ranks considering ties
  const calculateRanks = (data) => {
    let currentRank = 1;
    let previousPoints = null;
    let skipPositions = 0;

    return data.map((entry, index) => {
      if (previousPoints !== entry.points) {
        currentRank = currentRank + skipPositions;
        skipPositions = 0;
      } else {
        skipPositions++;
      }
      previousPoints = entry.points;
      return { ...entry, rank: currentRank };
    });
  };

  const rankedData = calculateRanks(leaderboardData);

  const getGradient = (rank) => {
    const gradients = {
      1: "bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-500",
      2: "bg-gradient-to-r from-slate-400 via-gray-300 to-slate-400",
      3: "bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700"
    };
    return gradients[rank] || "bg-gradient-to-r from-indigo-600 via-blue-500 to-indigo-600";
  };

  const getBackground = (rank) => {
    if (rank === 1) return "bg-gradient-to-r from-yellow-900/20 to-yellow-900/10";
    if (rank === 2) return "bg-gradient-to-r from-gray-800/20 to-gray-800/10";
    if (rank === 3) return "bg-gradient-to-r from-amber-900/20 to-amber-900/10";
    return "bg-gradient-to-r from-slate-800/20 to-slate-800/10";
  };

  const getPointsColor = (points) => {
    if (points >= 20) return "text-yellow-400";
    if (points >= 15) return "text-blue-400";
    if (points >= 10) return "text-green-400";
    if (points > 0) return "text-purple-400";
    return "text-red-400";
  };

  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 p-4 sm:p-8 relative overflow-hidden">
      <ParticleEffect />
      <div className="max-w-4xl mx-auto relative">
        <div className="relative overflow-hidden bg-slate-900/50 backdrop-blur-xl rounded-3xl shadow-2xl p-6 border border-slate-800">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          
          <div className="relative">
            <div className="flex flex-col items-center justify-center mb-12">
              <div className="relative">
                <Crown className="w-16 h-16 text-yellow-500 animate-pulse mb-4" />
                <Sparkles className="w-6 h-6 text-yellow-400 absolute -top-2 -right-2 animate-spin" style={{ animationDuration: '3s' }} />
              </div>
              <h1 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 mb-2">
                Scholars&apos; Research Club Quiz Leaderboard
              </h1>
              <div className="w-40 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full animate-pulse"></div>
            </div>
            
            <div className="space-y-4">
              {rankedData.map((entry, index) => (
                <div
                  key={index}
                  className={`${getBackground(entry.rank)} rounded-2xl p-6 transition-all duration-500 
                    hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/20 
                    border border-slate-800/50 backdrop-blur-sm
                    ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ 
                    transitionDelay: `${index * 100}ms`,
                    animation: 'fadeInUp 0.5s ease forwards',
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className="flex items-center gap-6">
                    <div className={`${getGradient(entry.rank)} w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold shadow-lg relative group`}>
                      {entry.rank === 1 ? (
                        <Crown className="w-8 h-8 animate-pulse" />
                      ) : (
                        <span className="text-xl">{entry.rank}</span>
                      )}
                      <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                          <h3 className="font-semibold text-gray-100 text-xl mb-2 flex items-center gap-2">
                            {entry.name}
                            {entry.rank <= 3 && <Award className={`w-5 h-5 ${entry.rank === 1 ? 'text-yellow-500' : entry.rank === 2 ? 'text-gray-400' : 'text-amber-700'}`} />}
                          </h3>
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2">
                              <Trophy className={`w-5 h-5 ${entry.rank === 1 ? 'text-yellow-500' : 'text-blue-400'}`} />
                              <span className={`text-lg font-bold ${getPointsColor(entry.points)} bg-slate-800 px-3 py-1 rounded-lg`}>
                                {entry.points} points
                              </span>
                            </div>
                            {entry.rank <= 3 && (
                              <div className="flex ml-2">
                                {[...Array(4 - entry.rank)].map((_, i) => (
                                  <Star key={i} className="w-4 h-4 text-yellow-500" style={{ 
                                    animation: 'starTwinkle 1.5s ease-in-out infinite',
                                    animationDelay: `${i * 0.5}s`
                                  }} />
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes starTwinkle {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </div>
    <Footer />
    </>
  );
};

export default LeaderboardDisplay;