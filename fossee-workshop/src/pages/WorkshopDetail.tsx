import React from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, MapPin, Users, CheckCircle2, BookOpen, Clock } from "lucide-react";

export default function WorkshopDetail() {
  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="grain-overlay" />
      
      {/* Hero Section */}
      <section className="relative px-6 md:px-12 py-20 bg-primary text-primary-foreground overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-6">
            <div className="flex flex-wrap gap-3">
              <Badge className="bg-white/20 text-white border-none backdrop-blur-sm">Data Science</Badge>
              <Badge variant="outline" className="border-white/30 text-white/80">Advanced Level</Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Advanced Python <br />
              <span className="text-white drop-shadow-sm">for Data Science</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 font-medium leading-relaxed max-w-2xl">
              A masterclass in high-performance computing, distributed systems, and industrial-grade data engineering using the FOSSEE ecosystem.
            </p>
          </div>
          
          <div className="lg:col-span-4 relative hidden lg:block">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
              <img 
                src="https://picsum.photos/seed/detail/800/1000" 
                className="w-full h-full object-cover"
                alt="Workshop"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="px-6 md:px-12 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* Narrative */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm">01</span>
                The Narrative
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-4">
                <p>
                  Delve into the architectural nuances of high-performance computing using Python. This intensive workshop bridges the gap between basic scripting and industrial-grade data engineering. We explore the memory management of NumPy, the vectorized acceleration of Pandas, and the deployment of distributed processing frameworks.
                </p>
                <p>
                  Participants will engage with real-world datasets from the FOSSEE project, learning to optimize pipelines for multi-terabyte environments while maintaining the highest standards of code integrity and reproducibility.
                </p>
              </div>
            </div>

            {/* Curriculum */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm">02</span>
                Curriculum
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Memory Profiling", desc: "Analyzing heap allocation and garbage collection in Python." },
                  { title: "Vectorization", desc: "Leveraging SIMD instructions via NumPy and Cython." },
                  { title: "Distributed Dask", desc: "Scaling computations across multi-node clusters." },
                  { title: "Async IO", desc: "Mastering non-blocking data streams for real-time apps." }
                ].map((item, i) => (
                  <Card key={i} className="p-6 border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Instructor */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm">03</span>
                The Expert
              </h2>
              <div className="flex flex-col md:flex-row gap-8 items-center bg-secondary p-8 rounded-2xl">
                <div className="w-32 h-32 md:w-48 md:h-48 shrink-0">
                  <Avatar className="w-full h-full border-4 border-white shadow-lg">
                    <AvatarImage src="https://picsum.photos/seed/expert/600/600" />
                    <AvatarFallback>AN</AvatarFallback>
                  </Avatar>
                </div>
                <div className="space-y-4 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-slate-900">Dr. Arjan Newman</h3>
                  <p className="text-sm font-bold text-primary uppercase tracking-widest">Lead Researcher • IIT Bombay</p>
                  <p className="text-slate-600 leading-relaxed">
                    A pioneer in computational physics and a core contributor to the SciPy ecosystem. Dr. Newman has led over 50 international workshops on open-source scientific computing.
                  </p>
                  <div className="flex justify-center md:justify-start gap-8 pt-2">
                    <div>
                      <p className="text-xl font-bold text-slate-900">50+</p>
                      <p className="text-[10px] uppercase font-bold text-slate-400">Workshops</p>
                    </div>
                    <div>
                      <p className="text-xl font-bold text-slate-900">12k</p>
                      <p className="text-[10px] uppercase font-bold text-slate-400">Students</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <Card className="p-8 border-slate-100 shadow-xl sticky top-32 space-y-8">
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Course Investment</span>
                <p className="text-4xl font-bold text-slate-900">₹12,500 <span className="text-sm font-normal text-slate-400">/ Session</span></p>
              </div>
              
              <div className="space-y-4 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-4 text-sm text-slate-600">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>October 12-14, 2024</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-slate-600">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>IIT Bombay Campus, Mumbai</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-slate-600">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>18 Contact Hours</span>
                </div>
              </div>

              <div className="space-y-3 pt-6">
                <div className="flex justify-between items-center text-xs font-bold">
                  <span className="text-primary">85% Capacity</span>
                  <span className="text-slate-400">4 Seats Left</span>
                </div>
                <Progress value={85} className="h-2 bg-slate-100" />
              </div>

              <div className="pt-6 space-y-4">
                <Button asChild size="lg" className="w-full rounded-full bg-primary text-white hover:bg-primary/90 py-8 text-lg font-bold">
                  <Link to="/booking">Book This Workshop</Link>
                </Button>
                <p className="text-[10px] text-center font-bold text-slate-400 uppercase tracking-widest">
                  * Certified by FOSSEE, IIT Bombay
                </p>
              </div>
            </Card>
          </aside>

        </div>
      </section>
    </div>
  );
}
