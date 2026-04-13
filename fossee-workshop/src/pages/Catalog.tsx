import React, { useState } from "react";
import { motion } from "motion/react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Search, Filter, ChevronRight, Calendar, Users, ArrowRight } from "lucide-react";

const WORKSHOPS = [
  {
    id: "python-ds",
    title: "Advanced Python for Data Science",
    category: "Scientific Computing",
    institution: "IIT Bombay",
    desc: "Master matrix operations and complex signal processing using open-source tools for engineering excellence.",
    date: "Oct 24, 2024",
    seats: "12 Seats left",
    img: "https://picsum.photos/seed/python-cat/800/1000",
    active: true
  },
  {
    id: "django-sys",
    title: "Architecting Scalable Systems with Django",
    category: "Fullstack Dev",
    institution: "FOSSEE Labs",
    desc: "A deep dive into REST frameworks, middleware optimization, and database security protocols.",
    date: "Nov 02, 2024",
    seats: "42 Seats left",
    img: "https://picsum.photos/seed/django-cat/800/1000",
    active: false
  },
  {
    id: "latex-pub",
    title: "Journal Publication Layouts in LaTeX",
    category: "Typography",
    institution: "Self-Paced",
    desc: "Technical writing standards for international journals using professional typesetting engines.",
    date: "On-Demand",
    seats: "Certified",
    img: "https://picsum.photos/seed/latex-cat/800/1000",
    active: false
  },
  {
    id: "scilab-eng",
    title: "Scientific Computing with Scilab",
    category: "Engineering",
    institution: "IIT Bombay",
    desc: "Numerical analysis and simulation for mechanical and electrical engineering students.",
    date: "Dec 12, 2024",
    seats: "25 Seats left",
    img: "https://picsum.photos/seed/scilab-cat/800/1000",
    active: true
  }
];

export default function Catalog() {
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="grain-overlay" />
      
      {/* Header */}
      <section className="px-6 md:px-12 py-20 bg-secondary border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8">
            Workshop Catalog
          </h1>
          
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search workshops..."
                className="rounded-full border-slate-200 bg-white pl-12 py-6 focus:ring-primary/20"
              />
            </div>
            
            <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar w-full md:w-auto">
              {["All", "Python", "Scilab", "LaTeX", "R"].map((cat) => (
                <Button 
                  key={cat}
                  variant={cat === "All" ? "default" : "outline"} 
                  className="rounded-full px-6 font-bold transition-all hover:scale-105"
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="px-6 md:px-12 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WORKSHOPS.map((workshop, i) => (
              <motion.div
                key={workshop.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="overflow-hidden border-none shadow-sm hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={workshop.img}
                      alt={workshop.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    {workshop.active && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-green-500 text-white border-none">Enrollment Open</Badge>
                      </div>
                    )}
                  </div>
                  
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="flex justify-between items-center mb-4">
                      <Badge variant="secondary" className="bg-slate-100 text-slate-600 border-none">{workshop.category}</Badge>
                      <span className="text-xs font-bold text-slate-400">{workshop.institution}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{workshop.title}</h3>
                    <p className="text-sm text-slate-600 mb-6 line-clamp-3">{workshop.desc}</p>
                    
                    <div className="mt-auto pt-4 border-t border-slate-100 flex justify-between items-center">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1 text-slate-400">
                          <Calendar className="w-3 h-3" />
                          <span className="text-[10px] font-bold">{workshop.date}</span>
                        </div>
                        <div className="flex items-center gap-1 text-slate-400">
                          <Users className="w-3 h-3" />
                          <span className="text-[10px] font-bold">{workshop.seats}</span>
                        </div>
                      </div>
                      <Button asChild size="sm" variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-white">
                        <Link to={`/workshop/${workshop.id}`}>Details</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-20 pt-8 border-t border-slate-200 flex justify-center items-center gap-4">
            <Button variant="outline" size="sm" className="rounded-full" disabled>Previous</Button>
            <div className="flex gap-2">
              <Button size="sm" className="rounded-full w-8 h-8 p-0">1</Button>
              <Button variant="ghost" size="sm" className="rounded-full w-8 h-8 p-0">2</Button>
              <Button variant="ghost" size="sm" className="rounded-full w-8 h-8 p-0">3</Button>
            </div>
            <Button variant="outline" size="sm" className="rounded-full">Next</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
