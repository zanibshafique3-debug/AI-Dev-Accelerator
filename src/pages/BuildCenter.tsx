import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Bug, 
  GitBranch, 
  Network, 
  Terminal, 
  Play, 
  CheckCircle2,
  Code2,
  FileCode,
  Database
} from 'lucide-react';
import { cn } from '../lib/utils';

type Tool = 'feature' | 'debug' | 'workflow' | 'architecture';

export default function BuildCenter() {
  const [activeTool, setActiveTool] = useState<Tool>('feature');
  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleGenerate = () => {
    setIsGenerating(true);
    setResult(null);
    setTimeout(() => {
      setIsGenerating(false);
      setResult("AI Generation Complete. Plan ready for implementation.");
    }, 2000);
  };

  const tools = [
    { id: 'feature', icon: Sparkles, label: 'Generate Feature', desc: 'AI creates UI + backend plan' },
    { id: 'debug', icon: Bug, label: 'Debug with AI', desc: 'AI suggests fixes for bugs' },
    { id: 'workflow', icon: GitBranch, label: 'Create Workflow', desc: 'n8n-style automations' },
    { id: 'architecture', icon: Network, label: 'Architecture Overview', desc: 'AI explains system design' },
  ];

  return (
    <div className="space-y-10">
      <header>
        <h2 className="text-3xl font-bold tracking-tight mb-2">AI Build Center</h2>
        <p className="text-white/40">Accelerate your development cycle with AI-native tools.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Tool Selection */}
        <div className="space-y-3">
          {tools.map((tool) => (
            <button
              key={tool.id}
              onClick={() => {
                setActiveTool(tool.id as Tool);
                setResult(null);
              }}
              className={cn(
                "w-full text-left p-4 rounded-2xl border transition-all flex items-center gap-4",
                activeTool === tool.id 
                  ? "bg-orange-500 border-orange-400 text-white shadow-lg shadow-orange-500/20" 
                  : "bg-white/5 border-white/10 text-white/60 hover:border-white/20 hover:text-white"
              )}
            >
              <div className={cn(
                "p-2 rounded-lg",
                activeTool === tool.id ? "bg-white/20" : "bg-white/5"
              )}>
                <tool.icon size={20} />
              </div>
              <div>
                <div className="text-sm font-semibold">{tool.label}</div>
                <div className={cn("text-[10px]", activeTool === tool.id ? "text-white/70" : "text-white/30")}>
                  {tool.desc}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Workspace */}
        <div className="lg:col-span-3 bg-[#151619] rounded-3xl border border-white/10 overflow-hidden flex flex-col min-h-[500px]">
          <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/2">
            <div className="flex items-center gap-3">
              <Terminal size={18} className="text-orange-500" />
              <span className="text-sm font-mono uppercase tracking-widest text-white/60">AI Workspace</span>
            </div>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-white/10" />
              <div className="w-3 h-3 rounded-full bg-white/10" />
              <div className="w-3 h-3 rounded-full bg-white/10" />
            </div>
          </div>

          <div className="flex-1 p-8">
            <AnimatePresence mode="wait">
              {activeTool === 'feature' && (
                <motion.div 
                  key="feature"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div>
                    <label className="block text-xs font-mono text-white/40 uppercase mb-3">Feature Description</label>
                    <textarea 
                      placeholder="e.g., Create a real-time chat system with message persistence and emoji support..."
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-sm focus:outline-none focus:border-orange-500/50 min-h-[120px] resize-none"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-white/2 border border-white/5">
                      <div className="flex items-center gap-2 mb-2">
                        <Code2 size={14} className="text-blue-400" />
                        <span className="text-xs font-medium">Frontend</span>
                      </div>
                      <p className="text-[10px] text-white/40">React + Tailwind + Framer Motion</p>
                    </div>
                    <div className="p-4 rounded-xl bg-white/2 border border-white/5">
                      <div className="flex items-center gap-2 mb-2">
                        <Database size={14} className="text-green-400" />
                        <span className="text-xs font-medium">Backend</span>
                      </div>
                      <p className="text-[10px] text-white/40">Express + PostgreSQL + Redis</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTool === 'debug' && (
                <motion.div 
                  key="debug"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div>
                    <label className="block text-xs font-mono text-white/40 uppercase mb-3">Error Log / Code Snippet</label>
                    <div className="bg-[#0a0a0a] rounded-2xl p-4 font-mono text-xs text-red-400 border border-red-500/20 overflow-x-auto">
                      <code>
                        TypeError: Cannot read properties of undefined (reading 'map')<br />
                        at Dashboard.tsx:42:18<br />
                        at renderWithHooks (react-dom.development.js:16305:18)
                      </code>
                    </div>
                  </div>
                  <p className="text-xs text-white/40 italic">AI will analyze the stack trace and suggest a fix.</p>
                </motion.div>
              )}

              {activeTool === 'workflow' && (
                <motion.div 
                  key="workflow"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex flex-col items-center justify-center h-full text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center border border-dashed border-white/20">
                    <GitBranch size={24} className="text-white/20" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">Visual Workflow Builder</h4>
                    <p className="text-xs text-white/40 max-w-xs mx-auto mt-1">Connect triggers and actions to automate your product logic.</p>
                  </div>
                </motion.div>
              )}

              {activeTool === 'architecture' && (
                <motion.div 
                  key="architecture"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                   <div className="grid grid-cols-3 gap-4">
                    {[1,2,3,4,5,6].map(i => (
                      <div key={i} className="aspect-square rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                        <FileCode size={20} className="text-white/10" />
                      </div>
                    ))}
                   </div>
                   <p className="text-xs text-white/40 text-center">Visualizing system dependencies and data flow...</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="p-6 bg-white/2 border-t border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {isGenerating ? (
                <div className="flex items-center gap-2 text-xs text-orange-400">
                  <div className="w-3 h-3 border-2 border-orange-400 border-t-transparent rounded-full animate-spin" />
                  AI is thinking...
                </div>
              ) : result ? (
                <div className="flex items-center gap-2 text-xs text-green-400">
                  <CheckCircle2 size={14} />
                  {result}
                </div>
              ) : (
                <span className="text-xs text-white/20">Ready for generation</span>
              )}
            </div>
            <button 
              onClick={handleGenerate}
              disabled={isGenerating}
              className="px-6 py-2.5 bg-white text-black rounded-xl text-xs font-bold hover:bg-white/90 transition-colors flex items-center gap-2 disabled:opacity-50"
            >
              <Play size={14} fill="currentColor" />
              Execute AI
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
