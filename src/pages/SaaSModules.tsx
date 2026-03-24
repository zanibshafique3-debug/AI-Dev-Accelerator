import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  CheckSquare, 
  MessageSquare, 
  Globe, 
  Plus, 
  Search, 
  Tag, 
  Smile, 
  Frown, 
  Meh,
  Send,
  Terminal,
  Activity
} from 'lucide-react';
import { cn } from '../lib/utils';

type Module = 'tasks' | 'feedback' | 'api';

export default function SaaSModules() {
  const [activeModule, setActiveModule] = useState<Module>('tasks');

  return (
    <div className="space-y-10">
      <header className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight mb-2">Mini SaaS Modules</h2>
          <p className="text-white/40">Pre-built AI-powered components for your next SaaS.</p>
        </div>
        <div className="flex p-1 bg-white/5 rounded-xl border border-white/10">
          {[
            { id: 'tasks', icon: CheckSquare, label: 'Tasks' },
            { id: 'feedback', icon: MessageSquare, label: 'Feedback' },
            { id: 'api', icon: Globe, label: 'API Tester' },
          ].map((m) => (
            <button
              key={m.id}
              onClick={() => setActiveModule(m.id as Module)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium transition-all",
                activeModule === m.id ? "bg-white text-black" : "text-white/60 hover:text-white"
              )}
            >
              <m.icon size={14} />
              {m.label}
            </button>
          ))}
        </div>
      </header>

      <div className="min-h-[600px]">
        {activeModule === 'tasks' && <TaskManager />}
        {activeModule === 'feedback' && <FeedbackAnalyzer />}
        {activeModule === 'api' && <APITester />}
      </div>
    </div>
  );
}

function TaskManager() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Implement OAuth flow', tags: ['Auth', 'Backend'], priority: 'High' },
    { id: 2, text: 'Design landing page hero', tags: ['UI', 'Design'], priority: 'Medium' },
    { id: 3, text: 'Optimize database queries', tags: ['Performance', 'DB'], priority: 'Low' },
  ]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/5 rounded-3xl border border-white/10 overflow-hidden"
    >
      <div className="p-6 border-b border-white/5 flex items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={16} />
          <input 
            type="text" 
            placeholder="Search tasks or ask AI to organize..."
            className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-11 pr-4 text-sm focus:outline-none focus:border-white/20"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-orange-500 text-white rounded-xl text-xs font-bold hover:bg-orange-600 transition-colors">
          <Plus size={14} />
          New Task
        </button>
      </div>
      
      <div className="p-6">
        <div className="space-y-3">
          {tasks.map((task) => (
            <div key={task.id} className="p-4 rounded-2xl bg-white/2 border border-white/5 flex items-center justify-between group hover:bg-white/5 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-5 h-5 rounded border border-white/20 flex items-center justify-center group-hover:border-orange-500 transition-colors cursor-pointer">
                  <div className="w-2.5 h-2.5 rounded-sm bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div>
                  <h4 className="text-sm font-medium">{task.text}</h4>
                  <div className="flex gap-2 mt-1.5">
                    {task.tags.map(tag => (
                      <span key={tag} className="flex items-center gap-1 text-[9px] font-mono uppercase tracking-wider text-white/40 bg-white/5 px-2 py-0.5 rounded">
                        <Tag size={8} />
                        {tag}
                      </span>
                    ))}
                    <span className={cn(
                      "text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded",
                      task.priority === 'High' ? "text-red-400 bg-red-400/10" : 
                      task.priority === 'Medium' ? "text-orange-400 bg-orange-400/10" : "text-blue-400 bg-blue-400/10"
                    )}>
                      {task.priority}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-2 hover:bg-white/10 rounded-lg text-white/40 hover:text-white transition-colors">
                  <Activity size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 rounded-2xl bg-orange-500/5 border border-orange-500/10 flex items-center gap-4">
          <div className="p-2 rounded-lg bg-orange-500/20">
            <Tag size={16} className="text-orange-400" />
          </div>
          <div>
            <p className="text-xs font-medium text-orange-200">AI Auto-Tagging Active</p>
            <p className="text-[10px] text-orange-200/50">AI is automatically categorizing your tasks based on content.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function FeedbackAnalyzer() {
  const [feedbacks] = useState([
    { id: 1, user: 'Alex M.', text: 'The new dashboard is incredibly fast! Love the UI.', sentiment: 'Positive' },
    { id: 2, user: 'Sarah K.', text: 'Had some trouble with the mobile login today.', sentiment: 'Negative' },
    { id: 3, user: 'Dev Team', text: 'API documentation could be more detailed.', sentiment: 'Neutral' },
  ]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="grid grid-cols-1 lg:grid-cols-3 gap-8"
    >
      <div className="lg:col-span-2 space-y-4">
        {feedbacks.map((f) => (
          <div key={f.id} className="p-6 rounded-3xl bg-white/5 border border-white/10">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold">{f.user}</span>
              <div className={cn(
                "flex items-center gap-1.5 px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter",
                f.sentiment === 'Positive' ? "text-green-400 bg-green-400/10" :
                f.sentiment === 'Negative' ? "text-red-400 bg-red-400/10" : "text-orange-400 bg-orange-400/10"
              )}>
                {f.sentiment === 'Positive' ? <Smile size={12} /> : f.sentiment === 'Negative' ? <Frown size={12} /> : <Meh size={12} />}
                {f.sentiment}
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed italic">"{f.text}"</p>
          </div>
        ))}
      </div>
      <div className="p-8 rounded-3xl bg-[#151619] border border-white/10 flex flex-col items-center justify-center text-center">
        <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-green-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center mb-6">
          <Activity size={32} className="text-white/40" />
        </div>
        <h3 className="text-lg font-semibold mb-2">Sentiment Score</h3>
        <div className="text-4xl font-bold text-green-400 mb-2">84%</div>
        <p className="text-xs text-white/40 px-4">Overall user satisfaction is high. AI suggests focusing on mobile stability.</p>
      </div>
    </motion.div>
  );
}

function APITester() {
  const [url, setUrl] = useState('/api/mock/data');
  const [method, setMethod] = useState('GET');
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleTest = async () => {
    setLoading(true);
    try {
      const res = await fetch(url, { method });
      const data = await res.json();
      setResponse(data);
    } catch (err) {
      setResponse({ error: 'Failed to fetch' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#151619] rounded-3xl border border-white/10 overflow-hidden flex flex-col"
    >
      <div className="p-6 border-b border-white/5 bg-white/2 flex flex-col md:flex-row gap-4">
        <div className="flex rounded-xl border border-white/10 overflow-hidden">
          <select 
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            className="bg-white/5 text-xs font-bold px-4 py-2.5 border-r border-white/10 focus:outline-none"
          >
            <option>GET</option>
            <option>POST</option>
          </select>
          <input 
            type="text" 
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="bg-transparent text-sm px-4 py-2.5 flex-1 min-w-[200px] focus:outline-none"
          />
        </div>
        <button 
          onClick={handleTest}
          disabled={loading}
          className="px-6 py-2.5 bg-white text-black rounded-xl text-xs font-bold hover:bg-white/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {loading ? <div className="w-3 h-3 border-2 border-black border-t-transparent rounded-full animate-spin" /> : <Send size={14} />}
          Send Request
        </button>
      </div>
      
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2">
        <div className="p-6 border-r border-white/5 space-y-6">
          <div>
            <label className="block text-[10px] font-mono text-white/40 uppercase mb-3">Request Headers</label>
            <div className="p-4 rounded-xl bg-white/2 border border-white/5 font-mono text-[10px] text-white/60">
              Content-Type: application/json<br />
              Authorization: Bearer factory_ai_token_v1
            </div>
          </div>
          <div>
            <label className="block text-[10px] font-mono text-white/40 uppercase mb-3">Request Body</label>
            <div className="p-4 rounded-xl bg-white/2 border border-white/5 font-mono text-[10px] text-white/20 italic">
              No body required for GET
            </div>
          </div>
        </div>
        <div className="p-6 bg-[#0a0a0a] flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <label className="text-[10px] font-mono text-white/40 uppercase">Response</label>
            {response && <span className="text-[10px] font-mono text-green-400">200 OK</span>}
          </div>
          <div className="flex-1 p-4 rounded-xl bg-white/2 border border-white/5 font-mono text-[11px] text-blue-300 overflow-auto max-h-[300px]">
            {response ? (
              <pre>{JSON.stringify(response, null, 2)}</pre>
            ) : (
              <div className="h-full flex items-center justify-center text-white/10 italic">
                Send a request to see output
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
