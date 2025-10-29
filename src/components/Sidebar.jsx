import { Home, Users, PhoneCall, Megaphone, Bell, Cog, Brain } from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'Dashboard', icon: Home },
  { label: 'Leads', icon: Users },
  { label: 'Campaigns', icon: Megaphone },
  { label: 'Calls', icon: PhoneCall },
  { label: 'Notifications', icon: Bell },
  { label: 'AI Config', icon: Brain },
  { label: 'Settings', icon: Cog },
];

export default function Sidebar() {
  return (
    <aside className="bg-neutral-900/60 backdrop-blur border-r border-neutral-800 text-neutral-200 w-full md:w-64 shrink-0">
      <div className="p-4 flex items-center gap-2 border-b border-neutral-800">
        <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-purple-600 via-blue-500 to-amber-400" />
        <div className="font-semibold tracking-wide">AICall CRM</div>
      </div>
      <nav className="p-3 space-y-1">
        {navItems.map(({ label, icon: Icon }) => (
          <motion.button
            key={label}
            whileHover={{ x: 4 }}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm hover:bg-neutral-800/70 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
            aria-label={label}
          >
            <Icon size={18} className="text-neutral-400" />
            <span>{label}</span>
          </motion.button>
        ))}
      </nav>
      <div className="p-3 mt-auto hidden md:block">
        <div className="text-xs text-neutral-500">Dark mode is enabled by default. Toggle is in the top bar.</div>
      </div>
    </aside>
  );
}
