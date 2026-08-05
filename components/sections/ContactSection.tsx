import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Card from "@/components/ui/Card";
import ContactForm from "@/components/forms/ContactForm";

export default function ContactSection() {
  return (
    <Section id="contact" className="bg-slate-900 py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">
              Ready to Upgrade Operations?
            </span>
            <Heading level={2} className="text-white mt-2 text-3xl sm:text-4xl">
              Schedule Your 24/7 Operations Consultation
            </Heading>
            <p className="mt-4 text-slate-300 text-lg leading-relaxed">
              Let us handle your field monitoring, escalation calls, and patrol accountability directly inside your team's existing software.
            </p>

            <div className="mt-8 space-y-4 text-sm text-slate-300">
              <div className="flex items-center gap-3">
                <span className="text-blue-400 font-bold">✓</span>
                <span>Zero software migration required</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-blue-400 font-bold">✓</span>
                <span>Instant integration with your current guard app</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-blue-400 font-bold">✓</span>
                <span>24/7 coverage tailored for security firms</span>
              </div>
            </div>
          </div>

          <Card className="bg-slate-800/60 border-slate-700 p-8 shadow-2xl">
            <ContactForm />
          </Card>
        </div>
      </Container>
    </Section>
  );
}