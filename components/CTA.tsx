import React from 'react';
import { Button } from './ui/Button';
import { GlassCard } from './ui/GlassCard';
import { Download } from 'lucide-react';

export const CTA = () => {
  return (
    <section className="py-32 bg-gradient-to-r from-raitha-teal to-raitha-sky relative">
      <div className="max-w-[1440px] mx-auto px-8 relative z-10">
        <div className="text-center mb-16 text-white">
          <h2 className="text-5xl font-bold mb-6">Join the Agricultural Revolution</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">Whether you're a farmer looking for reliable workers or a worker seeking better opportunities.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <GlassCard className="bg-white/10 text-center flex flex-col items-center hover:bg-white/15">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-3xl mb-6">👷</div>
            <h3 className="text-2xl font-bold text-white mb-4">I'm Looking for Work</h3>
            <ul className="text-left space-y-2 text-white/80 mb-8 text-sm">
                <li>✓ Find jobs instantly</li>
                <li>✓ Earn 30% more</li>
                <li>✓ Get paid same day</li>
            </ul>
            <Button className="bg-white text-raitha-teal w-full">Download Worker App</Button>
          </GlassCard>

          <GlassCard className="bg-white/10 text-center flex flex-col items-center hover:bg-white/15">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-3xl mb-6">🚜</div>
            <h3 className="text-2xl font-bold text-white mb-4">I Need Workers</h3>
            <ul className="text-left space-y-2 text-white/80 mb-8 text-sm">
                <li>✓ Post jobs in 3 minutes</li>
                <li>✓ Verified quality workers</li>
                <li>✓ Save 15-40% costs</li>
            </ul>
            <Button className="bg-white text-raitha-teal w-full">Download Farmer App</Button>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};