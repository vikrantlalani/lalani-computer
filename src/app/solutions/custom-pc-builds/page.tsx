import React from "react";
import { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Typography } from "@/components/ui/Typography";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { FAQAccordion } from "@/components/ui/FAQAccordion";

export const metadata: Metadata = {
  title: "Best PC Builder in Mumbai: Custom Gaming & Office Workstations",
  description: "Looking for the best PC builder in Mumbai? Lalani Computers specializes in building custom high-performance desktops for gaming, editing, and corporate offices.",
  alternates: {
    canonical: "/solutions/custom-pc-builds",
  },
};

export default function CustomPCBuildsPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Custom PC Building",
      "provider": {
        "@type": "Organization",
        "name": "Lalani Computers",
        "logo": "https://www.lalanicomputers.com/icon.png"
      },
      "areaServed": {
        "@type": "City",
        "name": "Mumbai"
      },
      "description": metadata.description,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why buy a custom PC from Lalani Computers instead of standard Lamington Road shops?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "With over 30 years of corporate IT experience, we guarantee 100% genuine components, transparent Bill of Materials (BOM) pricing, and enterprise-grade reliability without the shady practices often found in unorganized markets."
          }
        },
        {
          "@type": "Question",
          "name": "Should my office use pre-built desktops or custom-built PCs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "While branded desktops like Dell OptiPlex are great for standard use, power users (like 3D animators or financial analysts) require custom workstations. We build both high-end rigs and cost-effective bulk custom PCs for BPO/KPO setups."
          }
        },
        {
          "@type": "Question",
          "name": "Do custom assembled PCs come with a warranty?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. Every individual component carries its official OEM warranty. Furthermore, we run a strict 24-hour stress test on every rig before delivery to ensure zero day-one failures."
          }
        }
      ]
    }
  ];

  const faqItems = [
    {
      question: "Why buy a custom PC from Lalani Computers instead of standard Lamington Road shops?",
      answer: "With over 30 years of corporate IT experience, we guarantee 100% genuine components, transparent Bill of Materials (BOM) pricing, and enterprise-grade reliability without the shady practices often found in unorganized markets."
    },
    {
      question: "Should my office use pre-built desktops or custom-built PCs?",
      answer: "While branded desktops like Dell OptiPlex are great for standard use, power users (like 3D animators or financial analysts) require custom workstations. We build both high-end rigs and cost-effective bulk custom PCs for BPO/KPO setups."
    },
    {
      question: "Do custom assembled PCs come with a warranty?",
      answer: "Absolutely. Every individual component carries its official OEM warranty. Furthermore, we run a strict 24-hour stress test on every rig before delivery to ensure zero day-one failures."
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="bg-warm-bg1 border-b border-primary/10">
        <div className="max-w-4xl mx-auto px-4 md:px-6 py-4 flex flex-wrap items-center gap-2 text-sm text-text-dark/60 font-medium">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link href="/solutions" className="hover:text-primary transition-colors">Solutions</Link>
          <span>/</span>
          <span className="text-primary truncate max-w-[200px] md:max-w-none">Custom PC Builds</span>
        </div>
      </div>

      <article className="pb-16 pt-8 md:pt-12">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <FadeIn>
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1.5 rounded-md">
                  IT Services
                </span>
              </div>
              <Typography variant="h1" className="mb-6 leading-tight text-3xl md:text-4xl lg:text-5xl">
                Best PC Builder in Mumbai
              </Typography>
              <Typography variant="lead" className="text-text-dark/80 text-xl">
                Don't settle for pre-built compromises. We design, assemble, and stress-test custom workstations for gamers, 3D animators, and heavy-duty corporate environments.
              </Typography>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.1}>
          <div className="max-w-5xl mx-auto px-4 md:px-6 mb-12">
            <div className="relative w-full aspect-[21/9] md:aspect-[2.5/1] rounded-3xl overflow-hidden shadow-xl border border-primary/10">
              <Image 
                src="https://images.unsplash.com/photo-1587202372634-32705e3bf49c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Custom PC Building in Mumbai"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </FadeIn>

        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <FadeIn delay={0.2}>
            <div className="prose prose-lg prose-headings:text-text-dark prose-headings:font-heading prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-primary prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-text-dark/80 prose-p:leading-relaxed prose-p:mb-6 prose-strong:text-text-dark prose-ul:list-disc prose-ul:pl-6 prose-li:mb-2 prose-li:text-text-dark/80 max-w-none">
              
              <h2>Why Custom Built PCs are Better</h2>
              <p>While branded desktops like Dell OptiPlex and HP ProDesk are great for standardized office environments, power users often need more. Whether you are a hardcore gamer, a 3D animator, or a video editor, a custom-built PC gives you maximum performance for every rupee spent.</p>
              
              <h2>Lalani Computers: Mumbai's Premier PC Builders</h2>
              <p>With over 30 years of experience in the IT hardware industry, we have access to the largest inventory of PC components in Mumbai at wholesale B2B prices. We build:</p>
              
              <ul>
                <li><strong>High-End Gaming Rigs:</strong> Featuring the latest NVIDIA RTX 40-series GPUs, custom liquid cooling loops, and high-refresh-rate monitors.</li>
                <li><strong>Corporate Workstations:</strong> Ultra-reliable, quiet machines with massive ECC RAM for data modeling, financial analysis, and CAD architecture.</li>
                <li><strong>Budget Office Desktops:</strong> Cost-effective, highly reliable bulk builds using standard components for BPO and KPO setups.</li>
              </ul>

              <h2>Our PC Building Process</h2>
              <p><strong>1. Consultation:</strong> Tell us your exact software requirements and budget.</p>
              <p><strong>2. Component Selection:</strong> Our engineers draft a Bill of Materials (BOM) featuring trusted brands like ASUS, Gigabyte, Corsair, and Intel/AMD.</p>
              <p><strong>3. Assembly & Cable Management:</strong> We don't just plug things in; we ensure optimal airflow and stunning cable management so your PC runs cool and looks great.</p>
              <p><strong>4. Stress Testing:</strong> Every custom PC undergoes a 24-hour stress test (CPU, GPU, and RAM) before delivery to ensure zero blue screens on day one.</p>
              
            </div>

            <div className="mt-16 mb-8">
              <div className="text-center mb-8">
                <Typography variant="h2" className="mb-4">Frequently Asked Questions</Typography>
                <Typography variant="body" className="opacity-80">Common questions about custom PC building and components.</Typography>
              </div>
              <FAQAccordion items={faqItems} />
            </div>
            
            <div className="mt-12 p-8 bg-warm-bg1 border border-primary/10 rounded-2xl flex flex-col items-center text-center">
              <Typography variant="h3" className="mb-3">Ready to Build Your Dream PC?</Typography>
              <p className="text-text-dark/80 mb-6 max-w-lg">
                Send us your required specifications or budget, and our engineers will reply with a custom parts list and quote within hours.
              </p>
              <a 
                href={`https://wa.me/919323332850?text=${encodeURIComponent(`Hi, I am looking for a custom PC build. Can you help me draft a parts list and quote?`)}`} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button size="lg" className="flex items-center gap-2 bg-[#25D366] text-white hover:bg-[#20b858] border-none shadow-lg shadow-[#25D366]/20">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                  Get a Custom BOM & Quote
                </Button>
              </a>
            </div>
          </FadeIn>
        </div>
      </article>
    </>
  );
}
