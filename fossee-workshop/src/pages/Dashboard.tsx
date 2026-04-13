import React from "react";
import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, CheckCircle2, AlertCircle, LayoutDashboard, Settings, LogOut, ChevronRight } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="grain-overlay" />
      
      {/* Header */}
      <section className="px-6 md:px-12 py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold text-primary-foreground/60 uppercase tracking-widest block">Student Dashboard</span>
            <h1 className="text-4xl md:text-6xl font-bold">
              Welcome, <br />
              <span className="text-white drop-shadow-sm">Dr. Arjun</span>
            </h1>
          </div>
          
          <div className="flex items-center gap-6 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
            <Avatar className="w-16 h-16 border-2 border-white/30">
              <AvatarImage src="https://picsum.photos/seed/student/200/200" />
              <AvatarFallback>AJ</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-lg font-bold">Academic Curator</p>
              <p className="text-xs text-primary-foreground/60 font-bold uppercase tracking-widest">IIT Bombay Portal</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Sidebar Navigation */}
          <aside className="lg:col-span-3">
            <Card className="p-4 border-slate-100 shadow-sm space-y-2">
              {[
                { label: "Overview", icon: <LayoutDashboard className="w-4 h-4" />, active: true },
                { label: "My Bookings", icon: <BookOpen className="w-4 h-4" />, active: false },
                { label: "Certifications", icon: <CheckCircle2 className="w-4 h-4" />, active: false },
                { label: "Settings", icon: <Settings className="w-4 h-4" />, active: false },
                { label: "Logout", icon: <LogOut className="w-4 h-4" />, active: false },
              ].map((item) => (
                <Button 
                  key={item.label}
                  variant={item.active ? "default" : "ghost"} 
                  className={`w-full justify-start rounded-xl px-4 py-6 text-sm font-bold transition-all ${item.active ? "bg-primary text-white" : "text-slate-500 hover:bg-slate-50 hover:text-primary"}`}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.label}
                </Button>
              ))}
            </Card>
          </aside>

          {/* Dashboard Content */}
          <div className="lg:col-span-9 space-y-12">
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Workshops", value: "12", icon: <BookOpen className="w-5 h-5 text-blue-500" /> },
                { label: "Hours", value: "48", icon: <Clock className="w-5 h-5 text-green-500" /> },
                { label: "Pending", value: "02", icon: <AlertCircle className="w-5 h-5 text-amber-500" /> },
                { label: "Completed", value: "10", icon: <CheckCircle2 className="w-5 h-5 text-indigo-500" /> },
              ].map((stat, i) => (
                <Card key={i} className="p-6 border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center space-y-3">
                  <div className="p-3 rounded-full bg-slate-50">{stat.icon}</div>
                  <div>
                    <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
                    <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">{stat.label}</p>
                  </div>
                </Card>
              ))}
            </div>

            {/* Recent Bookings */}
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-slate-900">Recent Bookings</h2>
                <Button variant="link" className="text-sm font-bold text-primary">View All</Button>
              </div>
              
              <Card className="border-slate-100 shadow-sm overflow-hidden">
                <Table>
                  <TableHeader className="bg-slate-50">
                    <TableRow className="border-slate-100">
                      <TableHead className="text-xs font-bold text-slate-500 uppercase tracking-widest px-6 py-4">Workshop</TableHead>
                      <TableHead className="text-xs font-bold text-slate-500 uppercase tracking-widest px-6 py-4">Date</TableHead>
                      <TableHead className="text-xs font-bold text-slate-500 uppercase tracking-widest px-6 py-4">Status</TableHead>
                      <TableHead className="text-xs font-bold text-slate-500 uppercase tracking-widest px-6 py-4 text-right">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { name: "Python for Data Science", date: "Oct 24, 2024", status: "Confirmed" },
                      { name: "Scilab Engineering", date: "Nov 12, 2024", status: "Pending" },
                      { name: "LaTeX Typography", date: "Dec 05, 2024", status: "Completed" },
                    ].map((row, i) => (
                      <TableRow key={i} className="border-slate-50 hover:bg-slate-50/50 transition-colors">
                        <TableCell className="px-6 py-4">
                          <p className="text-sm font-bold text-slate-900">{row.name}</p>
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">IIT Bombay</p>
                        </TableCell>
                        <TableCell className="px-6 py-4 text-sm text-slate-500">{row.date}</TableCell>
                        <TableCell className="px-6 py-4">
                          <Badge className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest ${row.status === "Confirmed" ? "bg-green-100 text-green-700" : row.status === "Pending" ? "bg-amber-100 text-amber-700" : "bg-blue-100 text-blue-700"}`}>
                            {row.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="px-6 py-4 text-right">
                          <Button variant="ghost" size="icon" className="text-slate-400 hover:text-primary">
                            <ChevronRight className="w-4 h-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
