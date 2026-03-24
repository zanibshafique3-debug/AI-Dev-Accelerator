import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Cpu, 
  Layers, 
  Zap, 
  FileText, 
  Smartphone, 
  Menu, 
  X,
  ChevronRight,
  Bot
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from './lib/utils';

// Pages
import Dashboard from './pages/Dashboard';
import BuildCenter from './pages/BuildCenter';
import SaaSModules from './pages/SaaSModules';
import Automation from './pages/Automation';
import ApplicationForm from './pages/ApplicationForm';
import MobileDemo from './pages/MobileDemo';

function Sidebar({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (v: boolean) => void }) {
  const location = useLocation();
  
  const menuItems = [
    { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/build', icon: Cpu, label: 'AI Build Center' },
    { path: '/saas', icon: Layers, label: 'SaaS Modules' },
    { path: '/automation', icon: Zap, label: 'Automation' },
    { path: '/apply', icon: FileText, label: 'Apply' },
    { path: '/mobile', icon: Smartphone, label: 'Mobile Preview' },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ x: isOpen ? 0 : -280 }}
        className={cn(
          "fixed top-0 left-0 bottom-0 w-[280px] bg-[#151619] text-white z-50 lg:translate-x-0 transition-transform duration-300 ease-in-out border-r border-white/10",
          !isOpen && "lg:static lg:translate-x-0"
        )}
      >
        <div className="p-6 flex items-center gap-3 border-bottom border-white/5">
          <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
            <Bot className="text-white" size={24} />
          </div>
          <div>
            <h1 className="font-bold text-lg leading-tight">AI Factory</h1>
            <p className="text-[10px] uppercase tracking-widest text-white/40 font-mono">Product Engine v1.0</p>
          </div>
        </div>

        <nav className="mt-8 px-4 space-y-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl transition-all group",
                  isActive 
                    ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20" 
                    : "text-white/60 hover:bg-white/5 hover:text-white"
                )}
              >
                <item.icon size={20} className={cn(isActive ? "text-white" : "text-white/40 group-hover:text-white")} />
                <span className="font-medium">{item.label}</span>
                {isActive && <ChevronRight size={16} className="ml-auto opacity-50" />}
              </Link>
            );
          })}
        </nav>

        <div className="absolute bottom-8 left-6 right-6 p-4 bg-white/5 rounded-2xl border border-white/10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-mono text-white/60 uppercase tracking-tighter">System Online</span>
          </div>
          <p className="text-[10px] text-white/40 leading-relaxed">
            AI-native development environment active. All modules synced.
          </p>
        </div>
      </motion.aside>
    </>
  );
}

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="flex min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-orange-500/30">
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        
        <main className="flex-1 flex flex-col min-w-0">
          {/* Header */}
          <header className="h-16 border-b border-white/5 flex items-center justify-between px-6 sticky top-0 bg-[#0a0a0a]/80 backdrop-blur-xl z-30">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2 hover:bg-white/5 rounded-lg"
            >
              <Menu size={20} />
            </button>
            
            <div className="flex items-center gap-4 ml-auto">
              <div className="hidden md:flex flex-col items-end">
                <span className="text-xs font-medium">Zanib Shafique</span>
                <span className="text-[10px] text-white/40 font-mono">Lead AI Architect</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-red-500 border border-white/20" />
            </div>
          </header>

          <div className="p-6 lg:p-10 max-w-7xl mx-auto w-full">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/build" element={<BuildCenter />} />
              <Route path="/saas" element={<SaaSModules />} />
              <Route path="/automation" element={<Automation />} />
              <Route path="/apply" element={<ApplicationForm />} />
              <Route path="/mobile" element={<MobileDemo />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}
