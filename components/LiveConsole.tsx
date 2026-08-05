"use client";

import { useState, useEffect } from "react";

interface LogEvent {
  tag: "ok" | "info" | "warn";
  label: string;
  msg: string;
  time: string;
}

const initialEvents = [
  { tag: "ok", label: "CONFIRMED", msg: "Shift confirmed — Site 04-B, Officer #217" },
  { tag: "info", label: "SCAN", msg: "Checkpoint scan received — Perimeter Gate 2" },
  { tag: "warn", label: "ALERT", msg: "Missed checkpoint — dispatcher contacting officer" },
  { tag: "ok", label: "RESOLVED", msg: "Officer confirmed on-site — geofence restored" },
  { tag: "info", label: "DAR", msg: "Daily Activity Report submitted for review" },
  { tag: "ok", label: "FILLED", msg: "Open shift filled — standby roster, Site 11-A" },
];

export default function LiveConsole() {
  const [logs, setLogs] = useState<LogEvent[]>([]);
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => setTime(new Date().toLocaleTimeString('en-US', { hour12: false }));
    updateTime();
    const clockInterval = setInterval(updateTime, 1000);

    let index = 0;
    const addLog = () => {
      const now = new Date().toLocaleTimeString('en-US', { hour12: false });
      const ev = initialEvents[index % initialEvents.length];
      index++;
      setLogs((prev) => [{ ...ev, time: now } as LogEvent, ...prev.slice(0, 5)]);
    };

    addLog();
    const logInterval = setInterval(addLog, 2600);

    return () => {
      clearInterval(clockInterval);
      clearInterval(logInterval);
    };
  }, []);

  return (
    <div className="bg-slate-900/90 border border-white/10 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-md">
      <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-white/20"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-white/20"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-white/20"></span>
        </div>
        <div className="mono text-[11.5px] text-slate-400 tracking-wider">DISPATCH_LOG // LIVE FEED</div>
        <div className="mono text-[10.5px] text-rose-400 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping"></span>
          LIVE
        </div>
      </div>

      <div className="p-5 min-h-[280px] space-y-3">
        {logs.map((log, idx) => (
          <div key={idx} className="flex items-center gap-3 mono text-xs border-b border-dashed border-white/10 pb-2.5">
            <span className="text-slate-400 shrink-0 w-[68px]">{log.time}</span>
            <span
              className={`px-2 py-0.5 rounded text-[10px] font-bold shrink-0 w-[82px] text-center uppercase ${
                log.tag === "ok"
                  ? "bg-emerald-500/20 text-emerald-400"
                  : log.tag === "warn"
                  ? "bg-amber-500/20 text-amber-400"
                  : "bg-blue-500/20 text-blue-400"
              }`}
            >
              {log.label}
            </span>
            <span className="text-slate-200 truncate">{log.msg}</span>
          </div>
        ))}
      </div>

      <div className="flex justify-between px-5 py-3 border-t border-white/10 mono text-[11px] text-slate-400">
        <span>NODE: US-COMMAND-01</span>
        <span>{time || "00:00:00"}</span>
      </div>
    </div>
  );
}