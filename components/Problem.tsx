import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Frown, HeartCrack, Banknote, TrendingDown, AlertTriangle } from 'lucide-react';

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const BentoCard: React.FC<BentoCardProps> = ({ children, className = "", delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
      className={`relative overflow-hidden bg-[#151717] border border-white/5 rounded-3xl p-8 group hover:border-white/10 transition-colors duration-500 shadow-2xl ${className}`}
    >
      {/* Spotlight Effect */}
      <div className="absolute -inset-px bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="relative z-10 h-full flex flex-col">
        {children}
      </div>
    </motion.div>
  );
};

export const Problem = () => {
  return (
    <section id="problem" className="py-32 bg-[#0B0D0D] relative overflow-hidden">
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-raitha-teal font-bold tracking-[0.2em] text-xs uppercase mb-6 block">The Challenge</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight">
              Agricultural Labor <br />
              <span className="text-gray-600">is Fundamentally Broken.</span>
            </h2>
          </div>
          <div className="max-w-xs text-gray-400 text-lg leading-relaxed">
            The connection between 99M farmers and 260M workers is inefficient, offline, and exploitative.
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">
          
          {/* Card 1: Farmers (Tall) */}
          <BentoCard className="md:row-span-2 bg-gradient-to-b from-white/5 to-transparent">
            <div className="w-12 h-12 rounded-full bg-raitha-orange/10 flex items-center justify-center mb-6 text-raitha-orange ring-1 ring-raitha-orange/20">
              <Frown size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">For Farmers</h3>
            <div className="text-5xl font-mono font-bold text-raitha-orange mb-4 tracking-tighter">25%</div>
            <p className="text-gray-500 text-xs uppercase tracking-wider mb-6 font-bold">Labor Shortage</p>
            <p className="text-gray-400 leading-relaxed mb-6 flex-grow text-sm">
              Crops rot in the fields because help doesn't arrive on time. Farmers lose ₹45,000 crores annually during critical harvest periods.
            </p>
            <div className="mt-auto pt-6 border-t border-white/5">
               <div className="flex items-center gap-2 text-sm text-red-400/80">
                  <AlertTriangle size={16} />
                  <span>High Crop Wastage</span>
               </div>
            </div>
          </BentoCard>

          {/* Card 2: Workers (Wide) */}
          <BentoCard className="md:col-span-2 bg-gradient-to-br from-raitha-teal/5 to-transparent" delay={0.2}>
             <div className="flex flex-col md:flex-row gap-8 h-full">
                <div className="flex-1">
                   <div className="w-12 h-12 rounded-full bg-raitha-teal/10 flex items-center justify-center mb-6 text-raitha-teal ring-1 ring-raitha-teal/20">
                      <HeartCrack size={24} />
                   </div>
                   <h3 className="text-2xl font-bold text-white mb-2">For Workers</h3>
                   <p className="text-gray-400 leading-relaxed mb-6 text-sm">
                      Millions want to work but can't find it. Middlemen take 30-40% of their hard-earned daily wages.
                   </p>
                   <div className="flex gap-4">
                      <div className="bg-black/40 p-4 rounded-2xl border border-white/5">
                         <div className="text-2xl font-bold text-white mb-1">150</div>
                         <div className="text-[10px] text-gray-500 font-bold uppercase">Days Unemployed</div>
                      </div>
                      <div className="bg-black/40 p-4 rounded-2xl border border-white/5">
                         <div className="text-2xl font-bold text-white mb-1">₹1.8L Cr</div>
                         <div className="text-[10px] text-gray-500 font-bold uppercase">Lost Income</div>
                      </div>
                   </div>
                </div>
                <div className="flex-1 flex items-center justify-center relative min-h-[200px]">
                   {/* Graphic Representation */}
                   <div className="relative w-full h-32">
                      <div className="absolute inset-x-0 top-1/2 h-px bg-white/10 border-t border-dashed border-white/20"></div>
                      <div className="absolute left-[10%] top-1/2 -translate-y-1/2 w-4 h-4 bg-red-500/20 rounded-full flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                      </div>
                      <div className="absolute right-[10%] top-1/2 -translate-y-1/2 w-4 h-4 bg-red-500/20 rounded-full flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                      </div>
                      <div className="absolute inset-x-[20%] top-1/2 -translate-y-1/2 flex justify-center">
                         <span className="bg-[#151717] px-3 py-1 text-red-400 text-[10px] font-bold uppercase tracking-wider border border-red-500/20 rounded-full">Disconnected</span>
                      </div>
                   </div>
                </div>
             </div>
          </BentoCard>

          {/* Card 3: The Market (Square) */}
          <BentoCard delay={0.3}>
            <div className="w-12 h-12 rounded-full bg-raitha-wheat/10 flex items-center justify-center mb-6 text-raitha-wheat ring-1 ring-raitha-wheat/20">
               <Banknote size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-1">Unorganized Market</h3>
            <div className="text-3xl font-bold text-white mb-2">95% Offline</div>
            <p className="text-gray-500 text-sm leading-relaxed">
               No discovery platform. No wage transparency. Pure inefficiency.
            </p>
          </BentoCard>

          {/* Card 4: The Result (Square) */}
          <BentoCard delay={0.4}>
             <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 text-white ring-1 ring-white/10">
               <TrendingDown size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-1">Rural Economy</h3>
            <div className="text-3xl font-bold text-white mb-2">Stagnant</div>
            <p className="text-gray-500 text-sm leading-relaxed">
               Without liquid labor markets, rural productivity cannot grow.
            </p>
          </BentoCard>

        </div>
      </div>
    </section>
  );
};