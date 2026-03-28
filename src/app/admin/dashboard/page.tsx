'use client';

import { useEffect, useState, useCallback, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  MessageSquare, 
  Eye, 
  LayoutDashboard, 
  LogOut, 
  Home,
  CheckCircle,
  FileText,
  Activity,
  ArrowUpRight,
  Search,
  Download,
  Trash2,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  Plus
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell, BarChart, Bar, Legend
} from 'recharts';

const COLORS = ['#1565C0', '#00BCD4', '#FFB300', '#4CAF50', '#F44336'];

export default function AdminDashboard() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [stats, setStats] = useState<any>(null);
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [tab, setTab] = useState<'contact' | 'registration' | 'enquiry'>('enquiry');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [sortField, setSortField] = useState('createdAt');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const fetchStats = useCallback(async () => {
    try {
      const res = await fetch('/api/admin/analytics');
      const data = await res.json();
      setStats(data);
    } catch (err) {
      console.error('Stats fetch error:', err);
    }
  }, []);

  const fetchSubmissions = useCallback(async () => {
    try {
      const res = await fetch(`/api/admin/submissions?form=${tab}&search=${search}&page=${page}`);
      const data = await res.json();
      setSubmissions(data.data);
      setTotalPages(data.totalPages);
    } catch (err) {
      console.error('Submissions fetch error:', err);
    }
  }, [tab, search, page]);

  useEffect(() => {
    const auth = localStorage.getItem('admin_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
      fetchStats();
      fetchSubmissions();
      setIsLoading(false);
    } else {
      router.push('/admin');
    }
  }, [router, fetchStats, fetchSubmissions]);

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this submission?')) return;
    try {
      await fetch(`/api/admin/submissions/${id}?form=${tab}`, { method: 'DELETE' });
      fetchSubmissions();
    } catch (err) {
      console.error('Delete error:', err);
    }
  };

  const exportCSV = () => {
    window.open(`/api/admin/submissions/export?form=${tab}`, '_blank');
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_auth');
    router.push('/admin');
  };

  const filteredAndSortedSubmissions = useMemo(() => {
    return [...submissions].sort((a, b) => {
      const valA = a[sortField];
      const valB = b[sortField];
      if (valA < valB) return sortOrder === 'asc' ? -1 : 1;
      if (valA > valB) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
  }, [submissions, sortField, sortOrder]);

  if (isLoading) return <div className="hero-bg h-screen flex items-center justify-center text-white">Loading...</div>;

  return (
    <div className="hero-bg flex min-h-screen text-white overflow-hidden">
      {/* Sidebar */}
      <aside className={`glass-panel fixed lg:relative z-50 transition-all duration-300 h-screen ${isSidebarOpen ? 'w-64' : 'w-0 -translate-x-full lg:w-20 lg:translate-x-0'} border-r border-white/10 flex flex-col`}>
        <div className="p-6 flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
            <LayoutDashboard size={24} />
          </div>
          {isSidebarOpen && <span className="text-xl font-bold">Admin</span>}
        </div>

        <nav className="flex-1 px-4 py-8 space-y-2">
          <button className="flex items-center gap-3 w-full p-3 bg-primary rounded-xl transition-all">
            <Activity size={20} />
            {isSidebarOpen && <span>Dashboard</span>}
          </button>
          <Link href="/" className="flex items-center gap-3 w-full p-3 hover:bg-white/5 rounded-xl transition-all">
            <Home size={20} />
            {isSidebarOpen && <span>Home Website</span>}
          </Link>
        </nav>

        <button onClick={handleLogout} className="p-6 border-t border-white/10 flex items-center gap-3 text-red-500 hover:text-red-400 transition-all">
          <LogOut size={20} />
          {isSidebarOpen && <span>Logout</span>}
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-4 lg:p-8 relative">
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="lg:hidden absolute top-8 right-8 z-50 p-2 bg-white/5 rounded-lg border border-white/10">
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <header className="mb-12">
            <div className="bg-teal/20 text-teal text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full w-fit mb-4">LEADS Intelligence Hub</div>
            <h1 className="text-4xl font-extrabold mb-2 tracking-tight">Executive Dashboard</h1>
            <p className="text-white/60">Comprehensive tracking and system oversight</p>
          </header>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { label: 'Total Views', value: stats?.overview.totalViews, icon: <Eye />, color: 'var(--primary)' },
              { label: 'Unique Visitors', value: stats?.overview.uniqueVisitors, icon: <Users />, color: 'var(--teal)' },
              { label: 'Total Submissions', value: stats?.overview.totalSubmissions, icon: <FileText />, color: 'var(--gold)' },
              { label: 'Top Page', value: stats?.overview.mostVisitedPage, icon: <Activity />, color: 'var(--teal)' },
            ].map((s, i) => (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} key={i} className="glass-panel p-6 border border-white/10">
                <div className="p-3 bg-white/5 rounded-xl w-fit mb-4" style={{ color: s.color }}>{s.icon}</div>
                <div className="text-white/50 text-sm font-semibold mb-1 uppercase tracking-wider">{s.label}</div>
                <div className="text-3xl font-bold truncate">{s.value || 0}</div>
              </motion.div>
            ))}
          </div>

          {/* Charts Row 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="glass-panel p-8 border border-white/10">
              <h3 className="text-xl font-bold mb-8">Daily Traffic (Last 30 Days)</h3>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={stats?.charts.viewsPerDay}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                    <XAxis dataKey="date" stroke="#ffffff40" fontSize={12} />
                    <YAxis stroke="#ffffff40" fontSize={12} />
                    <Tooltip contentStyle={{ background: '#0a0a0a', border: '1px solid #333' }} />
                    <Line type="monotone" dataKey="count" stroke="var(--primary)" strokeWidth={3} dot={{ fill: 'var(--primary)', strokeWidth: 2 }} activeDot={{ r: 8 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="glass-panel p-8 border border-white/10">
              <h3 className="text-xl font-bold mb-8">Device Distribution</h3>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={stats?.charts.deviceBreakdown} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={5} dataKey="value">
                      {stats?.charts.deviceBreakdown.map((_: any, index: number) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ background: '#0a0a0a', border: '1px solid #333' }} />
                    <Legend verticalAlign="bottom" height={36}/>
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Charts Row 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="glass-panel p-8 border border-white/10">
              <h3 className="text-xl font-bold mb-8">Top 5 Pages</h3>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={stats?.charts.topPages} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" horizontal={false} />
                    <XAxis type="number" stroke="#ffffff40" fontSize={12} />
                    <YAxis dataKey="name" type="category" stroke="#ffffff40" fontSize={10} width={100} />
                    <Tooltip contentStyle={{ background: '#0a0a0a', border: '1px solid #333' }} />
                    <Bar dataKey="count" fill="var(--teal)" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="glass-panel p-8 border border-white/10">
              <h3 className="text-xl font-bold mb-8">Referrers (Top Sources)</h3>
              <div className="space-y-4">
                {stats?.referrers.map((r: any, i: number) => (
                   <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-teal"></div>
                        <span className="text-sm font-medium">{r.domain}</span>
                      </div>
                      <span className="text-sm font-bold">{r.count}</span>
                   </div>
                ))}
              </div>
            </div>
          </div>

          <header className="mb-8 mt-16">
            <h2 className="text-3xl font-bold mb-2">Detailed Records</h2>
            <p className="text-white/60">Form submission management and auditing</p>
          </header>

          {/* Submissions Section */}
          <div className="glass-panel border border-white/10 overflow-hidden">
            {/* Tabs */}
            <div className="flex border-b border-white/10">
                {['enquiry', 'registration'].map((t) => (
                    <button 
                      key={t}
                      onClick={() => { setTab(t as any); setPage(1); }}
                      className={`px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all ${tab === t ? 'bg-primary text-white' : 'text-white/40 hover:text-white'}`}
                    >
                        {t}
                    </button>
                ))}
            </div>

            <div className="p-6 lg:p-10">
                {/* Tools */}
                <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-10">
                    <div className="relative w-full md:w-96">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" size={18} />
                        <input 
                          type="text" 
                          placeholder="Global Search..."
                          className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm focus:outline-none focus:border-primary transition-all"
                          value={search}
                          onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                    <button onClick={exportCSV} className="btn-primary w-full md:w-auto px-6 py-3 flex items-center justify-center gap-2 rounded-xl text-sm transition-all active:scale-95">
                        <Download size={18} /> Export CSV
                    </button>
                </div>

                {/* Table */}
                <div className="overflow-x-auto min-h-[400px]">
                    <table className="w-full text-left border-separate border-spacing-y-3">
                        <thead>
                            <tr className="text-white/40 text-[10px] uppercase tracking-widest font-bold">
                                {tab === 'enquiry' ? (
                                    <>
                                        <th className="px-6 py-4 cursor-pointer hover:text-white" onClick={() => { setSortField('name'); setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc'); }}>Name</th>
                                        <th className="px-6 py-4 cursor-pointer hover:text-white" onClick={() => { setSortField('email'); setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc'); }}>Email</th>
                                        <th className="px-6 py-4 cursor-pointer hover:text-white" onClick={() => { setSortField('subject'); setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc'); }}>Subject</th>
                                        <th className="px-6 py-4 cursor-pointer hover:text-white" onClick={() => { setSortField('createdAt'); setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc'); }}>Date</th>
                                    </>
                                ) : (
                                    <>
                                        <th className="px-6 py-4">Name</th>
                                        <th className="px-6 py-4">Email</th>
                                        <th className="px-6 py-4">Faculty</th>
                                        <th className="px-6 py-4">Date</th>
                                    </>
                                )}
                                <th className="px-6 py-4 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <AnimatePresence>
                                {filteredAndSortedSubmissions.map((sub) => (
                                    <motion.tr 
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      exit={{ opacity: 0, x: 10 }}
                                      key={sub.id} 
                                      className="bg-white/5 hover:bg-white/10 transition-all rounded-xl border border-white/5"
                                    >
                                        <td className="px-6 py-4 font-bold text-sm rounded-l-xl uppercase tracking-tight">{sub.name || sub.fullName}</td>
                                        <td className="px-6 py-4 text-xs font-mono text-white/50">{sub.email}</td>
                                        <td className="px-6 py-4 text-xs"><span className="px-2 py-1 bg-teal/10 text-teal rounded border border-teal/20 font-bold uppercase">{sub.subject || sub.faculty}</span></td>
                                        <td className="px-6 py-4 text-[10px] text-white/30 font-bold">{new Date(sub.createdAt).toLocaleDateString()}</td>
                                        <td className="px-6 py-4 rounded-r-xl text-center">
                                            <button onClick={() => handleDelete(sub.id)} className="p-2 text-white/20 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-all">
                                                <Trash2 size={16} />
                                            </button>
                                        </td>
                                    </motion.tr>
                                ))}
                            </AnimatePresence>
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="mt-12 flex items-center justify-between">
                    <div className="text-xs font-bold text-white/30 uppercase tracking-widest">
                        Page {page} of {totalPages}
                    </div>
                    <div className="flex gap-2">
                        <button 
                          disabled={page === 1} 
                          onClick={() => setPage(page - 1)}
                          className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 disabled:opacity-30 transition-all"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button 
                          disabled={page === totalPages} 
                          onClick={() => setPage(page + 1)}
                          className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 disabled:opacity-30 transition-all"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
            </div>
          </div>
          
          <footer className="mt-20 py-10 border-t border-white/10 text-center">
            <p className="text-white/20 text-[10px] font-bold uppercase tracking-[4px]">Integrated with LEADS Digital Platform v1.1</p>
          </footer>
      </main>
    </div>
  );
}
