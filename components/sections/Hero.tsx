import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Heading from "@/components/ui/Heading";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 bg-slate-900 border-b border-slate-800">
      <Container className="relative z-10 flex flex-col items-center text-center">
        <div className="flex items-center gap-2 mb-6">
          <Badge variant="live">● 24/7 LIVE DISPATCH OPERATIONS</Badge>
          <Badge variant="primary">CALIFORNIA & NATIONWIDE</Badge>
        </div>

        <Heading level={1} className="max-w-4xl text-white text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
          24/7 Remote Dispatching Built for Modern Security Guard Firms
        </Heading>

        <p className="mt-6 max-w-2xl text-lg sm:text-xl text-slate-300 font-normal leading-relaxed">
          We integrate directly into your existing software to monitor guard patrols, respond to incidents instantly, and keep your client accounts secure around the clock.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
          <Button variant="secondary" className="text-base py-3.5 px-8 shadow-blue-500/20">
            Schedule Operations Consultation
          </Button>
          <Button variant="outline" className="border-slate-700 text-white hover:bg-slate-800 hover:text-white text-base py-3.5 px-8">
            Explore System Compatibility
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-slate-800/80 w-full max-w-4xl text-left">
          <div>
            <div className="text-2xl md:text-3xl font-bold text-white">24/7/365</div>
            <div className="text-xs text-slate-400 mt-1">Continuous Monitoring</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-white">&lt; 60s</div>
            <div className="text-xs text-slate-400 mt-1">Incident Response Time</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-white">100%</div>
            <div className="text-xs text-slate-400 mt-1">Client System Native</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-white">Zero</div>
            <div className="text-xs text-slate-400 mt-1">Software Setup Cost</div>
          </div>
        </div>
      </Container>
    </section>
  );
}