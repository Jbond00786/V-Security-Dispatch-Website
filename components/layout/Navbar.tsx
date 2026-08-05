import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-900/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <span className="text-xl font-bold tracking-tight text-white">
            V SECURITY<span className="text-blue-500"> DISPATCH</span>
          </span>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-300">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#integrations" className="hover:text-white transition-colors">Integrations</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="secondary" className="text-sm px-4 py-2">
            Schedule Consultation
          </Button>
        </div>
      </Container>
    </header>
  );
}