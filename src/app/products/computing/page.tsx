import React from "react";
import { Section } from "@/components/ui/Section";
import { Typography } from "@/components/ui/Typography";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Laptop, Monitor, Cpu, Briefcase } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: '/products/computing' },
  title: "Corporate Laptops & Desktops | IT Hardware Supplier Mumbai",
  description: "Bulk procurement of corporate laptops, business desktops, and heavy-duty workstations from HP, Dell, Lenovo, and Apple in Mumbai.",
};

const computingTypes = [
  {
    name: "Corporate Laptops",
    icon: <Laptop className="w-6 h-6" />,
    features: ["Business-grade durability and battery life", "Enterprise security (TPM, vPro)", "Lightweight ultrabooks for executives", "Bulk fleet deployments"],
    brands: "Lenovo ThinkPad, HP EliteBook, Dell Latitude, Apple MacBook",
  },
  {
    name: "Business Desktops",
    icon: <Monitor className="w-6 h-6" />,
    features: ["Cost-effective computing for BPO/KPO", "Space-saving Micro/SFF form factors", "Easy maintenance and upgrades", "Pre-installed genuine Windows Pro"],
    brands: "Dell OptiPlex, HP ProDesk, Lenovo ThinkCentre",
  },
  {
    name: "High-Performance Workstations",
    icon: <Cpu className="w-6 h-6" />,
    features: ["Dedicated ISV-certified GPUs (NVIDIA RTX)", "Xeon processors for CAD/CAM and rendering", "Massive ECC RAM capacity", "Advanced thermal cooling"],
    brands: "HP Z-Series, Dell Precision, Lenovo ThinkStation",
  },
  {
    name: "Thin Clients",
    icon: <Briefcase className="w-6 h-6" />,
    features: ["Zero-client computing for secure environments", "Centralized VDI management", "Extremely low power consumption", "No local data storage (high security)"],
    brands: "HP t-series, Dell Wyse",
  },
];

const advantages = [
  "Massive local Mumbai inventory for same-day dispatch",
  "Flexible corporate credit lines available",
  "Seamless warranty coordination directly with OEMs",
  "Custom imaging and OS deployment before delivery",
  "Asset tagging and inventory management support",
  "Buyback and eco-friendly e-waste disposal of old fleet",
];

export default function ComputingPage() {
  return (
    <>
      <div className="bg-warm-bg1 border-b border-primary/10">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex items-center gap-2 text-sm text-text-dark/60 font-medium">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
          <span>/</span>
          <span className="text-primary">Computing</span>
        </div>
      </div>

      <Section variant="light" className="pt-16 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <Typography variant="eyebrow">Endpoints & Devices</Typography>
            <Typography variant="h1" className="mb-6">Corporate Computing Solutions</Typography>
            <Typography variant="lead">
              Empower your workforce with reliable, business-grade computing. From massive BPO desktop rollouts to executive ultrabooks and rendering workstations, we are Mumbai's premier procurement partner.
            </Typography>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact"><Button size="lg">Request Bulk Pricing</Button></Link>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section variant="white" className="border-t border-primary/10">
        <FadeIn>
          <Typography variant="h2" className="text-center mb-4">Our Computing Portfolio</Typography>
          <Typography variant="lead" className="text-center mb-12 max-w-2xl mx-auto">
            We partner with the world's leading OEMs to provide hardware tailored to every role in your organization.
          </Typography>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {computingTypes.map((type, i) => (
            <FadeIn key={i} delay={i * 0.1} direction="up">
              <div className="bg-warm-bg1 rounded-2xl p-8 border border-primary/10 h-full flex flex-col hover:shadow-lg transition-shadow duration-300 group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-transform">
                    {type.icon}
                  </div>
                  <Typography variant="h3">{type.name}</Typography>
                </div>
                <div className="bg-white rounded-xl p-5 border border-primary/5 mb-5 flex-grow">
                  <ul className="space-y-2">
                    {type.features.map((feature, j) => (
                      <li key={j} className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-success mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-sm font-medium text-primary">Top Brands: <span className="text-text-dark/80 font-normal">{type.brands}</span></p>
                <div className="mt-4 pt-4 border-t border-primary/10">
                  <a 
                    href={`https://wa.me/919323332850?text=${encodeURIComponent(`hey i was looking for ${type.name.toLowerCase()}`)}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button variant="secondary" size="sm" className="w-full flex items-center justify-center gap-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                      Enquire Now
                    </Button>
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section variant="dark">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <Typography variant="h2" className="text-white text-center mb-8">Why Buy IT Hardware from Lalani?</Typography>
            <Typography variant="lead" className="text-center text-beige/70 mb-12">
              E-commerce platforms cannot match our B2B focus, corporate billing, and rapid local fulfillment.
            </Typography>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {advantages.map((point, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors h-full">
                  <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <Typography variant="body" className="text-beige/90">{point}</Typography>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      <Section variant="light" className="border-t border-primary/10">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <Typography variant="h2" className="text-center mb-4">Latest Buying Guides</Typography>
            <Typography variant="lead" className="text-center mb-12 max-w-2xl mx-auto">
              Not sure which machines fit your budget? Check out our latest expert recommendations for 2026.
            </Typography>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: "Best Laptops Under ₹50,000", url: "/products/computing/best-laptops-under-50000" },
              { title: "Best Laptops Under ₹60,000", url: "/products/computing/best-laptops-under-60000" },
              { title: "Best Laptops Under ₹75,000", url: "/products/computing/best-laptops-under-75000" },
              { title: "Top 10 Laptop Buying Guide", url: "/products/computing/laptop-buying-guide" },
              { title: "Leasing vs. Buying Laptops in India", url: "/products/computing/leasing-vs-buying-corporate-laptops" },
            ].map((guide, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <Link href={guide.url} className="block group bg-white rounded-xl p-6 border border-primary/10 hover:shadow-md hover:border-primary/30 transition-all">
                  <div className="flex items-center justify-between">
                    <Typography variant="h3" className="text-lg group-hover:text-primary transition-colors">{guide.title}</Typography>
                    <svg className="w-5 h-5 text-primary/50 group-hover:text-primary transform group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      <Section variant="white" className="border-t border-primary/10">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <Typography variant="h2" className="mb-4">Need to Outfit an Entire Floor?</Typography>
            <Typography variant="lead" className="mb-8">
              We specialize in bulk deployments. Get dedicated account management and aggressive corporate pricing.
            </Typography>
            <Link href="/contact"><Button size="lg">Contact Sales</Button></Link>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
