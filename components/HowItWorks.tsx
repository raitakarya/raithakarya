import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, Search, MapPin, IndianRupee, PenTool, Users, BarChart3, CreditCard, Mic, Bell, Sun, Battery, Signal, Wifi, User, CheckCircle2, Clock, TrendingUp } from 'lucide-react';
import { Logo } from './ui/Logo';

export const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState<'worker' | 'farmer'>('worker');

  const steps = {
    worker: [
      { icon: <Mic />, title: "Voice-First Registration", desc: "Simply speak to create your profile. No forms, no typing." },
      { icon: <Search />, title: "Find Nearby Jobs", desc: "AI matches you to verified farms within 5km radius." },
      { icon: <MapPin />, title: "GPS Check-In", desc: "Digital attendance ensures you get paid for every minute." },
      { icon: <IndianRupee />, title: "Instant Daily Wages", desc: "Money sent directly to your bank immediately after work." }
    ],
    farmer: [
      { icon: <PenTool />, title: "Post Requirements", desc: "Voice or text. Define crop, acres, and dates in seconds." },
      { icon: <Users />, title: "AI Smart Matching", desc: "Get list of top-rated, available workers instantly." },
      { icon: <BarChart3 />, title: "Live Dashboard", desc: "Track who is on the field and work progress in real-time." },
      { icon: <CreditCard />, title: "Escrow Payments", desc: "Secure payments released only when work is verified." }
    ]
  };

  // Realistic Phone UI Components
  const PhoneStatusBar = () => (
    <div className="flex justify-between items-center px-6 py-3 w-full text-xs font-medium text-raitha-charcoal">
      <span>9:41</span>
      <div className="flex items-center gap-1.5">
        <Signal size={12} />
        <Wifi size={12} />
        <Battery size={12} />
      </div>
    </div>
  );

  const WorkerScreen = () => (
    <div className="flex flex-col h-full bg-[#F2F4F6]">
      {/* Header */}
      <div className="px-6 pt-2 pb-6 bg-raitha-teal rounded-b-[32px] shadow-lg relative z-10">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white/20 border-2 border-white/30 flex items-center justify-center text-white font-bold shadow-inner">
               {/* Brand Logo Small */}
               <Logo variant="white" className="h-4 w-auto" />
            </div>
            <div className="text-white">
              <p className="text-xs opacity-80 font-medium">Good Morning,</p>
              <p className="font-bold text-lg">Ramesh Kumar</p>
            </div>
          </div>
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white backdrop-blur-sm border border-white/10">
            <Bell size={18} />
          </div>
        </div>
        
        {/* Earnings Card */}
        <div className="bg-white rounded-2xl p-5 shadow-xl shadow-raitha-teal/10 mx-1 border border-white/50">
          <p className="text-xs text-gray-500 mb-1 font-bold uppercase tracking-wider">Available Balance</p>
          <div className="flex justify-between items-end">
            <h3 className="text-3xl font-bold text-raitha-charcoal tracking-tight">₹ 2,450</h3>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 px-2 py-1 rounded-lg flex items-center gap-1">
                <TrendingUp size={12} /> +₹850
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-6 flex-1 overflow-hidden flex flex-col gap-5">
        
        {/* Voice Search */}
        <div className="h-32 rounded-3xl bg-raitha-charcoal p-1 relative overflow-hidden group cursor-pointer shadow-xl shadow-raitha-charcoal/20">
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
            <div className="w-14 h-14 rounded-full bg-raitha-teal flex items-center justify-center mb-3 animate-pulse shadow-[0_0_30px_rgba(33,142,141,0.6)] group-hover:scale-110 transition-transform">
              <Mic className="text-white" size={24} />
            </div>
            <p className="text-white/90 text-sm font-medium">Tap to Find Work</p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-raitha-charcoal via-gray-900 to-black"></div>
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        </div>

        <p className="text-sm font-bold text-gray-400 px-2">Recommended Jobs</p>
        
        {/* Job Cards */}
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex gap-4 items-center transform hover:scale-105 transition-transform duration-300">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-xl shadow-sm">🌾</div>
          <div className="flex-1">
            <h4 className="font-bold text-sm text-gray-800">Wheat Harvesting</h4>
            <div className="flex items-center gap-2 mt-1">
                <span className="text-[10px] bg-gray-100 px-1.5 py-0.5 rounded text-gray-500">Singh Farms</span>
                <span className="text-[10px] text-gray-400">• 2.5km</span>
            </div>
          </div>
          <div className="text-right">
            <p className="font-bold text-raitha-teal text-lg">₹600</p>
            <p className="text-[10px] text-gray-400 font-medium">/day</p>
          </div>
        </div>

         <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex gap-4 items-center opacity-60 grayscale-[50%]">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-xl">💧</div>
          <div className="flex-1">
            <h4 className="font-bold text-sm text-gray-800">Irrigation Help</h4>
            <p className="text-xs text-gray-500 mt-1">Green Fields • 4km</p>
          </div>
          <div className="text-right">
            <p className="font-bold text-raitha-teal text-lg">₹450</p>
            <p className="text-[10px] text-gray-400 font-medium">/day</p>
          </div>
        </div>
      </div>
      
      {/* Nav Bar Mock */}
      <div className="h-20 bg-white/90 backdrop-blur-lg border-t border-gray-200 px-8 flex justify-between items-center text-gray-400 pb-4">
         <div className="text-raitha-teal flex flex-col items-center gap-1"><Search size={24} /><div className="w-1 h-1 rounded-full bg-raitha-teal"></div></div>
         <div className="flex flex-col items-center gap-1 hover:text-raitha-teal transition-colors"><MapPin size={24} /></div>
         <div className="flex flex-col items-center gap-1 hover:text-raitha-teal transition-colors"><IndianRupee size={24} /></div>
         <div className="flex flex-col items-center gap-1 hover:text-raitha-teal transition-colors"><User size={24} /></div>
      </div>
    </div>
  );

  const FarmerScreen = () => (
    <div className="flex flex-col h-full bg-[#F2F4F6]">
       {/* Header */}
      <div className="px-6 pt-4 pb-4 bg-white relative z-10 shadow-sm">
         <div className="flex justify-between items-center mb-6">
            <div>
               <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Dashboard</p>
               <h2 className="text-xl font-bold text-raitha-charcoal">Singh Farms</h2>
            </div>
            <div className="w-10 h-10 rounded-xl bg-raitha-gray flex items-center justify-center shadow-sm border border-gray-100">
               <Sun className="text-orange-400" size={20} />
            </div>
         </div>
         {/* Stats Row */}
         <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
            <div className="min-w-[100px] bg-raitha-teal/5 p-3 rounded-2xl border border-raitha-teal/20">
               <p className="text-[10px] text-raitha-teal font-bold uppercase mb-1 flex items-center gap-1"><Users size={10}/> Active</p>
               <p className="text-2xl font-bold text-raitha-charcoal">12</p>
            </div>
            <div className="min-w-[100px] bg-orange-50 p-3 rounded-2xl border border-orange-100">
               <p className="text-[10px] text-orange-600 font-bold uppercase mb-1 flex items-center gap-1"><IndianRupee size={10}/> Cost</p>
               <p className="text-2xl font-bold text-raitha-charcoal">6k</p>
            </div>
             <div className="min-w-[100px] bg-blue-50 p-3 rounded-2xl border border-blue-100">
               <p className="text-[10px] text-blue-600 font-bold uppercase mb-1">Weather</p>
               <p className="text-2xl font-bold text-raitha-charcoal">32°</p>
            </div>
         </div>
      </div>

      <div className="flex-1 px-6 py-4 flex flex-col gap-4 overflow-hidden">
         {/* Main Action */}
         <div className="bg-raitha-charcoal rounded-2xl p-5 text-white shadow-xl shadow-raitha-charcoal/20 flex justify-between items-center cursor-pointer group">
            <div>
               <h3 className="font-bold text-lg mb-1">Post New Job</h3>
               <p className="text-xs text-gray-400">Hire workers for tomorrow</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-raitha-teal transition-colors">
               <Users size={20} />
            </div>
         </div>

         <div className="flex justify-between items-center mt-2 px-1">
            <h4 className="font-bold text-gray-800 text-sm">Live Activity</h4>
            <span className="text-xs text-raitha-teal font-bold cursor-pointer hover:underline">View All</span>
         </div>

         {/* Worker List */}
         <div className="bg-white rounded-2xl p-1 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 p-3 border-b border-gray-50">
               <div className="w-10 h-10 rounded-full bg-gray-100 bg-[url('https://picsum.photos/50/50?random=1')] bg-cover ring-2 ring-white shadow-sm"></div>
               <div className="flex-1">
                  <h5 className="text-sm font-bold text-gray-800">Suresh M.</h5>
                  <p className="text-[10px] text-gray-400 flex items-center gap-1 mt-0.5">
                     <Clock size={10} /> Checked In: 8:00 AM
                  </p>
               </div>
               <div className="px-2.5 py-1 bg-green-50 text-green-700 border border-green-100 rounded-lg text-[10px] font-bold flex items-center gap-1">
                   <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                   Active
               </div>
            </div>
             <div className="flex items-center gap-3 p-3">
               <div className="w-10 h-10 rounded-full bg-gray-100 bg-[url('https://picsum.photos/50/50?random=2')] bg-cover ring-2 ring-white shadow-sm"></div>
               <div className="flex-1">
                  <h5 className="text-sm font-bold text-gray-800">Rajesh K.</h5>
                  <p className="text-[10px] text-gray-400 flex items-center gap-1 mt-0.5">
                     <Clock size={10} /> Checked In: 8:15 AM
                  </p>
               </div>
               <div className="px-2.5 py-1 bg-green-50 text-green-700 border border-green-100 rounded-lg text-[10px] font-bold flex items-center gap-1">
                   <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                   Active
               </div>
            </div>
         </div>
      </div>
      
       {/* Nav Bar Mock */}
      <div className="h-20 bg-white/90 backdrop-blur-lg border-t border-gray-200 px-8 flex justify-between items-center text-gray-400 pb-4">
         <div className="text-raitha-charcoal flex flex-col items-center gap-1"><BarChart3 size={24} /><div className="w-1 h-1 rounded-full bg-raitha-charcoal"></div></div>
         <div className="flex flex-col items-center gap-1 hover:text-raitha-teal transition-colors"><Users size={24} /></div>
         <div className="flex flex-col items-center gap-1 hover:text-raitha-teal transition-colors"><CreditCard size={24} /></div>
         <div className="flex flex-col items-center gap-1 hover:text-raitha-teal transition-colors"><User size={24} /></div>
      </div>
    </div>
  );

  return (
    <section id="how-it-works" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center mb-20 text-center">
           <span className="text-raitha-teal font-bold tracking-[0.2em] text-xs uppercase mb-4">Platform Features</span>
          <h2 className="text-4xl md:text-6xl font-bold text-raitha-charcoal mb-10 tracking-tight leading-tight">
            Simple for Everyone.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-raitha-orange to-raitha-wheat">Powerful for All.</span>
          </h2>
          
          {/* Custom Pill Tabs */}
          <div className="bg-gray-100 p-1.5 rounded-full flex gap-1 border border-gray-200 shadow-inner">
            {['worker', 'farmer'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab as 'worker' | 'farmer')}
                className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 relative overflow-hidden ${
                  activeTab === tab 
                    ? 'text-white shadow-lg' 
                    : 'text-gray-500 hover:text-raitha-charcoal'
                }`}
              >
                {/* Tab Background Animation */}
                {activeTab === tab && (
                  <motion.div 
                    layoutId="activeTab"
                    className={`absolute inset-0 ${tab === 'worker' ? 'bg-raitha-teal' : 'bg-raitha-charcoal'}`}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 capitalize">For {tab}s</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
           
           {/* Left Visual - The Phone Mockup */}
           <div className="lg:col-span-5 flex justify-center lg:justify-end order-2 lg:order-1">
             <div className="relative w-[340px] h-[680px]">
                {/* Phone Frame - Titanium Style */}
                <div className="absolute inset-0 bg-[#1a1a1a] rounded-[55px] p-[8px] shadow-2xl ring-1 ring-gray-400/20">
                   <div className="absolute inset-0 rounded-[48px] border-[4px] border-[#333] pointer-events-none z-50"></div>
                   {/* Screen */}
                   <div className="w-full h-full bg-white rounded-[46px] overflow-hidden relative">
                      {/* Dynamic Island */}
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[100px] h-[28px] bg-black rounded-full z-50 flex justify-center items-center transition-all duration-300 hover:w-[140px]">
                      </div>
                      
                      <PhoneStatusBar />
                      
                      <AnimatePresence mode='wait'>
                        <motion.div
                          key={activeTab}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 1.05 }}
                          transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                          className="h-[calc(100%-40px)]"
                        >
                           {activeTab === 'worker' ? <WorkerScreen /> : <FarmerScreen />}
                        </motion.div>
                      </AnimatePresence>
                   </div>
                </div>
                
                {/* Premium Glows behind phone */}
                <div className="absolute top-1/4 -right-20 w-80 h-80 bg-raitha-teal/20 rounded-full blur-[80px] -z-10"></div>
                <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-raitha-orange/15 rounded-full blur-[80px] -z-10"></div>
             </div>
           </div>

           {/* Right Steps */}
           <div className="lg:col-span-7 grid gap-6 order-1 lg:order-2">
              <AnimatePresence mode="wait">
                  <motion.div 
                    key={activeTab}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="grid md:grid-cols-2 gap-x-8 gap-y-8"
                  >
                    {steps[activeTab].map((step, idx) => (
                        <motion.div 
                          key={idx} 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex gap-5 items-start p-6 rounded-3xl transition-colors duration-300 cursor-default border border-transparent hover:border-gray-100 hover:bg-white hover:shadow-xl hover:shadow-black/5 group"
                        >
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 shadow-sm group-hover:scale-110 group-hover:rotate-3 ${
                              activeTab === 'worker' 
                                ? 'bg-raitha-teal/5 text-raitha-teal border border-raitha-teal/10 group-hover:bg-raitha-teal group-hover:text-white' 
                                : 'bg-raitha-charcoal/5 text-raitha-charcoal border border-raitha-charcoal/10 group-hover:bg-raitha-charcoal group-hover:text-white'
                            }`}>
                                {React.cloneElement(step.icon as React.ReactElement<any>, { size: 24 })}
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-raitha-charcoal mb-2 group-hover:text-raitha-teal transition-colors">{step.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                  </motion.div>
              </AnimatePresence>
           </div>
        </div>
      </div>
    </section>
  );
};