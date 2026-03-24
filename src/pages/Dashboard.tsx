import { motion } from 'motion/react';
import { 
  Users, 
  Activity, 
  ShieldCheck, 
  CheckCircle2, 
  TrendingUp, 
  ArrowUpRight,
  Clock
} from 'lucide-react';
import { cn } from '../lib/utils';

const KPI_DATA = [
  { label: 'Active Users', value: '1,284', icon: Users, color: 'text-blue-400', bg: 'bg-blue-400/10', trend: '+12%' },
  { label: 'Workflows Executed', value: '42.5k', icon: Activity, color: 'text-orange-400', bg: 'bg-orange-400/10', trend: '+8.4%' },
  { label: 'Errors Auto-Fixed', value: '942', icon: ShieldCheck, color: 'text-green-400', bg: 'bg-green-400/10', trend: '99.2%' },
  { label: 'AI Tasks Completed', value: '12,402', icon: CheckCircle2, color: 'text-purple-400', bg: 'bg-purple-400/10', trend: '+24%' },
];

const RECENT_TASKS = [
  { id: 1, name: 'Generate Auth Flow', status: 'Completed', time: '2m ago', type: 'Build' },
  { id: 2, name: 'Sentiment Analysis', status: 'Processing', time: 'Just now', type: 'SaaS' },
  { id: 3, name: 'Fix Memory Leak', status: 'Completed', time: '15m ago', type: 'Debug' },
  { id: 4, name: 'Daily Summary', status: 'Scheduled', time: 'In 4h', type: 'Auto' },
];

export default function Dashboard() {
  return (
    <div className="space-y-10">
      <header>
        <h2 className="text-3xl font-bold tracking-tight mb-2">System Overview</h2>
        <p className="text-white/40">Real-time performance metrics of the AI Product Factory.</p>
      </header>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {KPI_DATA.map((kpi, i) => (
          <motion.div
            key={kpi.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors group"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={cn("p-2 rounded-lg", kpi.bg)}>
                <kpi.icon className={kpi.color} size={20} />
              </div>
              <span className="text-[10px] font-mono text-green-400 flex items-center gap-1">
                <TrendingUp size={10} />
                {kpi.trend}
              </span>
            </div>
            <h3 className="text-white/40 text-sm font-medium mb-1">{kpi.label}</h3>
            <div className="flex items-end justify-between">
              <span className="text-2xl font-bold">{kpi.value}</span>
              <ArrowUpRight size={16} className="text-white/20 group-hover:text-white/60 transition-colors" />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chart Placeholder */}
        <div className="lg:col-span-2 p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-lg font-semibold">Workflow Efficiency</h3>
              <p className="text-xs text-white/40">AI vs Manual execution speed</p>
            </div>
            <div className="flex gap-2">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-orange-500" />
                <span className="text-[10px] text-white/60 uppercase">AI Engine</span>
              </div>
              <div className="flex items-center gap-1.5 ml-4">
                <div className="w-2 h-2 rounded-full bg-white/20" />
                <span className="text-[10px] text-white/60 uppercase">Manual</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 min-h-[240px] flex items-end gap-2">
            {[40, 65, 45, 90, 75, 85, 60, 95, 80, 100].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col gap-1 items-center group">
                <div className="w-full bg-white/5 rounded-t-sm relative overflow-hidden h-full">
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: i * 0.05, duration: 1 }}
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-orange-600 to-orange-400 group-hover:from-orange-500 group-hover:to-orange-300 transition-colors"
                  />
                </div>
                <span className="text-[8px] font-mono text-white/20">0{i+1}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="p-8 rounded-3xl bg-[#151619] border border-white/10">
          <h3 className="text-lg font-semibold mb-6">Recent Activity</h3>
          <div className="space-y-6">
            {RECENT_TASKS.map((task) => (
              <div key={task.id} className="flex items-start gap-4">
                <div className={cn(
                  "mt-1 w-2 h-2 rounded-full",
                  task.status === 'Completed' ? "bg-green-500" : "bg-orange-500 animate-pulse"
                )} />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-0.5">
                    <h4 className="text-sm font-medium">{task.name}</h4>
                    <span className="text-[10px] font-mono text-white/40 uppercase">{task.type}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-white/40">
                    <Clock size={10} />
                    <span>{task.time}</span>
                    <span>•</span>
                    <span className={task.status === 'Completed' ? "text-green-400/60" : "text-orange-400/60"}>
                      {task.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-8 py-3 rounded-xl border border-white/5 text-xs font-medium hover:bg-white/5 transition-colors">
            View All Logs
          </button>
        </div>
      </div>
    </div>
  );
}
