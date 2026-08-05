import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Card from "@/components/ui/Card";

const platforms = [
  "TrackTik",
  "Silvertrac",
  "Connecteam",
  "Quo",
  "Your Custom System",
];

export default function Integrations() {
  return (
    <Section id="integrations" className="bg-slate-950 border-b border-slate-800">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Heading level={2} className="text-white">
            We Operate Directly Within Your Software
          </Heading>
          <p className="mt-4 text-slate-400 text-lg">
            No expensive software migrations or retraining required. We plug directly into the guard management systems you already use.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {platforms.map((platform, index) => (
            <Card key={index} className="bg-slate-900 border-slate-800 p-6 text-center flex items-center justify-center">
              <span className="font-semibold text-slate-200 text-base">{platform}</span>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}