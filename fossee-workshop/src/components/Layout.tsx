import { Link, useLocation } from "react-router-dom";
import { HubIcon } from "./Icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const location = useLocation();
  
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Workshops", path: "/catalog" },
    { name: "Bookings", path: "/dashboard" },
    { name: "Profile", path: "/portal" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-slate-950/60 backdrop-blur-xl flex justify-between items-center px-4 md:px-8 h-20 border-b border-white/5">
      <Link to="/" className="flex items-center gap-2">
        <HubIcon className="text-primary text-3xl" />
        <h1 className="text-2xl font-serif italic text-primary tracking-tight font-bold">FOSSEE</h1>
      </Link>
      
      <nav className="hidden md:flex items-center gap-8 font-label text-sm uppercase tracking-widest">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={cn(
              "transition-all duration-400 hover:scale-105",
              location.pathname === link.path 
                ? "text-primary font-bold border-b-2 border-primary" 
                : "text-slate-400 hover:text-slate-100"
            )}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      <Button className="bg-primary text-primary-foreground px-5 py-2 font-label text-xs uppercase tracking-widest font-bold hover:scale-x-105 transition-transform">
        Book a Workshop
      </Button>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-slate-950 py-20 px-4 md:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <HubIcon className="text-primary text-3xl" />
            <h1 className="text-2xl font-serif italic text-primary tracking-tight font-bold">FOSSEE</h1>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mb-8">
            Free/Libre and Open Source Software for Education (FOSSEE) project promotes the use of FLOSS tools to improve the quality of education and research.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 flex items-center justify-center border border-white/10 rounded-full text-muted-foreground hover:text-primary hover:border-primary transition-all">
              <span className="material-symbols-outlined text-sm">public</span>
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center border border-white/10 rounded-full text-muted-foreground hover:text-primary hover:border-primary transition-all">
              <span className="material-symbols-outlined text-sm">mail</span>
            </a>
          </div>
        </div>
        
        <div>
          <h5 className="font-label text-xs uppercase tracking-widest text-foreground mb-8">Navigation</h5>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li><Link to="/catalog" className="hover:text-primary transition-colors">Workshop Catalog</Link></li>
            <li><Link to="/portal" className="hover:text-primary transition-colors">Instructor Portal</Link></li>
            <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
          </ul>
        </div>
        
        <div>
          <h5 className="font-label text-xs uppercase tracking-widest text-foreground mb-8">Affiliation</h5>
          <div className="bg-slate-900 px-6 py-4 rounded-sm border border-white/5">
            <p className="text-[10px] font-label uppercase tracking-widest text-primary mb-2">Hosted at</p>
            <p className="text-sm font-serif italic">Indian Institute of Technology Bombay</p>
          </div>
        </div>
      </div>
      
      <div className="text-center pt-8 border-t border-white/5">
        <p className="font-label text-[10px] text-muted-foreground/50 uppercase tracking-widest">© 2023 FOSSEE IIT Bombay. Empowering Open Education.</p>
      </div>
    </footer>
  );
}

export function MobileNav() {
  const location = useLocation();
  
  const navLinks = [
    { name: "Home", path: "/", icon: "home_storage" },
    { name: "Workshops", path: "/catalog", icon: "school" },
    { name: "Bookings", path: "/dashboard", icon: "event_seat" },
    { name: "Profile", path: "/portal", icon: "account_circle" },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full h-16 bg-slate-900/80 backdrop-blur-lg flex justify-around items-center px-4 rounded-t-xl z-50 pb-safe shadow-[0_-4px_24px_rgba(229,160,30,0.06)]">
      {navLinks.map((link) => (
        <Link
          key={link.name}
          to={link.path}
          className={cn(
            "flex flex-col items-center justify-center transition-all duration-500",
            location.pathname === link.path ? "text-primary scale-110" : "text-slate-500 active:scale-95"
          )}
        >
          <span 
            className="material-symbols-outlined"
            style={{ fontVariationSettings: location.pathname === link.path ? "'FILL' 1" : "'FILL' 0" }}
          >
            {link.icon}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-widest">{link.name}</span>
        </Link>
      ))}
    </nav>
  );
}
