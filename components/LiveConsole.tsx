"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useSpring, useTransform } from "framer-motion";
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

// --- ANIMATED COUNTER PRIMITIVE ---
function AnimatedNumber({ value }: { value: number }) {
  const spring = useSpring(0, { mass: 0.8, stiffness: 45, damping: 15 });
  const display = useTransform(spring, (current) => Math.floor(current));
  const [currentVal, setCurrentVal] = useState(0);

  useEffect(() => {
    spring.set(value);
  }, [value, spring]);

  useEffect(() => {
    return display.on("change", (latest) => setCurrentVal(latest));
  }, [display]);

  return <span>{currentVal}</span>;
}

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
  const [incidentsToday] = useState(3);
  const [emergencyCalls] = useState(0);

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

      // Feed autoscrolls upward: new event comes at top, pushing bottom item out
      setEvents((prev) => [newEvent, ...prev.slice(0, 5)]);
      setGuardsOnline((prev) => prev + (Math.random() > 0.5 ? 1 : -1));
      setActivePatrols((prev) => Math.max(35, prev + (Math.random() > 0.5 ? 1 : -1)));
    }, 3500);

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
      
      {/* 1. FLOATING SUBTLE BLUE PARTICLES IN BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-cyan-400/30 blur-[2px]"
            style={{
              width: `${(i % 3) + 3}px`,
              height: `${(i % 3) + 3}px`,
              top: `${(i * 12) + 8}%`,
              left: `${(i * 11) + 4}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + (i % 3),
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* 2. MOVING BACKGROUND GRID LINES */}
      <motion.div 
        className="absolute inset-0 opacity-15 pointer-events-none z-0"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(91,140,255,0.4) 1px, transparent 0)`,
          backgroundSize: "24px 24px"
        }}
        animate={{ backgroundPositionY: [0, 24] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />

      {/* GLASS CONTAINER */}
      <div className="relative z-10 bg-[#0A1224]/85 backdrop-blur-2xl rounded-2xl p-4 sm:p-6 text-slate-100 flex flex-col gap-5 border border-white/10 overflow-hidden">

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
              <Clock className="w-3.5 h-3.5 text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
              <span>{timeString || "00:00:00"} UTC</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
              <Activity className="w-3.5 h-3.5 drop-shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
              <span>SYSTEMS OPTIMAL</span>
            </div>
          </div>
        </div>

        {/* TOP ROW - METRIC CARDS (FLOATING + HOVER + GLASS REFLECTION + ANIMATED COUNTER) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          
          {/* CARD 1 */}
          <motion.div 
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.02, translateY: -5 }}
            className="relative overflow-hidden bg-white/5 border border-white/10 p-3.5 rounded-xl flex items-center justify-between shadow-inner group transition-colors hover:border-blue-500/40"
          >
            {/* Moving Glass Reflection Sweep */}
            <motion.div
              className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none"
              animate={{ x: ["-100%", "250%"] }}
              transition={{ duration: 6, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}
            />
            <div>
              <div className="text-[11px] font-mono uppercase text-slate-400 font-medium">Guards Online</div>
              <div className="text-2xl font-extrabold text-white mt-0.5 font-mono">
                <AnimatedNumber value={guardsOnline} />
              </div>
            </div>
            <div className="p-2.5 rounded-lg bg-blue-500/15 border border-blue-500/30 text-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.25)]">
              <ShieldCheck className="w-5 h-5 drop-shadow-[0_0_6px_rgba(59,130,246,0.6)]" />
            </div>
          </motion.div>

          {/* CARD 2 */}
          <motion.div 
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            whileHover={{ scale: 1.02, translateY: -5 }}
            className="relative overflow-hidden bg-white/5 border border-white/10 p-3.5 rounded-xl flex items-center justify-between shadow-inner group transition-colors hover:border-cyan-500/40"
          >
            <motion.div
              className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none"
              animate={{ x: ["-100%", "250%"] }}
              transition={{ duration: 6, repeat: Infinity, repeatDelay: 5, ease: "easeInOut" }}
            />
            <div>
              <div className="text-[11px] font-mono uppercase text-slate-400 font-medium">Active Patrols</div>
              <div className="text-2xl font-extrabold text-cyan-400 mt-0.5 font-mono">
                <AnimatedNumber value={activePatrols} />
              </div>
            </div>
            <div className="p-2.5 rounded-lg bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 shadow-[0_0_12px_rgba(56,189,248,0.25)]">
              <Radio className="w-5 h-5 drop-shadow-[0_0_6px_rgba(56,189,248,0.6)] animate-pulse" />
            </div>
          </motion.div>

          {/* CARD 3 */}
          <motion.div 
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            whileHover={{ scale: 1.02, translateY: -5 }}
            className="relative overflow-hidden bg-white/5 border border-white/10 p-3.5 rounded-xl flex items-center justify-between shadow-inner group transition-colors hover:border-amber-500/40"
          >
            <motion.div
              className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none"
              animate={{ x: ["-100%", "250%"] }}
              transition={{ duration: 6, repeat: Infinity, repeatDelay: 3.5, ease: "easeInOut" }}
            />
            <div>
              <div className="text-[11px] font-mono uppercase text-slate-400 font-medium">Incidents Today</div>
              <div className="text-2xl font-extrabold text-amber-400 mt-0.5 font-mono">
                <AnimatedNumber value={incidentsToday} />
              </div>
            </div>
            <div className="p-2.5 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.25)]">
              <AlertTriangle className="w-5 h-5 drop-shadow-[0_0_6px_rgba(245,158,11,0.6)]" />
            </div>
          </motion.div>

          {/* CARD 4 */}
          <motion.div 
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            whileHover={{ scale: 1.02, translateY: -5 }}
            className="relative overflow-hidden bg-white/5 border border-white/10 p-3.5 rounded-xl flex items-center justify-between shadow-inner group transition-colors hover:border-emerald-500/40"
          >
            <motion.div
              className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none"
              animate={{ x: ["-100%", "250%"] }}
              transition={{ duration: 6, repeat: Infinity, repeatDelay: 6, ease: "easeInOut" }}
            />
            <div>
              <div className="text-[11px] font-mono uppercase text-slate-400 font-medium">Emergency Calls</div>
              <div className="text-2xl font-extrabold text-emerald-400 mt-0.5 font-mono">
                <AnimatedNumber value={emergencyCalls} />
              </div>
            </div>
            <div className="p-2.5 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 shadow-[0_0_12px_rgba(34,197,94,0.25)]">
              <PhoneCall className="w-5 h-5 drop-shadow-[0_0_6px_rgba(34,197,94,0.6)]" />
            </div>
          </motion.div>

        </div>

        {/* MIDDLE SECTION: MAIN DISPATCH FEED + RADAR MAP */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          
          {/* CENTER: DISPATCH LOG CONSOLE */}
          <motion.div 
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="lg:col-span-2 bg-slate-950/60 border border-white/10 rounded-xl p-4 flex flex-col justify-between h-[340px] overflow-hidden"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-2.5 mb-2 shrink-0">
              <span className="font-mono text-xs font-bold text-blue-400 uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)] animate-pulse"></span>
                Real-Time Operational Feed
              </span>
              <span className="text-[10px] font-mono text-slate-500">AUTO-SYNC ENABLED</span>
            </div>

            {/* UPWARD AUTOMATIC SCROLLING FEED WITH FADE ANIMATION */}
            <div className="relative flex-1 overflow-hidden space-y-2">
              <AnimatePresence mode="popLayout" initial={false}>
                {events.map((ev) => {
                  const badge = getEventBadge(ev.type);
                  return (
                    <motion.div
                      key={ev.id}
                      layout
                      initial={{ opacity: 0, y: -24, filter: "blur(4px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, scale: 0.96, filter: "blur(2px)" }}
                      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1.0] }}
                      className="flex items-center justify-between gap-2 p-2.5 rounded-lg bg-white/[0.03] border border-white/5 hover:border-blue-500/30 hover:bg-white/[0.06] transition-all text-xs h-[42px]"
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
          </motion.div>

          {/* RIGHT PANEL: US RADAR MAP WIDGET */}
          <motion.div 
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="relative bg-slate-950/60 border border-white/10 rounded-xl p-4 flex flex-col justify-between overflow-hidden h-[340px]"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-2.5 z-10 shrink-0">
              <span className="font-mono text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                National Field Radar
              </span>
              <span className="text-[10px] font-mono text-emerald-400">ACTIVE SWEEP</span>
            </div>

            <div className="relative flex-1 flex items-center justify-center my-2">
              {/* SLOW ROTATING RADAR SWEEP */}
              <motion.div
                className="absolute w-44 h-44 rounded-full border border-blue-500/20"
                style={{
                  background: "conic-gradient(from 0deg, rgba(56,189,248,0.35) 0deg, transparent 60deg, transparent 360deg)",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />

              <div className="absolute w-44 h-44 rounded-full border border-blue-500/20"></div>
              <div className="absolute w-28 h-28 rounded-full border border-blue-500/20"></div>
              <div className="absolute w-12 h-12 rounded-full border border-blue-500/20"></div>

              {/* PULSING RADAR DOTS */}
              <div className="relative w-full h-36 flex items-center justify-center">
                <div className="relative w-48 h-28 opacity-75">
                  <div className="absolute top-12 left-4 group">
                    <span className="absolute -inset-1 rounded-full bg-blue-400/80 animate-ping"></span>
                    <span className="relative block w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_8px_#60a5fa]"></span>
                    <span className="absolute left-3 -top-1 text-[9px] font-mono text-slate-300 opacity-80">LA</span>
                  </div>
                  <div className="absolute top-18 left-20">
                    <span className="absolute -inset-1 rounded-full bg-emerald-400/80 animate-ping"></span>
                    <span className="relative block w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_8px_#34d399]"></span>
                    <span className="absolute left-3 -top-1 text-[9px] font-mono text-slate-300 opacity-80">TX</span>
                  </div>
                  <div className="absolute top-6 left-28">
                    <span className="absolute -inset-1 rounded-full bg-cyan-400/80 animate-ping"></span>
                    <span className="relative block w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_8px_#22d3ee]"></span>
                    <span className="absolute left-3 -top-1 text-[9px] font-mono text-slate-300 opacity-80">CHI</span>
                  </div>
                  <div className="absolute top-8 right-4">
                    <span className="absolute -inset-1 rounded-full bg-blue-400/80 animate-ping"></span>
                    <span className="relative block w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_8px_#60a5fa]"></span>
                    <span className="absolute right-3 -top-1 text-[9px] font-mono text-slate-300 opacity-80">NY</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 border-t border-white/10 pt-2 z-10 shrink-0">
              <span>LAT/LONG: 34.0522° N, 118.2437° W</span>
              <span className="text-blue-400 font-bold">4 ZONES</span>
            </div>
          </motion.div>

        </div>

        {/* BOTTOM ROW: LIVE OFFICER STATUS CARDS (FLOATING + HOVER + GLOWING DOTS) */}
        <div className="border-t border-white/10 pt-4">
          <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center justify-between">
            <span>Active Officer Status Index</span>
            <span className="text-slate-500 font-normal">REAL-TIME ROSTER</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
            
            <motion.div 
              whileHover={{ scale: 1.03, y: -2 }}
              className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-2.5 transition-colors hover:border-emerald-500/40"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse"></span>
              <div>
                <div className="text-[11px] font-bold text-slate-200">On Duty</div>
                <div className="text-[10px] font-mono text-slate-400">114 Officers</div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.03, y: -2 }}
              className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center gap-2.5 transition-colors hover:border-blue-500/40"
            >
              <span className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]"></span>
              <div>
                <div className="text-[11px] font-bold text-slate-200">En Route</div>
                <div className="text-[10px] font-mono text-slate-400">18 Officers</div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.03, y: -2 }}
              className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center gap-2.5 transition-colors hover:border-cyan-500/40"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)] animate-pulse"></span>
              <div>
                <div className="text-[11px] font-bold text-slate-200">Patrol Active</div>
                <div className="text-[10px] font-mono text-slate-400">42 Patrols</div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.03, y: -2 }}
              className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center gap-2.5 transition-colors hover:border-amber-500/40"
            >
              <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]"></span>
              <div>
                <div className="text-[11px] font-bold text-slate-200">Break Status</div>
                <div className="text-[10px] font-mono text-slate-400">16 Officers</div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.03, y: -2 }}
              className="p-2.5 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center gap-2.5 col-span-2 sm:col-span-1 transition-colors hover:border-purple-500/40"
            >
              <span className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(192,132,252,0.8)]"></span>
              <div>
                <div className="text-[11px] font-bold text-slate-200">Emergency Resp.</div>
                <div className="text-[10px] font-mono text-slate-400">0 Active</div>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </div>
  );
}