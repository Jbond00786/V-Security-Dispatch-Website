import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-12 text-slate-400">
      <Container className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <span className="text-lg font-bold text-white">
            V SECURITY<span className="text-blue-500"> DISPATCH</span>
          </span>
          <p className="text-sm">
            Professional 24/7 remote dispatching & guard monitoring integrated into existing guard management software.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Live Guard Patrols</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Incident Escalation</a></li>
            <li><a href="#" className="hover:text-white transition-colors">GPS Anomaly Tracking</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Integrations</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">TrackTik</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Silvertrac</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Connecteam</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
          </ul>
        </div>
      </Container>
      <Container className="mt-8 pt-8 border-t border-slate-900 text-xs text-slate-500 text-center">
        © {new Date().getFullYear()} V Security Dispatch. All rights reserved.
      </Container>
    </footer>
  );
}