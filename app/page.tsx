import HeroBackground from "@/components/HeroBackground";
import LiveConsole from "@/components/LiveConsole";
import FaqAccordion from "@/components/FaqAccordion";
import CyberBackground from "@/components/CyberBackground";

export default function Home() {
  return (
    <div className="bg-[#08111F] min-h-screen text-[#F8FAFC]">
      {/* NAVIGATION BAR */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-[#0A1224]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          
          {/* LOGO & BRANDING */}
          <a href="#top" className="flex items-center gap-3.5 group cursor-pointer">
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-slate-900 p-[1px] shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300">
              <div className="w-full h-full bg-[#0A1224] rounded-[11px] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-500/10 rounded-full animate-pulse"></div>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300 z-10"
                >
                  <path
                    d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="12" cy="11" r="3" stroke="#60A5FA" strokeWidth="1.5" />
                  <path d="M12 6V8" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M12 14V16" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M7 11H9" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M15 11H17" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-extrabold tracking-tight text-white font-[#Space_Grotesk]">
                  V<span className="text-blue-500 font-black">.</span>SECURITY
                </span>
                <span className="text-xs font-semibold tracking-widest text-blue-400/90 uppercase border border-blue-500/30 bg-blue-500/10 px-1.5 py-0.5 rounded ml-1">
                  DISPATCH
                </span>
              </div>
              <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase">
                Command & Control Services
              </span>
            </div>
          </a>

          {/* NAVIGATION LINKS */}
          <div className="hidden md:flex items-center gap-8 text-slate-300 text-sm font-medium font-mono">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#roi" className="hover:text-white transition-colors">Why Us</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </div>

          {/* CALL TO ACTION BUTTON */}
          <a
            href="#contact"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-xs px-5 py-2.5 rounded-xl shadow-lg shadow-blue-600/25 transition-all duration-300 border border-blue-400/30 hover:scale-[1.02]"
          >
            Request Proposal
          </a>
        </div>
      </nav>

      {/* HERO SECTION WITH INTEGRATED HERO BACKGROUND */}
      <header className="bg-[#08111F] text-white pt-36 pb-24 relative overflow-hidden" id="top">
        {/* Integrated Command Center Ambient Background */}
        <HeroBackground />
        <CyberBackground />

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <span className="font-mono text-xs text-blue-400 bg-blue-500/10 border border-blue-400/30 px-3 py-1 rounded-full uppercase tracking-widest inline-block mb-6">
              ● 24/7/365 Remote Dispatch & Operations
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
              Your guards are in the field.<br />
              <span className="text-blue-400">Your dispatch is always awake.</span>
            </h1>
            <p className="mt-6 text-slate-300 text-base sm:text-lg leading-relaxed">
              V Security Dispatch provides a fully remote, end-to-end command center built specifically for U.S. security guard providers. We manage shift confirmations, live GPS tracking, call-offs, and escalation protocols seamlessly inside your existing software ecosystem.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 mb-10">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 text-center hover:border-blue-500 transition-all duration-300">
                <h3 className="text-3xl font-bold text-blue-400 font-mono">24/7</h3>
                <p className="text-xs text-slate-400 uppercase mt-1 font-mono">Operations</p>
              </div>

              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 text-center hover:border-blue-500 transition-all duration-300">
                <h3 className="text-3xl font-bold text-blue-400 font-mono">99.4%</h3>
                <p className="text-xs text-slate-400 uppercase mt-1 font-mono">Shift Verification</p>
              </div>

              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 text-center hover:border-blue-500 transition-all duration-300">
                <h3 className="text-3xl font-bold text-blue-400 font-mono">365</h3>
                <p className="text-xs text-slate-400 uppercase mt-1 font-mono">Days Monitoring</p>
              </div>

              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 text-center hover:border-blue-500 transition-all duration-300">
                <h3 className="text-3xl font-bold text-blue-400 font-mono">&lt;15m</h3>
                <p className="text-xs text-slate-400 uppercase mt-1 font-mono">Average Response</p>
              </div>
            </div>

            <div className="mt-8 flex gap-4 flex-wrap">
              <a href="#contact" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg transition shadow-blue-600/30">
                Get Commercial Proposal
              </a>
              <a href="#services" className="bg-white/5 border border-white/20 hover:bg-white/10 text-white font-semibold px-6 py-3.5 rounded-xl transition">
                Explore Services
              </a>
            </div>
          </div>

          <LiveConsole />
        </div>
      </header>

      {/* PLATFORM COMPATIBILITY STRIP */}
      <div className="bg-[#0B162B] border-y border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-mono text-xs uppercase font-semibold text-slate-400 tracking-wider">
            OPERATING DIRECTLY WITHIN YOUR EXISTING PLATFORMS
          </span>
          <div className="flex flex-wrap justify-center gap-8 font-bold text-slate-300 text-sm font-mono">
            <span>TrackTik</span>
            <span>Silvertrac</span>
            <span>Connecteam</span>
            <span>Quo</span>
          </div>
        </div>
      </div>

      {/* DETAILED SERVICES */}
      <section id="services" className="py-24 max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <span className="font-mono text-xs text-blue-400 uppercase tracking-wider font-bold">Comprehensive Operations</span>
          <h2 className="text-3xl font-bold mt-2 text-white">End-to-End Field Operations & Support</h2>
          <p className="text-slate-400 mt-4">
            We operate directly as an extension of your internal management team, eliminating late-night calls and unmonitored shifts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#111C31] border border-white/10 p-8 rounded-2xl shadow-sm hover:border-blue-500/50 transition">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center justify-center font-bold font-mono mb-5">01</div>
            <h3 className="font-bold text-xl mb-3 text-white">Workforce & Schedule Management</h3>
            <ul className="text-slate-400 text-sm leading-relaxed space-y-2">
              <li>• Pre-shift check-in calls (2–4 hours prior)</li>
              <li>• Immediate call-off handling & standby dispatch</li>
              <li>• Open-shift coverage & officer re-routing</li>
              <li>• Live phone dispatch hotline support</li>
            </ul>
          </div>

          <div className="bg-[#111C31] border border-white/10 p-8 rounded-2xl shadow-sm hover:border-blue-500/50 transition">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center justify-center font-bold font-mono mb-5">02</div>
            <h3 className="font-bold text-xl mb-3 text-white">Patrol & Accountability Monitoring</h3>
            <ul className="text-slate-400 text-sm leading-relaxed space-y-2">
              <li>• Real-time guard tour & checkpoint tracking</li>
              <li>• 15-minute missed-checkpoint escalation</li>
              <li>• GPS geofence & live location verification</li>
              <li>• Daily Activity Report (DAR) auditing</li>
            </ul>
          </div>

          <div className="bg-[#111C31] border border-white/10 p-8 rounded-2xl shadow-sm hover:border-blue-500/50 transition">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center justify-center font-bold font-mono mb-5">03</div>
            <h3 className="font-bold text-xl mb-3 text-white">Incident Escalation & Support</h3>
            <ul className="text-slate-400 text-sm leading-relaxed space-y-2">
              <li>• Priority incident report generation (&lt;60 mins)</li>
              <li>• Client & management instant notifications</li>
              <li>• Field supervisor dispatch coordination</li>
              <li>• Emergency service coordination (911/First Responders)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* OPERATIONAL IMPACT */}
      <section id="roi" className="py-20 bg-[#0B162B] text-white border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono text-xs text-blue-400 uppercase tracking-wider font-bold">Operational Impact</span>
            <h2 className="text-3xl font-bold mt-2">Why Outsource Your Dispatch?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
              <div className="text-4xl font-extrabold text-blue-400 mb-2 font-mono">60%</div>
              <div className="text-sm font-semibold mb-1">Cost Reduction</div>
              <p className="text-xs text-slate-400">Lower overhead compared to internal 24/7 staffing.</p>
            </div>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
              <div className="text-4xl font-extrabold text-blue-400 mb-2 font-mono">99.4%</div>
              <div className="text-sm font-semibold mb-1">Shift Verification</div>
              <p className="text-xs text-slate-400">Guaranteed active guard presence on all assigned sites.</p>
            </div>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
              <div className="text-4xl font-extrabold text-blue-400 mb-2 font-mono">&lt; 15m</div>
              <div className="text-sm font-semibold mb-1">Alert Resolution</div>
              <p className="text-xs text-slate-400">Rapid response to missed checkpoints and unverified guards.</p>
            </div>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
              <div className="text-4xl font-extrabold text-blue-400 mb-2 font-mono">Zero</div>
              <div className="text-sm font-semibold mb-1">Platform Migration</div>
              <p className="text-xs text-slate-400">We work directly inside your existing software stack.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING PLANS */}
      <section id="pricing" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="font-mono text-xs text-blue-400 uppercase tracking-wider font-bold">Predictable Investment</span>
          <h2 className="text-3xl font-bold mt-2 text-white">Monthly Operational Tiers</h2>
          <p className="text-slate-400 text-sm mt-2">Flat-rate monthly pricing based on your active guard count.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-[#111C31] border border-white/10 p-6 rounded-2xl">
            <span className="font-mono text-xs font-bold text-blue-400 uppercase">Starter</span>
            <h3 className="text-lg font-bold mt-1 text-white">Up to 25 Guards</h3>
            <div className="text-2xl font-bold my-4 font-mono text-white">$1,500 - $2,000 <span className="text-xs font-normal text-slate-400">/mo</span></div>
            <p className="text-xs text-slate-400">Essential 24/7 dispatch coverage for growing guard agencies.</p>
          </div>

          <div className="bg-[#0B162B] text-white border-2 border-blue-500 p-6 rounded-2xl relative shadow-xl shadow-blue-500/10">
            <span className="bg-blue-600 text-[10px] font-bold uppercase px-3 py-1 rounded-full absolute -top-3 left-6">Most Popular</span>
            <span className="font-mono text-xs font-bold text-blue-400 uppercase">Professional</span>
            <h3 className="text-lg font-bold mt-1">26–75 Guards</h3>
            <div className="text-2xl font-bold my-4 font-mono">$2,500 - $4,000 <span className="text-xs font-normal text-slate-400">/mo</span></div>
            <p className="text-xs text-slate-300">Complete monitoring, call-off handling, and DAR auditing.</p>
          </div>

          <div className="bg-[#111C31] border border-white/10 p-6 rounded-2xl">
            <span className="font-mono text-xs font-bold text-blue-400 uppercase">Business</span>
            <h3 className="text-lg font-bold mt-1 text-white">76–150 Guards</h3>
            <div className="text-2xl font-bold my-4 font-mono text-white">$4,500 - $6,500 <span className="text-xs font-normal text-slate-400">/mo</span></div>
            <p className="text-xs text-slate-400">Comprehensive multi-site command center management.</p>
          </div>

          <div className="bg-[#111C31] border border-white/10 p-6 rounded-2xl">
            <span className="font-mono text-xs font-bold text-blue-400 uppercase">Enterprise</span>
            <h3 className="text-lg font-bold mt-1 text-white">151+ Guards</h3>
            <div className="text-2xl font-bold my-4 font-mono text-white">Custom Quote</div>
            <p className="text-xs text-slate-400">Dedicated dispatch channels and custom escalation flows.</p>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-24 max-w-7xl mx-auto px-6 border-t border-white/10">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Frequently Asked Questions</h2>
        <FaqAccordion />
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0A1224] text-slate-400 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3 font-bold text-white tracking-wider font-mono">
            <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-white">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            V SECURITY DISPATCH
          </div>
          <div className="text-xs font-mono">© 2026 V Security Dispatch Solutions LLC. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}