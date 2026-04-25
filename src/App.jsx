import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes, useLocation } from 'react-router-dom';
import { Menu, Moon, Sun, X } from 'lucide-react';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import ProjectsOverview from './pages/ProjectsOverview';

const navLinks = [
  { label: 'About', href: '/#about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Projects', href: '/projects' },
  { label: 'Expertise', href: '/#services' },
  { label: 'Certifications', href: '/#certifications' },
  { label: 'Contact', href: '/#contact' },
];

const socialLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/Rajeshhugar', mark: 'in' },
  { label: 'GitHub', href: 'https://github.com/rajeshhugar', mark: 'GH' },
  { label: 'Twitter', href: 'https://twitter.com/hugarrajesh_', mark: 'X' },
];

const routerBaseName = import.meta.env.BASE_URL.replace(/\/$/, '') || undefined;

const Navigation = ({ darkMode, setDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'border-b border-slate-200/80 bg-white/85 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/85' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3 text-slate-950 transition hover:text-teal-700 dark:text-white dark:hover:text-teal-300">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-950 text-sm font-black text-white dark:bg-white dark:text-slate-950">RH</span>
            <span className="hidden text-sm font-bold leading-tight sm:block">
              Rajesh Hugar
              <br />
              <span className="font-medium text-slate-500 dark:text-slate-400">Gen AI Engineer</span>
            </span>
          </Link>

          <div className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <Link key={link.label} to={link.href} className="text-sm font-bold text-slate-700 transition-colors hover:text-teal-700 dark:text-slate-300 dark:hover:text-teal-300">
                {link.label}
              </Link>
            ))}
            <button type="button" aria-label="Toggle theme" onClick={() => setDarkMode(!darkMode)} className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-800 shadow-sm transition hover:border-teal-300 hover:text-teal-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-100 dark:hover:text-teal-300">
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button type="button" aria-label="Toggle theme" onClick={() => setDarkMode(!darkMode)} className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-800 dark:border-white/10 dark:bg-white/5 dark:text-slate-100">
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button type="button" aria-label="Toggle menu" onClick={() => setMobileOpen(!mobileOpen)} className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-800 dark:border-white/10 dark:bg-white/5 dark:text-slate-100">
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white p-4 shadow-lg dark:border-white/10 dark:bg-slate-950 md:hidden">
          {navLinks.map((link) => (
            <Link key={link.label} to={link.href} onClick={() => setMobileOpen(false)} className="block rounded-lg px-3 py-3 font-bold text-slate-700 hover:bg-slate-50 hover:text-teal-700 dark:text-slate-200 dark:hover:bg-white/5 dark:hover:text-teal-300">
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="border-t border-slate-200 bg-white py-10 dark:border-white/10 dark:bg-slate-950">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-sm text-slate-600 dark:text-slate-400">(c) 2026 Rajesh Hugar. Gen AI Engineer portfolio.</p>
        <div className="flex items-center gap-4">
          {socialLinks.map(({ label, href, mark }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="text-slate-400 transition-colors hover:text-teal-600 dark:hover:text-teal-300">
              <span className="text-sm font-black">{mark}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

const ScrollToHash = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) return;
    setTimeout(() => {
      const element = document.querySelector(hash);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }, [hash, pathname]);

  return null;
};

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem('portfolio-theme');
    if (storedTheme) return storedTheme === 'dark';
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? true;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('portfolio-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <Router basename={routerBaseName}>
      <ScrollToHash />
      <div className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
        <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsOverview />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
