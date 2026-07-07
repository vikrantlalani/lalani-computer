import React from "react";
import { Metadata } from "next";
import { Typography } from "@/components/ui/Typography";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "How to Build a Reliable Server Room from Scratch: An SME Guide",
  description: "Setting up an on-premise server room? Here is the blueprint for building a secure, enterprise-grade server room for your SME in Mumbai.",
  alternates: {
    canonical: "/solutions/data-center/sme-server-room-guide",
  },
  openGraph: {
    title: "How to Build a Reliable Server Room from Scratch: SME Guide",
    description: "A complete guide to building a secure, scalable, and fully optimized on-premise server room for your growing SME.",
    url: "https://www.lalanicomputers.com/solutions/data-center/sme-server-room-guide",
    siteName: "Lalani Computers",
    images: [{ url: "YOUR_SERVER_ROOM_IMAGE_URL_HERE.jpg", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Build a Reliable Server Room from Scratch: SME Guide",
    description: "A complete guide to building a secure, scalable, and fully optimized on-premise server room for your growing SME.",
    images: ["YOUR_SERVER_ROOM_IMAGE_URL_HERE.jpg"],
  },
};

export default function ServerRoomGuidePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": metadata.title,
    "description": metadata.description,
    "author": {
      "@type": "Organization",
      "name": "Lalani Computers"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Lalani Computers",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.lalanicomputers.com/icon.png"
      }
    }
  };

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
          <Link href="/solutions/data-center" className="hover:text-primary transition-colors">Data Center</Link>
          <span>/</span>
          <span className="text-primary truncate max-w-[200px] md:max-w-none">SME Server Room Guide</span>
        </div>
      </div>

      <article className="pb-16 pt-8 md:pt-12">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <FadeIn>
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1.5 rounded-md">
                  B2B Guide
                </span>
              </div>
              <Typography variant="h1" className="mb-6 leading-tight text-3xl md:text-4xl lg:text-5xl">
                How to Build a Reliable Server Room from Scratch: An SME Guide
              </Typography>
              <Typography variant="lead" className="text-text-dark/80 text-xl">
                Setting up an on-premise server room requires more than just buying a rack. From precision cooling to redundant power, a poorly planned data closet will lead to catastrophic hardware failure.
              </Typography>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.1}>
          <div className="max-w-5xl mx-auto px-4 md:px-6 mb-12">
            <div className="relative w-full aspect-[21/9] md:aspect-[2.5/1] rounded-3xl overflow-hidden shadow-xl border border-primary/10">
              <Image 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Enterprise Server Room Infrastructure"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </FadeIn>

        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <FadeIn delay={0.2}>
            <div className="prose prose-lg prose-headings:text-text-dark prose-headings:font-heading prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-primary prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-text-dark/80 prose-p:leading-relaxed prose-p:mb-6 prose-strong:text-text-dark max-w-none">
              
              <p>Here is the blueprint for building a secure, enterprise-grade server room for your SME.</p>

              <h2>1. Strategic Rack Placement and Cable Management</h2>
              <p>Begin by selecting a windowless, secure room (preferably not adjacent to plumbing or heating lines). Ensure you deploy enterprise-grade <strong>42U Server Racks</strong>. Proper raised flooring and overhead (or under-floor) cable trays are essential to physically separate AC power lines from sensitive data/fiber cables to prevent electromagnetic interference.</p>

              <h2>2. Precision Cooling & Environmental Controls</h2>
              <p>Standard office air conditioners are not enough; they are designed for human comfort, not high-density heat loads. Implement a <strong>"Hot Aisle/Cold Aisle" containment strategy</strong> for your racks. Deploy Precision Air Conditioning (PAC) units that run 24/7/365 without freezing up. Crucially, install environmental sensors to monitor temperature and humidity levels in real-time, ensuring automatic alerts before heat spikes damage your CPUs.</p>

              <h2>3. Power Redundancy (UPS) and Physical Security</h2>
              <p>Your hardware must be shielded from Mumbai's fluctuating power grid.</p>
              <ul>
                <li><strong>N+1 UPS Configuration:</strong> Ensure redundant, heavy-duty UPS systems so your servers never experience an abrupt shutdown during a blackout.</li>
                <li><strong>Fire Suppression:</strong> Install FM-200 or Novec 1230 gas-based fire suppression systems. <em>Never use water sprinklers in a server room!</em></li>
                <li><strong>Biometric Security:</strong> Enforce strict physical security with RFID or biometric access control on the reinforced server room door.</li>
              </ul>
              
            </div>
            
            <div className="mt-12 p-8 bg-warm-bg1 border border-primary/10 rounded-2xl flex flex-col items-center text-center">
              <Typography variant="h3" className="mb-3">Planning a data center refresh?</Typography>
              <p className="text-text-dark/80 mb-6 max-w-lg">
                Don't leave your enterprise data to chance. Lalani Computers provides end-to-end data center deployment from rack installations to structural cooling.
              </p>
              <p className="font-semibold text-text-dark mb-6">
                Speak to our enterprise infrastructure engineers for a free site audit in Mumbai.
              </p>
              <a 
                href="https://wa.me/919323332850?text=Hi,%20I%20am%20looking%20for%20a%20data%20center%20refresh%20or%20server%20room%20setup%20consultation" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button size="lg" className="flex items-center gap-2 bg-[#25D366] text-white hover:bg-[#20b858] border-none shadow-lg shadow-[#25D366]/20">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                  Get a Free Site Audit
                </Button>
              </a>
            </div>
          </FadeIn>
        </div>
      </article>
    </>
  );
}
