import { motion } from 'motion/react';
import { 
  Zap, 
  Bell, 
  Webhook, 
  Clock, 
  CheckCircle2, 
  AlertCircle,
  ArrowRight,
  RefreshCcw,
  FileJson
} from 'lucide-react';
import { cn } from '../lib/utils';

const AUTOMATIONS = [
  { id: 1, name: 'Daily AI Summary', status: 'Active', lastRun: '2h ago', icon: Zap, color: 'text-orange-400' },
  { id: 2, name: 'Error Detector', status: 'Monitoring', lastRun: 'Live', icon: AlertCircle, color: 'text-red-400' },
  { id: 3, name: 'Webhook Sync', status: 'Active', lastRun: '15m ago', icon: Webhook, color: 'text-blue-400' },
];

export default function Automation() {
  return (
    <div className="space-y-10">
      <header>
        <h2 className="text-3xl font-bold tracking-tight mb-2">Automation System</h2>
        <p className="text-white/40">Autonomous workflows running in the background.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Automation List */}
        <div className="lg:col-span-2 space-y-4">
          {AUTOMATIONS.map((auto) => (
            <div key={auto.id} className="p-6 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-between group hover:border-white/20 transition-all">
              <div className="flex items-center gap-4">
                <div className={cn("p-3 rounded-2xl bg-white/5", auto.color)}>
                  <auto.icon size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">{auto.name}</h3>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest flex items-center gap-1">
                      <Clock size={10} />
                      Last run: {auto.lastRun}
                    </span>
                    <span className={cn(
                      "text-[10px] font-bold uppercase tracking-tighter px-2 py-0.5 rounded-full",
                      auto.status === 'Active' ? "text-green-400 bg-green-400/10" : "text-blue-400 bg-blue-400/10"
                    )}>
                      {auto.status}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-white/10 rounded-xl text-white/40 hover:text-white transition-colors">
                  <RefreshCcw size={16} />
                </button>
                <button className="p-2 hover:bg-white/10 rounded-xl text-white/40 hover:text-white transition-colors">
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* System Alerts */}
        <div className="p-8 rounded-3xl bg-[#151619] border border-white/10">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">System Alerts</h3>
            <Bell size={18} className="text-white/20" />
          </div>
          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-red-500/5 border border-red-500/10 flex gap-3">
              <AlertCircle size={16} className="text-red-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-medium text-red-200">API Latency Spike</p>
                <p className="text-[10px] text-red-200/50 mt-0.5">Detected 450ms delay in /auth endpoint.</p>
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-green-500/5 border border-green-500/10 flex gap-3">
              <CheckCircle2 size={16} className="text-green-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-medium text-green-200">Backup Successful</p>
                <p className="text-[10px] text-green-200/50 mt-0.5">Database snapshot stored in S3 bucket.</p>
              </div>
            </div>
          </div>
          <button className="w-full mt-8 py-3 rounded-xl bg-white/5 border border-white/5 text-xs font-medium hover:bg-white/10 transition-colors">
            Configure Notifications
          </button>
        </div>
      </div>

      {/* Webhook Example */}
      <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
        <div className="flex items-center gap-3 mb-6">
          <Webhook size={20} className="text-blue-400" />
          <h3 className="text-lg font-semibold">Webhook Integration</h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-sm text-white/60 leading-relaxed">
              Connect your external services to the AI Factory. Receive real-time events and trigger AI workflows automatically.
            </p>
            <div className="flex items-center gap-2 p-3 rounded-xl bg-[#0a0a0a] border border-white/10">
              <code className="text-[11px] text-blue-300 flex-1 truncate">https://api.aifactory.dev/hooks/v1/942-abc-123</code>
              <button className="text-[10px] font-bold uppercase text-white/40 hover:text-white">Copy</button>
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/10 font-mono text-[11px] text-white/40">
            <div className="flex items-center gap-2 mb-4">
              <FileJson size={14} className="text-white/20" />
              <span className="uppercase tracking-widest">Payload Preview</span>
            </div>
            <pre className="text-blue-300/80">
{`{
  "event": "user.signup",
  "data": {
    "email": "user@example.com",
    "plan": "pro"
  },
  "triggered_at": "2024-03-24T10:09:17Z"
}`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
