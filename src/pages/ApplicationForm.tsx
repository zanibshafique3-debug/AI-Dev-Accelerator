import { motion } from 'motion/react';
import { 
  Send, 
  Cpu, 
  Rocket, 
  Code2, 
  BrainCircuit,
  CheckCircle2
} from 'lucide-react';

export default function ApplicationForm() {
  return (
    <div className="max-w-3xl mx-auto space-y-10">
      <header className="text-center">
        <div className="inline-flex p-3 rounded-2xl bg-orange-500/10 border border-orange-500/20 mb-6">
          <Rocket size={32} className="text-orange-500" />
        </div>
        <h2 className="text-3xl font-bold tracking-tight mb-3">Join the AI Factory</h2>
        <p className="text-white/40">Apply to become a part of our AI-native developer network.</p>
      </header>

      <motion.form 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8 bg-[#151619] p-8 lg:p-12 rounded-[40px] border border-white/10"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-mono text-white/40 uppercase tracking-widest">Full Name</label>
            <input 
              type="text" 
              placeholder="Zanib Shafique"
              className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-sm focus:outline-none focus:border-orange-500/50"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-mono text-white/40 uppercase tracking-widest">Email Address</label>
            <input 
              type="email" 
              placeholder="zanib@aifactory.dev"
              className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-sm focus:outline-none focus:border-orange-500/50"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-mono text-white/40 uppercase tracking-widest flex items-center gap-2">
            <Cpu size={14} />
            AI Tools Used Daily
          </label>
          <input 
            type="text" 
            placeholder="e.g., Claude 3.5 Sonnet, Cursor, v0.dev, GitHub Copilot"
            className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-sm focus:outline-none focus:border-orange-500/50"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-mono text-white/40 uppercase tracking-widest flex items-center gap-2">
            <Code2 size={14} />
            2–3 AI-Powered Projects
          </label>
          <textarea 
            placeholder="Describe your most impactful AI integrations..."
            className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-sm focus:outline-none focus:border-orange-500/50 min-h-[100px] resize-none"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-mono text-white/40 uppercase tracking-widest flex items-center gap-2">
            <BrainCircuit size={14} />
            Approach to building a SaaS idea
          </label>
          <textarea 
            placeholder="How do you leverage AI to go from idea to production in days?"
            className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-sm focus:outline-none focus:border-orange-500/50 min-h-[120px] resize-none"
          />
        </div>

        <div className="pt-4">
          <button className="w-full py-4 bg-white text-black rounded-2xl font-bold hover:bg-white/90 transition-all flex items-center justify-center gap-3 group">
            Submit Application
            <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="flex items-center justify-center gap-6 pt-4">
          <div className="flex items-center gap-2 text-[10px] text-white/40 uppercase tracking-widest">
            <CheckCircle2 size={12} className="text-green-500" />
            Secure Processing
          </div>
          <div className="flex items-center gap-2 text-[10px] text-white/40 uppercase tracking-widest">
            <CheckCircle2 size={12} className="text-green-500" />
            AI Review Active
          </div>
        </div>
      </motion.form>
    </div>
  );
}
