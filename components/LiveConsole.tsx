"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Radio,
  AlertTriangle,
  PhoneCall,
  Activity,
  UserCheck,
  Navigation,
  Clock,
  MapPin,
  CheckCircle2,
  FileText,
  UserPlus,
  Send,
} from "lucide-react";

interface DispatchEvent {
  id: string;
  time: string;
  type: "checkin" | "patrol" | "gps" | "incident" | "reassign" | "notify";
  label: string;
  officer: string;
  location: string;
}

const initialEvents: DispatchEvent[] = [
  { id: "1", time: "04:16:44", type: "checkin", label: "Officer Checked In", officer: "Officer #214", location: "Perimeter Gate 2" },
  { id: "2", time: "04:16:41", type: "patrol", label: "Patrol Completed", officer: "Officer #217", location: "Site 04-B" },
  { id: "3", time: "04:16:39", type: "gps", label: "GPS Verified", officer: "Officer #109", location: "North Logistics Hub" },
  { id: "4", time: "04:16:36", type: "incident", label: "Incident Report Submitted", officer: "Officer #302", location: "Plaza Tower West" },
  { id: "5", time: "04:16:34", type: "reassign", label: "Replacement Officer Assigned", officer: "Officer #118", location: "Site 11-A" },
  { id: "6", time: "04:16:31", type: "notify", label: "Client Notification Sent", officer: "Dispatch Command", location: "HQ System" },
];

const eventPool: Omit<DispatchEvent, "id" | "time">[] = [
  { type: "checkin", label: "Officer Checked In", officer: "Officer #405", location: "South Warehouse Entrance" },
  { type: "patrol", label: "Checkpoint Scanned", officer: "Officer #214", location: "Building C - Zone 4" },
  { type: "gps", label: "Geofence Verification OK", officer: "Officer #512", location: "East Perimeter Fence" },
  { type: "incident", label: "DAR Uploaded for Review", officer: "Officer #109", location: "Commercial Center B" },
  { type: "reassign", label: "Standby Officer Dispatched", officer: "Officer #601", location: "Terminal 3 Loading Bay" },
  { type: "notify", label: "Escalation Alert Cleared", officer: "Dispatch Supervisor", location: "Client Portal" },
];

export default function LiveConsole() {
  const [events, setEvents] = useState<DispatchEvent[]>(initialEvents);
  const [timeString, setTimeString] = useState<string>("");
  const [guardsOnline, setGuardsOnline] = useState(148);
  const [activePatrols, setActivePatrols] = useState(42);

  // Live Clock & Dynamic Feed Generator
  useEffect(() => {
    const clockInterval = setInterval(() => {
      const now = new Date();
      setTimeString(now.toLocaleTimeString("en-US", { hour12: false }));
    }, 1000);

    const feedInterval = setInterval(() => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString("en-US", { hour12: false });
      const randomTemplate = eventPool[Math.floor(Math.random() * eventPool.length)];

      const newEvent: DispatchEvent = {
        id: Math.random().toString(36).substring(2, 9),
        time: timeStr,
        ...randomTemplate,
      };

      setEvents((prev) => [newEvent, ...prev.slice(0, 5)]);

      // Fluctuate stats subtly for live effect
      setGuardsOnline((prev) => prev + (Math.random() > 0.5 ? 1 : -1));
      setActivePatrols((prev) => Math.max(35, prev + (Math.random() > 0.5 ? 1 : -1)));
    }, 3200);

    return () => {
      clearInterval(clockInterval);
      clearInterval(feedInterval);
    };
  }, []);

  const getEventBadge = (type: DispatchEvent["type"]) => {
    switch (type) {
      case "checkin":
        return { color: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30", icon: <UserCheck className="w-3.5 h-3.5" /> };
      case "patrol":
        return { color: "bg-blue-500/15 text-blue-400 border-blue-500/30", icon: <CheckCircle2 className="w-3.5 h-3.5" /> };
      case "gps":
        return { color: "bg-cyan-500/15 text-cyan-400 border-cyan-500/30", icon: <Navigation className="w-3.5 h-3.5" /> };
      case "incident":
        return { color: "bg-amber-500/15 text-amber-400 border-amber-500/30", icon: <FileText className="w-3.5 h-3.5" /> };
      case "reassign":
        return { color: "bg-purple-500/15 text-purple-400 border-purple-500/30", icon: <UserPlus className="w-3.5 h-3.5" /> };
      case "notify":
        return { color: "bg-indigo-500/15 text-indigo-400 border-indigo-500/30", icon: <Send className="w-3.5 h-3.5" /> };
    }
  };

  return (
    <div className="relative w-full rounded-2xl p-[1px] bg-gradient-to-b from-blue-500/40 via-indigo-500/20 to-blue-900/40 shadow-[0_0_50px_rgba(46,107,255,0.15)] overflow-hidden font-sans">
      
      {/* BACKGROUND MOVING GRID PATTERN */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(91,140,255,0.4) 1px, transparent 0)`,
          backgroundSize: "24px 24px"
        }}
      />

      {/* FLOATING BLUE PARTICLES */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-400/30 blur-sm"
            style={{
              width: Math.random() * 6 + 2,
              height: Math.random() * 6 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              duration: Math.random() * 4 + 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* GLASS CONTAINER */}
      <div className="relative bg-[#0A1224]/85 backdrop-blur-2xl rounded-2xl p-4 sm:p-6 text-slate-100 flex flex-col gap-5 border border-white/10">

        {/* HEADER BAR */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center w-3 h-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </div>
            <span className="font-mono text-xs font-bold tracking-widest uppercase text-slate-300">
              SOC COMMAND CENTER // LIVE NODE US-01
            </span>
          </div>

          <div className="flex items-center gap-4 font-mono text-xs text-slate-400">
            <div className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-md border border-white/10">
              <Clock className="w-3.5 h-3.5 text-blue-400" />
              <span>{timeString || "00:00:00"} UTC</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
              <Activity className="w-3.5 h-3.5" />
              <span>SYSTEMS OPTIMAL</span>
            </div>
          </div>
        </div>

        {/* TOP ROW - METRIC CARDS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="bg-white/5 border border-white/10 p-3.5 rounded-xl flex items-center justify-between shadow-inner">
            <div>
              <div className="text-[11px] font-mono uppercase text-slate-400 font-medium">Guards Online</div>
              <div className="text-2xl font-extrabold text-white mt-0.5">{guardsOnline}</div>
            </div>
            <div className="p-2.5 rounded-lg bg-blue-500/15 border border-blue-500/30 text-blue-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 p-3.5 rounded-xl flex items-center justify-between shadow-inner">
            <div>
              <div className="text-[11px] font-mono uppercase text-slate-400 font-medium">Active Patrols</div>
              <div className="text-2xl font-extrabold text-cyan-400 mt-0.5">{activePatrols}</div>
            </div>
            <div className="p-2.5 rounded-lg bg-cyan-500/15 border border-cyan-500/30 text-cyan-400">
              <Radio className="w-5 h-5 animate-pulse" />
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 p-3.5 rounded-xl flex items-center justify-between shadow-inner">
            <div>
              <div className="text-[11px] font-mono uppercase text-slate-400 font-medium">Incidents Today</div>
              <div className="text-2xl font-extrabold text-amber-400 mt-0.5">3</div>
            </div>
            <div className="p-2.5 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-400">
              <AlertTriangle className="w-5 h-5" />
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 p-3.5 rounded-xl flex items-center justify-between shadow-inner">
            <div>
              <div className="text-[11px] font-mono uppercase text-slate-400 font-medium">Emergency Calls</div>
              <div className="text-2xl font-extrabold text-emerald-400 mt-0.5">0</div>
            </div>
            <div className="p-2.5 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
              <PhoneCall className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* MIDDLE SECTION: MAIN DISPATCH FEED + RADAR/MAP */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          
          {/* CENTER: DISPATCH LOG CONSOLE */}
          <div className="lg:col-span-2 bg-slate-950/60 border border-white/10 rounded-xl p-4 flex flex-col justify-between min-h-[320px]">
            <div className="flex items-center justify-between border-b border-white/10 pb-2.5 mb-3">
              <span className="font-mono text-xs font-bold text-blue-400 uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                Real-Time Operational Feed
              </span>
              <span className="text-[10px] font-mono text-slate-500">AUTO-SYNC ENABLED</span>
            </div>

            <div className="space-y-2.5 overflow-hidden">
              <AnimatePresence initial={false}>
                {events.map((ev) => {
                  const badge = getEventBadge(ev.type);
                  return (
                    <motion.div
                      key={ev.id}
                      initial={{ opacity: 0, y: -12, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center justify-between gap-2 p-2.5 rounded-lg bg-white/[0.03] border border-white/5 hover:border-white/15 transition-all text-xs"
                    >
                      <div className="flex items-center gap-3 truncate">
                        <span className="font-mono text-slate-400 shrink-0 text-[11px]">{ev.time}</span>
                        <span className={`flex items-center gap-1.5 px-2 py-0.5 rounded border text-[10px] font-bold font-mono uppercase shrink-0 ${badge.color}`}>
                          {badge.icon}
                          {ev.label}
                        </span>
                        <span className="text-slate-200 truncate font-medium">{ev.officer}</span>
                      </div>
                      <span className="hidden sm:flex items-center gap-1 text-[11px] text-slate-400 font-mono shrink-0">
                        <MapPin className="w-3 h-3 text-slate-500" />
                        {ev.location}
                      </span>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>

          {/* RIGHT PANEL: US RADAR MAP WIDGET */}
          <div className="relative bg-slate-950/60 border border-white/10 rounded-xl p-4 flex flex-col justify-between overflow-hidden min-h-[320px]">
            <div className="flex items-center justify-between border-b border-white/10 pb-2.5 z-10">
              <span className="font-mono text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                National Field Radar
              </span>
              <span className="text-[10px] font-mono text-emerald-400">ACTIVE SWEEP</span>
            </div>

            {/* RADAR CANVAS CONTAINER */}
            <div className="relative flex-1 flex items-center justify-center my-2">
              
              {/* RADAR SWEEP LINE */}
              <motion.div
                className="absolute w-44 h-44 rounded-full border border-blue-500/20"
                style={{
                  background: "conic-gradient(from 0deg, rgba(46,107,255,0.4) 0deg, transparent 60deg, transparent 360deg)",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              />

              {/* CONCENTRIC RADAR RINGS */}
              <div className="absolute w-44 h-44 rounded-full border border-blue-500/20"></div>
              <div className="absolute w-28 h-28 rounded-full border border-blue-500/20"></div>
              <div className="absolute w-12 h-12 rounded-full border border-blue-500/20"></div>

              {/* MOCK MAP GRAPHIC WITH CITY MARKERS */}
              <div className="relative w-full h-36 flex items-center justify-center">
                
                {/* Simulated US Map Dot Clusters */}
                <div className="relative w-48 h-28 opacity-60">
                  {/* Los Angeles Marker */}
                  <div className="absolute top-12 left-4 group">
                    <span className="absolute -inset-1 rounded-full bg-blue-400 opacity-75 animate-ping"></span>
                    <span className="relative block w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span className="absolute left-3 -top-1 text-[9px] font-mono text-slate-300 opacity-80">LA</span>
                  </div>

                  {/* Texas Marker */}
                  <div className="absolute top-18 left-20">
                    <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-75 animate-ping"></span>
                    <span className="relative block w-2 h-2 bg-emerald-400 rounded-full"></span>
                    <span className="absolute left-3 -top-1 text-[9px] font-mono text-slate-300 opacity-80">TX</span>
                  </div>

                  {/* Chicago Marker */}
                  <div className="absolute top-6 left-28">
                    <span className="relative block w-2 h-2 bg-cyan-400 rounded-full"></span>
                    <span className="absolute left-3 -top-1 text-[9px] font-mono text-slate-300 opacity-80">CHI</span>
                  </div>

                  {/* New York Marker */}
                  <div className="absolute top-8 right-4">
                    <span className="absolute -inset-1 rounded-full bg-blue-400 opacity-75 animate-ping"></span>
                    <span className="relative block w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span className="absolute right-3 -top-1 text-[9px] font-mono text-slate-300 opacity-80">NY</span>
                  </div>
                </div>

              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 border-t border-white/10 pt-2 z-10">
              <span>LAT/LONG: 34.0522° N, 118.2437° W</span>
              <span className="text-blue-400 font-bold">4 ZONES</span>
            </div>
          </div>

        </div>

        {/* BOTTOM ROW: LIVE OFFICER STATUS CARDS */}
        <div className="border-t border-white/10 pt-4">
          <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center justify-between">
            <span>Active Officer Status Index</span>
            <span className="text-slate-500 font-normal">REAL-TIME ROSTER</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
            
            <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <div>
                <div className="text-[11px] font-bold text-slate-200">On Duty</div>
                <div className="text-[10px] font-mono text-slate-400">114 Officers</div>
              </div>
            </div>

            <div className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              <div>
                <div className="text-[11px] font-bold text-slate-200">En Route</div>
                <div className="text-[10px] font-mono text-slate-400">18 Officers</div>
              </div>
            </div>

            <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <div>
                <div className="text-[11px] font-bold text-slate-200">Patrol Active</div>
                <div className="text-[10px] font-mono text-slate-400">42 Patrols</div>
              </div>
            </div>

            <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              <div>
                <div className="text-[11px] font-bold text-slate-200">Break Status</div>
                <div className="text-[10px] font-mono text-slate-400">16 Officers</div>
              </div>
            </div>

            <div className="p-2.5 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center gap-2.5 col-span-2 sm:col-span-1">
              <span className="w-2 h-2 rounded-full bg-purple-400"></span>
              <div>
                <div className="text-[11px] font-bold text-slate-200">Emergency Resp.</div>
                <div className="text-[10px] font-mono text-slate-400">0 Active</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}