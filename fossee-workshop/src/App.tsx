import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { 
  Menu, 
  X, 
  ChevronRight, 
  Instagram, 
  Twitter, 
  Linkedin,
  ArrowUpRight,
  Globe,
  BookOpen,
  Users,
  Award
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

// Pages
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import WorkshopDetail from "./pages/WorkshopDetail";
import Booking from "./pages/Booking";

// --- Components ---

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [role="button"]')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <div className="hidden md:block">
      <motion.div
        className="custom-cursor-dot"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 400, mass: 0.5 }}
      />
      <motion.div
        className="custom-cursor-circle"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: isHovering ? 1.8 : 1,
          borderWidth: isHovering ? "2px" : "1.5px",
        }}
        transition={{ type: "spring", damping: 25, stiffness: 200, mass: 0.8 }}
      />
    </div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Catalog", path: "/catalog" },
    { name: "Book a Workshop", path: "/booking" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${isScrolled ? "bg-white shadow-md py-4" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <div className={`w-10 h-10 flex items-center justify-center rounded-lg transition-colors duration-500 ${isScrolled ? "bg-primary text-primary-foreground" : "bg-white text-primary"}`}>
            <span className="text-xl font-bold">F</span>
          </div>
          <div className="flex flex-col">
            <span className={`text-lg font-bold tracking-tight leading-none ${isScrolled ? "text-slate-900" : "text-white"}`}>FOSSEE</span>
            <span className={`text-[10px] uppercase tracking-widest font-semibold ${isScrolled ? "text-slate-500" : "text-yellow-100"}`}>IIT Bombay</span>
          </div>
        </Link>

        <div className={`hidden md:flex items-center gap-8 text-sm font-bold ${isScrolled ? "text-slate-600" : "text-white"}`}>
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.path} 
              className="relative group py-2 transition-colors hover:text-primary"
            >
              <span>{link.name}</span>
              <motion.div 
                className="absolute bottom-0 left-0 w-full h-0.5 bg-primary origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          ))}
          <Button asChild className={`rounded-full px-6 transition-all ${isScrolled ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-white text-primary hover:bg-yellow-50"}`}>
            <Link to="/catalog">Get Started</Link>
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={isScrolled ? "text-slate-900" : "text-white"}>
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full bg-white flex flex-col justify-center items-center gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  to={link.path} 
                  className="text-2xl font-bold text-slate-900 hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Button asChild className="rounded-full bg-primary text-primary-foreground w-full max-w-xs py-6 text-lg font-bold">
                <Link to="/catalog">Explore Catalog</Link>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-6 space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary text-primary-foreground flex items-center justify-center rounded-lg">
                <span className="text-xl font-bold">F</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight leading-none">FOSSEE</span>
                <span className="text-xs uppercase tracking-widest font-semibold text-yellow-400">IIT Bombay</span>
              </div>
            </div>
            <p className="text-slate-400 max-w-md leading-relaxed">
              The FOSSEE project promotes the use of open source software in educational institutions to improve the quality of education and reduce dependency on proprietary software.
            </p>
          </div>
          
          <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <h4 className="text-sm font-bold uppercase tracking-widest text-white">Navigation</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
                <li><Link to="/catalog" className="hover:text-primary transition-colors">Catalog</Link></li>
                <li><Link to="/booking" className="hover:text-primary transition-colors">Book a Workshop</Link></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-sm font-bold uppercase tracking-widest text-white">Resources</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li><a href="https://www.iitb.ac.in" className="hover:text-primary transition-colors">IIT Bombay</a></li>
                <li><a href="https://spoken-tutorial.org" className="hover:text-primary transition-colors">Spoken Tutorial</a></li>
                <li><a href="https://python.fossee.in" className="hover:text-primary transition-colors">Python FOSSEE</a></li>
              </ul>
            </div>
            <div className="space-y-6 col-span-2 md:col-span-1">
              <h4 className="text-sm font-bold uppercase tracking-widest text-white">Contact</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                FOSSEE Project, <br />
                IIT Bombay, Powai, <br />
                Mumbai - 400076
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-slate-500">© 2024 FOSSEE, IIT Bombay. All rights reserved.</p>
          <div className="flex gap-6">
            <Instagram className="w-5 h-5 text-slate-500 hover:text-white cursor-pointer transition-colors" />
            <Twitter className="w-5 h-5 text-slate-500 hover:text-white cursor-pointer transition-colors" />
            <Linkedin className="w-5 h-5 text-slate-500 hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative selection:bg-primary selection:text-primary-foreground">
        <CustomCursor />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/workshop/:id" element={<WorkshopDetail />} />
            <Route path="/booking" element={<Booking />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
