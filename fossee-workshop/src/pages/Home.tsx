import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Star, Users, Calendar, Award, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const FEATURED_WORKSHOPS = [
  {
    id: "python-ds",
    title: "Advanced Data Science with Python",
    category: "Data Science",
    instructor: "Dr. Rajesh Kumar",
    image: "https://picsum.photos/seed/python/800/1000",
  },
  {
    id: "scilab-eng",
    title: "Scientific Computing with Scilab",
    category: "Engineering",
    instructor: "Prof. Sunita Sharma",
    image: "https://picsum.photos/seed/scilab/800/1000",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="grain-overlay" />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex flex-col justify-center pt-32 pb-20 overflow-hidden bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
                FOSSEE Workshop <br />
                <span className="text-white drop-shadow-sm">Booking Portal</span>
              </h1>
              <p className="max-w-xl text-xl text-primary-foreground/80 font-medium leading-relaxed">
                Empowering education through Open Source Software. Book specialized workshops led by experts from IIT Bombay for your institution.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Button asChild size="lg" className="rounded-full bg-white text-slate-900 hover:bg-slate-50 border-none px-8 py-6 text-lg font-bold shadow-lg">
                <Link to="/catalog">Browse Workshops</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/5 px-8 py-6 text-lg font-bold">
                <Link to="/booking">Request a Session</Link>
              </Button>
            </motion.div>
          </div>

          <div className="hidden lg:block lg:col-span-5 relative">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="aspect-square relative overflow-hidden rounded-2xl shadow-2xl border-4 border-white"
            >
              <img
                src="https://picsum.photos/seed/iitb-campus/800/800"
                alt="IIT Bombay Campus"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="space-y-2">
              <h2 className="text-4xl font-bold text-slate-900">Featured Workshops</h2>
              <p className="text-slate-500 max-w-md">
                Our most popular sessions designed for maximum impact.
              </p>
            </div>
            <Button asChild variant="ghost" className="text-primary font-bold hover:bg-primary/10">
              <Link to="/catalog" className="flex items-center gap-2">
                View All Workshops <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURED_WORKSHOPS.map((workshop, i) => (
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
                      src={workshop.image}
                      alt={workshop.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary text-white border-none">{workshop.category}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{workshop.title}</h3>
                    <p className="text-sm text-slate-600 mb-6 line-clamp-2">
                      Learn from {workshop.instructor} in this comprehensive workshop designed for students and faculty.
                    </p>
                    <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">IIT Bombay</span>
                      <Button asChild size="sm" variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-white">
                        <Link to={`/workshop/${workshop.id}`}>View Details</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats / Trust Rail */}
      <section className="border-y border-foreground/10 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { label: "Institutions", value: "120+" },
              { label: "Experts", value: "45" },
              { label: "Participants", value: "15k+" },
              { label: "Success Rate", value: "98%" },
            ].map((stat, i) => (
              <div key={i} className="p-12 border-r border-foreground/10 last:border-r-0 flex flex-col items-center text-center space-y-4">
                <span className="text-4xl font-serif">{stat.value}</span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-50">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-48 bg-foreground text-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12 relative z-10">
          <h2 className="text-6xl md:text-8xl leading-none">
            Ready to <br />
            <span className="text-prestige lowercase font-normal opacity-50">transform your</span> <br />
            Curriculum?
          </h2>
          <p className="text-xl font-light opacity-60 leading-relaxed max-w-2xl mx-auto">
            Join the ranks of premier institutions fostering open-source excellence. Book your specialized workshop session today.
          </p>
          <div className="pt-8">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-white hover:text-primary border-none px-16 py-8 text-lg font-bold rounded-full shadow-2xl transition-all hover:scale-105">
              <Link to="/booking">Initiate Booking Request</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
