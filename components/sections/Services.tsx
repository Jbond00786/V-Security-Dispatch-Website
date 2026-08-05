import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Card from "@/components/ui/Card";

const services = [
  {
    title: "Live Guard & Patrol Monitoring",
    description: "Real-time verification of guard check-ins, checkpoint scanning, and live location tracking via your guard management app.",
  },
  {
    title: "Incident & Escalation Dispatch",
    description: "Immediate triage of incoming field alerts, emergency escalation to local authorities, and real-time report logging.",
  },
  {
    title: "GPS Anomaly & Missed Checkpoint Alerts",
    description: "Automated alert resolution when field personnel miss scheduled check-ins, ensuring guard safety and strict client SLA compliance.",
  },
  {
    title: "Client Communications & After-Hours Desk",
    description: "Professional phone and digital dispatch coverage taking calls from your property clients and tenants 24/7.",
  },
];

export default function Services() {
  return (
    <Section id="services" className="bg-slate-900 border-b border-slate-800">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Heading level={2} className="text-white">
            Operational Excellence for Security Guard Companies
          </Heading>
          <p className="mt-4 text-slate-400 text-lg">
            Our experienced dispatch team acts as a seamless extension of your company—ensuring full field accountability without adding internal overhead.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-slate-800/40 border-slate-700/80 p-8 hover:border-blue-500/50 transition-all">
              <Heading level={3} className="text-white text-xl mb-3">
                {service.title}
              </Heading>
              <p className="text-slate-300 leading-relaxed text-sm">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}