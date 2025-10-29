import { Bell, Sun, Moon, Search, User } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Topbar() {
  const [query, setQuery] = useState('');
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored) {
      const isDark = stored === 'dark';
      setDark(isDark);
      document.documentElement.classList.toggle('dark', isDark);
    } else {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  return (
    <header className="flex items-center gap-3 px-4 py-3 border-b border-neutral-800 bg-neutral-900/40 backdrop-blur">
      <div className="relative max-w-lg w-full">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search leads, campaigns, calls..."
          className="w-full rounded-md bg-neutral-800/80 border border-neutral-700 text-neutral-200 placeholder:text-neutral-500 px-10 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
        />
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" />
      </div>
      <div className="ml-auto flex items-center gap-2">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-md border border-neutral-700 bg-neutral-800/60 hover:bg-neutral-800"
          aria-label="Toggle theme"
        >
          {dark ? <Sun size={16} /> : <Moon size={16} />}
        </button>
        <button className="p-2 rounded-md border border-neutral-700 bg-neutral-800/60 hover:bg-neutral-800" aria-label="Notifications">
          <Bell size={16} />
        </button>
        <div className="flex items-center gap-2 px-2 py-1 rounded-md border border-neutral-700 bg-neutral-800/60">
          <div className="h-6 w-6 rounded-full bg-gradient-to-tr from-purple-600 to-blue-500" />
          <span className="text-sm text-neutral-200 hidden sm:block">Alex</span>
          <User size={16} className="text-neutral-400" />
        </div>
      </div>
    </header>
  );
}
