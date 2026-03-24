import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Smartphone, 
  ChevronRight, 
  Plus, 
  Zap, 
  CheckCircle2, 
  ArrowLeft,
  Search,
  LayoutGrid,
  Settings,
  Bell,
  Sparkles,
  MessageSquare,
  Languages,
  X
} from 'lucide-react';
import { cn } from '../lib/utils';

type Screen = 'onboarding' | 'home' | 'create' | 'actions';

export default function MobileDemo() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('onboarding');

  return (
    <div className="space-y-10">
      <header>
        <h2 className="text-3xl font-bold tracking-tight mb-2">Mobile Experience</h2>
        <p className="text-white/40">Previewing the AI Product Factory mobile interface.</p>
      </header>

      <div className="flex justify-center">
        {/* Phone Frame */}
        <div className="relative w-[320px] h-[640px] bg-[#0a0a0a] rounded-[3rem] border-[8px] border-[#151619] shadow-2xl overflow-hidden shadow-orange-500/10">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#151619] rounded-b-2xl z-50" />
          
          {/* Screen Content */}
          <div className="h-full w-full relative overflow-hidden bg-[#0a0a0a]">
            <AnimatePresence mode="wait">
              {currentScreen === 'onboarding' && (
                <motion.div 
                  key="onboarding"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, x: -320 }}
                  className="h-full flex flex-col p-8 pt-20"
                >
                  <div className="flex-1 flex flex-col items-center justify-center text-center space-y-8">
                    <div className="w-24 h-24 rounded-3xl bg-orange-500 flex items-center justify-center shadow-2xl shadow-orange-500/40">
                      <Zap size={48} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">AI Native Build</h3>
                      <p className="text-sm text-white/40 leading-relaxed">
                        The world's first AI-native product engine, now in your pocket.
                      </p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setCurrentScreen('home')}
                    className="w-full py-4 bg-white text-black rounded-2xl font-bold flex items-center justify-center gap-2"
                  >
                    Get Started
                    <ChevronRight size={18} />
                  </button>
                </motion.div>
              )}

              {currentScreen === 'home' && (
                <motion.div 
                  key="home"
                  initial={{ opacity: 0, x: 320 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -320 }}
                  className="h-full flex flex-col"
                >
                  {/* App Header */}
                  <div className="p-6 pt-12 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                        <Zap size={18} className="text-orange-500" />
                      </div>
                      <div>
                        <p className="text-[10px] text-white/40 uppercase font-mono">Welcome back</p>
                        <p className="text-sm font-bold">Zanib S.</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 bg-white/5 rounded-full"><Bell size={16} /></button>
                      <button className="p-2 bg-white/5 rounded-full"><Settings size={16} /></button>
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="px-6 grid grid-cols-2 gap-3 mb-6">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                      <p className="text-[10px] text-white/40 uppercase mb-1">Tasks</p>
                      <p className="text-xl font-bold">12</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                      <p className="text-[10px] text-white/40 uppercase mb-1">Uptime</p>
                      <p className="text-xl font-bold text-green-400">99%</p>
                    </div>
                  </div>

                  {/* Main Actions */}
                  <div className="px-6 space-y-3 flex-1 overflow-y-auto pb-24">
                    <button 
                      onClick={() => setCurrentScreen('actions')}
                      className="w-full p-4 rounded-2xl bg-orange-500 text-white flex items-center gap-4 shadow-lg shadow-orange-500/20"
                    >
                      <Sparkles size={20} />
                      <span className="font-bold text-sm">Quick AI Actions</span>
                    </button>
                    
                    <div className="pt-4">
                      <h4 className="text-xs font-mono text-white/40 uppercase mb-3">Recent Projects</h4>
                      <div className="space-y-2">
                        {['Auth System', 'Data Pipeline', 'UI Kit'].map(p => (
                          <div key={p} className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                            <span className="text-sm font-medium">{p}</span>
                            <ChevronRight size={14} className="text-white/20" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Tab Bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-[#151619]/80 backdrop-blur-xl border-t border-white/5 px-8 flex items-center justify-between">
                    <LayoutGrid size={20} className="text-orange-500" />
                    <button 
                      onClick={() => setCurrentScreen('create')}
                      className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center -mt-10 shadow-xl"
                    >
                      <Plus size={24} />
                    </button>
                    <Search size={20} className="text-white/20" />
                  </div>
                </motion.div>
              )}

              {currentScreen === 'create' && (
                <motion.div 
                  key="create"
                  initial={{ opacity: 0, y: 320 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 320 }}
                  className="h-full flex flex-col bg-[#151619]"
                >
                  <div className="p-6 pt-12 flex items-center gap-4">
                    <button onClick={() => setCurrentScreen('home')} className="p-2 bg-white/5 rounded-full">
                      <ArrowLeft size={16} />
                    </button>
                    <h3 className="text-lg font-bold">New Task</h3>
                  </div>
                  
                  <div className="p-6 space-y-6">
                    <div className="space-y-2">
                      <label className="text-[10px] text-white/40 uppercase font-mono">Task Name</label>
                      <input 
                        type="text" 
                        placeholder="e.g., Refactor API"
                        className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm focus:outline-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] text-white/40 uppercase font-mono">AI Context</label>
                      <textarea 
                        placeholder="Provide details for AI optimization..."
                        className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm focus:outline-none min-h-[120px] resize-none"
                      />
                    </div>
                    <button className="w-full py-4 bg-white text-black rounded-2xl font-bold">
                      Create with AI
                    </button>
                  </div>
                </motion.div>
              )}

              {currentScreen === 'actions' && (
                <motion.div 
                  key="actions"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="h-full flex flex-col p-6 pt-12"
                >
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-xl font-bold">AI Actions</h3>
                    <button onClick={() => setCurrentScreen('home')} className="p-2 bg-white/5 rounded-full">
                      <X size={16} />
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: MessageSquare, label: 'Summarize', color: 'bg-blue-500' },
                      { icon: Zap, label: 'Fix Bugs', color: 'bg-red-500' },
                      { icon: Languages, label: 'Translate', color: 'bg-green-500' },
                      { icon: Sparkles, label: 'Optimize', color: 'bg-purple-500' },
                    ].map(action => (
                      <button key={action.label} className="p-6 rounded-3xl bg-white/5 border border-white/10 flex flex-col items-center gap-3">
                        <div className={cn("p-3 rounded-2xl", action.color)}>
                          <action.icon size={20} className="text-white" />
                        </div>
                        <span className="text-xs font-bold">{action.label}</span>
                      </button>
                    ))}
                  </div>

                  <div className="mt-8 p-6 rounded-3xl bg-orange-500/10 border border-orange-500/20">
                    <p className="text-xs text-orange-200/60 leading-relaxed italic">
                      "AI is ready to process your request. Select an action to begin."
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Info Panel */}
        <div className="hidden xl:block ml-12 max-w-xs space-y-6 pt-20">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <h4 className="text-sm font-bold mb-2">Interactive Preview</h4>
            <p className="text-xs text-white/40 leading-relaxed">
              Experience the mobile-first design of the AI Product Factory. Navigate through onboarding, task management, and AI-powered quick actions.
            </p>
          </div>
          <div className="space-y-2">
            {[
              { label: 'Onboarding Flow', screen: 'onboarding' },
              { label: 'Main Dashboard', screen: 'home' },
              { label: 'AI Task Creation', screen: 'create' },
              { label: 'Quick AI Actions', screen: 'actions' },
            ].map(link => (
              <button 
                key={link.screen}
                onClick={() => setCurrentScreen(link.screen as Screen)}
                className={cn(
                  "w-full text-left px-4 py-2 rounded-lg text-xs transition-colors",
                  currentScreen === link.screen ? "bg-white/10 text-white" : "text-white/40 hover:text-white"
                )}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
