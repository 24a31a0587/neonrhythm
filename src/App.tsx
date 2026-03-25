import React from 'react';
import { SnakeGame } from './components/SnakeGame';
import { MusicPlayer } from './components/MusicPlayer';
import { Music, Gamepad2, Zap } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-neon-blue selection:text-black">
      {/* Background Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-neon-blue/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-neon-pink/10 blur-[120px] rounded-full" />
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-8 py-6 border-b border-white/5 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-neon-blue rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(0,255,255,0.5)]">
            <Zap className="w-6 h-6 text-black fill-current" />
          </div>
          <h1 className="text-2xl font-black italic tracking-tighter uppercase">
            Neon<span className="text-neon-blue">Rhythm</span>
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-white/40">
          <a href="#" className="hover:text-neon-blue transition-colors">Arcade</a>
          <a href="#" className="hover:text-neon-pink transition-colors">Studio</a>
          <a href="#" className="hover:text-neon-green transition-colors">Leaderboard</a>
        </nav>

        <div className="flex items-center gap-4">
          <div className="px-4 py-1.5 rounded-full border border-white/10 text-[10px] font-bold uppercase tracking-widest bg-white/5">
            System Online
          </div>
        </div>
      </header>

      <main className="relative z-10 container mx-auto px-4 py-12 flex flex-col lg:flex-row items-center justify-center gap-12">
        {/* Left Section: Music Player */}
        <motion.section 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="w-full lg:w-auto flex flex-col items-center gap-6"
        >
          <div className="flex items-center gap-2 self-start mb-2">
            <Music className="w-4 h-4 text-neon-pink" />
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-white/50">Audio Core</h2>
          </div>
          <MusicPlayer />
        </motion.section>

        {/* Center Section: Snake Game */}
        <motion.section 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="flex items-center gap-2 self-start mb-2">
            <Gamepad2 className="w-4 h-4 text-neon-blue" />
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-white/50">Neural Grid</h2>
          </div>
          <SnakeGame />
        </motion.section>

        {/* Right Section: Stats/Info (Optional but adds to aesthetic) */}
        <motion.section 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="hidden xl:flex flex-col gap-6 w-64"
        >
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-neon-green">Active Session</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-[10px] uppercase text-white/40">
                <span>Uptime</span>
                <span className="text-white">00:42:15</span>
              </div>
              <div className="flex justify-between text-[10px] uppercase text-white/40">
                <span>Latency</span>
                <span className="text-white">12ms</span>
              </div>
              <div className="flex justify-between text-[10px] uppercase text-white/40">
                <span>Difficulty</span>
                <span className="text-white">Hardcore</span>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-neon-blue/5 border border-neon-blue/20">
            <p className="text-[10px] leading-relaxed text-white/60 italic">
              "The grid is a digital frontier. I tried to picture clusters of information as they moved through the computer..."
            </p>
          </div>
        </motion.section>
      </main>

      {/* Footer Decoration */}
      <footer className="fixed bottom-0 left-0 w-full p-8 flex justify-between items-end pointer-events-none opacity-20">
        <div className="text-[120px] font-black italic leading-none tracking-tighter select-none">
          GRID
        </div>
        <div className="text-right space-y-1">
          <div className="text-xs font-mono uppercase tracking-widest">Protocol 7.0.4</div>
          <div className="text-[10px] font-mono uppercase tracking-widest">© 2026 NEON RHYTHM</div>
        </div>
      </footer>
    </div>
  );
}
