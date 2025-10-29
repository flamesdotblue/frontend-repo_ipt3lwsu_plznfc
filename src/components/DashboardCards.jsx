import { Users, PhoneCall, CheckCircle2, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const cards = [
  {
    label: 'Total Leads',
    value: '12,480',
    icon: Users,
    change: '+8.2% this week',
    color: 'from-purple-600 to-blue-500',
  },
  {
    label: 'In-progress Calls',
    value: '87',
    icon: PhoneCall,
    change: '+12 ongoing',
    color: 'from-amber-500 to-rose-500',
  },
  {
    label: 'Successful Calls',
    value: '1,945',
    icon: CheckCircle2,
    change: '+3.4% conversion',
    color: 'from-emerald-500 to-teal-400',
  },
  {
    label: 'Campaigns Running',
    value: '14',
    icon: Rocket,
    change: '2 launching today',
    color: 'from-indigo-500 to-cyan-400',
  },
];

export default function DashboardCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {cards.map(({ label, value, icon: Icon, change, color }, idx) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.05 }}
          className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-4"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-neutral-400">{label}</div>
              <div className="mt-2 text-2xl font-semibold text-white">{value}</div>
              <div className="mt-1 text-xs text-neutral-500">{change}</div>
            </div>
            <div className={`h-10 w-10 rounded-lg bg-gradient-to-tr ${color} grid place-items-center`}>
              <Icon size={18} className="text-white" />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
