import Sidebar from './components/Sidebar.jsx';
import Topbar from './components/Topbar.jsx';
import HeroSection from './components/HeroSection.jsx';
import DashboardCards from './components/DashboardCards.jsx';
import { motion } from 'framer-motion';

function App() {
  const activities = [
    { title: 'AI call completed', detail: 'Lead: Sarah Jensen • Conversion: Success', time: '2m ago' },
    { title: 'New campaign launched', detail: 'Autumn Outreach • 5K leads', time: '24m ago' },
    { title: 'Lead status updated', detail: 'Marcus Tran • Qualified', time: '1h ago' },
    { title: 'Missed call', detail: 'Lead: Victor Hugo • Retrying', time: '3h ago' },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 flex">
      <div className="hidden md:block md:w-64">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="p-4 md:p-6 space-y-6">
          <HeroSection />
          <DashboardCards />
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-4 lg:col-span-2"
            >
              <h2 className="text-lg font-semibold text-white">Recent Activity</h2>
              <ul className="mt-3 divide-y divide-neutral-800">
                {activities.map((a, i) => (
                  <li key={i} className="py-3 flex items-start justify-between">
                    <div>
                      <div className="text-sm text-neutral-200">{a.title}</div>
                      <div className="text-xs text-neutral-500">{a.detail}</div>
                    </div>
                    <div className="text-xs text-neutral-500">{a.time}</div>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-4"
            >
              <h2 className="text-lg font-semibold text-white">Quick Actions</h2>
              <div className="mt-3 grid grid-cols-1 gap-2">
                <button className="rounded-md px-3 py-2 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-500 hover:to-blue-400 text-white text-sm font-medium">
                  Start New Campaign
                </button>
                <button className="rounded-md px-3 py-2 bg-neutral-800 border border-neutral-700 hover:bg-neutral-700 text-sm">
                  Add Lead
                </button>
                <button className="rounded-md px-3 py-2 bg-neutral-800 border border-neutral-700 hover:bg-neutral-700 text-sm">
                  Start AI Call
                </button>
              </div>
            </motion.div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
