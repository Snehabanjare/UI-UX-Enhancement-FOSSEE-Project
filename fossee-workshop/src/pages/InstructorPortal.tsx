import React from "react";
import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  Calendar, 
  Users, 
  CheckCircle2, 
  Clock, 
  MoreVertical, 
  Mail, 
  MapPin,
  ChevronRight,
  Plus
} from "lucide-react";

export default function InstructorPortal() {
  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="grain-overlay" />
      
      {/* Header */}
      <section className="px-6 md:px-12 py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold text-primary-foreground/60 uppercase tracking-widest block">Management Dashboard</span>
            <h1 className="text-4xl md:text-6xl font-bold">
              Curator's <br />
              <span className="text-white drop-shadow-sm">Overview</span>
            </h1>
          </div>
          
          <div className="flex gap-4">
            <Button className="rounded-full bg-white text-slate-900 hover:bg-slate-50 px-8 py-6 font-bold shadow-lg">
              <Plus className="w-4 h-4 mr-2" /> New Workshop
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Requests */}
          <div className="lg:col-span-8 space-y-8">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-slate-900">Incoming Requests</h2>
              <Badge variant="outline" className="rounded-full border-primary text-primary px-4 py-1 text-xs font-bold">03 Pending</Badge>
            </div>

            <div className="space-y-6">
              {[
                { 
                  name: "Dr. Amit Khanna", 
                  inst: "BITS Pilani, Goa Campus", 
                  workshop: "Advanced Python for Scientific Computing", 
                  date: "OCT 24, 2024", 
                  pax: "120 PAX", 
                  mode: "REMOTE" 
                },
                { 
                  name: "Prof. Sarah Roy", 
                  inst: "Jadavpur University", 
                  workshop: "Open Source EDA Tools Workshop", 
                  date: "NOV 02, 2024", 
                  pax: "45 PAX", 
                  mode: "IN-PERSON" 
                }
              ].map((req, i) => (
                <Card key={i} className="p-8 border-slate-100 shadow-sm hover:shadow-md transition-all group">
                  <div className="flex flex-col md:flex-row justify-between gap-8">
                    <div className="space-y-6 flex-1">
                      <div className="flex items-center gap-4">
                        <Avatar className="w-12 h-12 border-2 border-primary/10">
                          <AvatarFallback className="bg-primary text-white font-bold">{req.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="text-lg font-bold text-slate-900">{req.name}</h3>
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{req.inst}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <h4 className="text-2xl font-bold text-primary">{req.workshop}</h4>
                        <div className="flex flex-wrap gap-6 pt-2">
                          <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                            <Calendar className="w-3 h-3 text-primary" /> {req.date}
                          </div>
                          <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                            <Users className="w-3 h-3 text-primary" /> {req.pax}
                          </div>
                          <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                            <MapPin className="w-3 h-3 text-primary" /> {req.mode}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-row md:flex-col gap-3 justify-end">
                      <Button className="rounded-full bg-primary text-white hover:bg-primary/90 px-8 py-4 font-bold">Accept</Button>
                      <Button variant="outline" className="rounded-full border-slate-200 text-slate-400 hover:text-primary px-8 py-4 font-bold">Postpone</Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Column: Stats & Schedule */}
          <aside className="lg:col-span-4 space-y-12">
            
            {/* Analytics Card */}
            <Card className="p-8 border-slate-100 shadow-sm bg-slate-50 space-y-8">
              <div className="flex justify-between items-center">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Annual Trajectory</span>
                <BarChart3 className="w-4 h-4 text-slate-400" />
              </div>
              
              <div className="flex items-end justify-between h-32 gap-2">
                {[40, 60, 80, 50, 90, 70].map((h, i) => (
                  <div key={i} className="flex-1 bg-primary/10 hover:bg-primary transition-colors cursor-pointer rounded-t-sm" style={{ height: `${h}%` }} />
                ))}
              </div>
              
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-200">
                <div>
                  <p className="text-3xl font-bold text-slate-900">42</p>
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Workshops</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-slate-900">2.4k</p>
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Participants</p>
                </div>
              </div>
            </Card>

            {/* Confirmed Schedule */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-900">Confirmed Schedule</h2>
              <div className="space-y-4">
                {[
                  { date: "12", month: "Oct", title: "Quantum Computing Intro", loc: "IIT Madras" },
                  { date: "18", month: "Oct", title: "R-Lang for Data Science", loc: "Delhi University" }
                ].map((item, i) => (
                  <Card key={i} className="flex items-center gap-6 p-6 border-slate-100 shadow-sm hover:shadow-md transition-all cursor-pointer group">
                    <div className="text-center min-w-[40px]">
                      <p className="text-xl font-bold text-primary leading-none">{item.date}</p>
                      <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">{item.month}</p>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                      <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">{item.loc}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </Card>
                ))}
              </div>
              <Button variant="outline" className="w-full rounded-full py-6 font-bold border-slate-200 text-slate-500 hover:text-primary">View Full Calendar</Button>
            </div>

          </aside>

        </div>
      </section>
    </div>
  );
}
