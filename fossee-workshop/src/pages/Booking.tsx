import React, { useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ChevronRight, Calendar, User, Mail, Phone, Building, Users, Info } from "lucide-react";

export default function Booking() {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="grain-overlay" />
      
      {/* Header */}
      <section className="px-6 md:px-12 py-20 bg-primary text-primary-foreground text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Book a Workshop
          </h1>
          <p className="text-xl text-primary-foreground/80 font-medium leading-relaxed max-w-2xl mx-auto">
            Collaborate with IIT Bombay experts to bring world-class FOSSEE workshops to your institution.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="px-6 md:px-12 py-20">
        <div className="max-w-3xl mx-auto">
          
          {/* Progress Bar */}
          <div className="flex justify-between items-center mb-16 relative">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -z-10" />
            <div 
              className="absolute top-1/2 left-0 h-1 bg-primary transition-all duration-500 -z-10" 
              style={{ width: `${((step - 1) / 2) * 100}%` }}
            />
            {[1, 2, 3].map((s) => (
              <div 
                key={s}
                className={`w-10 h-10 rounded-full flex items-center justify-center border-4 transition-all duration-500 ${step >= s ? "bg-primary text-white border-primary" : "bg-white text-slate-300 border-slate-100"}`}
              >
                <span className="text-sm font-bold">{s}</span>
              </div>
            ))}
          </div>

          <Card className="p-8 md:p-12 border-slate-100 shadow-xl">
            <form className="space-y-12">
              
              {/* Step 1: Coordinator Details */}
              {step === 1 && (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-8"
                >
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-slate-900">Coordinator Details</h2>
                    <p className="text-sm text-slate-500">Please provide the primary contact information for the institution.</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <Input className="pl-10 py-6 rounded-xl border-slate-200 focus:ring-primary/20" placeholder="e.g. Dr. Amit Shah" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <Input className="pl-10 py-6 rounded-xl border-slate-200 focus:ring-primary/20" placeholder="amit.shah@university.edu" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <Input className="pl-10 py-6 rounded-xl border-slate-200 focus:ring-primary/20" placeholder="+91 98765 43210" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Institution</label>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <Input className="pl-10 py-6 rounded-xl border-slate-200 focus:ring-primary/20" placeholder="e.g. IIT Delhi" />
                      </div>
                    </div>
                  </div>

                  <div className="pt-6">
                    <Button 
                      type="button"
                      onClick={() => setStep(2)}
                      className="w-full rounded-full bg-primary text-white hover:bg-primary/90 py-8 text-lg font-bold"
                    >
                      Continue to Logistics
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Logistics */}
              {step === 2 && (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-8"
                >
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-slate-900">Workshop Logistics</h2>
                    <p className="text-sm text-slate-500">Define the parameters for your specialized session.</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Preferred Start Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <Input type="date" className="pl-10 py-6 rounded-xl border-slate-200 focus:ring-primary/20" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Expected Participants</label>
                      <div className="relative">
                        <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <Input type="number" className="pl-10 py-6 rounded-xl border-slate-200 focus:ring-primary/20" placeholder="e.g. 50" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Workshop Mode</label>
                    <div className="grid grid-cols-2 gap-4">
                      <Button variant="default" className="rounded-xl py-8 font-bold">In-Person</Button>
                      <Button variant="outline" className="rounded-xl py-8 font-bold border-slate-200 text-slate-400 hover:text-primary">Online</Button>
                    </div>
                  </div>

                  <div className="flex gap-4 pt-6">
                    <Button 
                      type="button"
                      onClick={() => setStep(1)}
                      variant="outline"
                      className="flex-1 rounded-full py-8 font-bold border-slate-200"
                    >
                      Back
                    </Button>
                    <Button 
                      type="button"
                      onClick={() => setStep(3)}
                      className="flex-[2] rounded-full bg-primary text-white hover:bg-primary/90 py-8 text-lg font-bold"
                    >
                      Review Request
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Review */}
              {step === 3 && (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-8"
                >
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-slate-900">Final Review</h2>
                    <p className="text-sm text-slate-500">Please confirm your request details before submission.</p>
                  </div>
                  
                  <div className="p-8 bg-slate-50 rounded-2xl space-y-6">
                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Coordinator</span>
                        <p className="text-lg font-bold text-slate-900">Dr. Amit Shah</p>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Institution</span>
                        <p className="text-lg font-bold text-slate-900">IIT Delhi</p>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Timeline</span>
                        <p className="text-lg font-bold text-slate-900">Nov 12, 2024</p>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Participants</span>
                        <p className="text-lg font-bold text-slate-900">50 Students</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 pt-6">
                    <Button 
                      type="button"
                      onClick={() => setStep(2)}
                      variant="outline"
                      className="flex-1 rounded-full py-8 font-bold border-slate-200"
                    >
                      Edit
                    </Button>
                    <Button 
                      type="submit"
                      className="flex-[2] rounded-full bg-primary text-white hover:bg-primary/90 py-8 text-lg font-bold"
                    >
                      Submit Booking Request
                    </Button>
                  </div>
                </motion.div>
              )}

            </form>
          </Card>
        </div>
      </section>
    </div>
  );
}
