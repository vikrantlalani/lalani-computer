import React from "react";
import { Metadata } from "next";
import { Typography } from "@/components/ui/Typography";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "The Ultimate 2026 Office IT Setup Checklist for Mumbai Startups",
  description: "Moving into a new commercial space in Mumbai? Here is your definitive IT procurement checklist to ensure your new office runs flawlessly from Day 1.",
  alternates: {
    canonical: "/solutions/office-setup/startup-checklist-2026",
  },
};

export default function StartupChecklistPage() {
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
          <Link href="/solutions/office-setup" className="hover:text-primary transition-colors">Office Setup</Link>
          <span>/</span>
          <span className="text-primary truncate max-w-[200px] md:max-w-none">Startup Checklist 2026</span>
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
                The Ultimate 2026 Office IT Setup Checklist for Mumbai Startups
              </Typography>
              <Typography variant="lead" className="text-text-dark/80 text-xl">
                Moving into a new commercial space in Mumbai? From networking infrastructure to employee workstations, missing a single critical component can delay your launch and cripple your team's productivity.
              </Typography>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.1}>
          <div className="max-w-5xl mx-auto px-4 md:px-6 mb-12">
            <div className="relative w-full aspect-[21/9] md:aspect-[2.5/1] rounded-3xl overflow-hidden shadow-xl border border-primary/10">
              <Image 
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Modern Office IT Setup"
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
              
              <p>For growing startups and SMEs, standard consumer electronics simply won’t cut it. You need enterprise-grade reliability. Here is your definitive IT procurement checklist to ensure your new office runs flawlessly from Day 1.</p>

              <h2>1. Core Networking & Connectivity Infrastructure</h2>
              <p>The backbone of your modern office is your network. A single consumer-grade router from your ISP will crash the moment 20 employees jump on a video call. You need structured, high-density networking to prevent dead zones and downtime.</p>
              
              <p><strong>The Networking Checklist:</strong></p>
              <ul>
                <li><strong>Managed Gigabit Switches:</strong> Essential for routing traffic securely across different departments. (Recommended: <em>Cisco Catalyst or Aruba Instant On</em>).</li>
                <li><strong>High-Density Wi-Fi Access Points (APs):</strong> Install ceiling-mounted APs for seamless roaming across the office floor without dropping connection.</li>
                <li><strong>Structured Cat6/Cat6A Cabling:</strong> Ensure all cabling is neatly routed through server racks and under-floor trays to prevent data interference and workplace hazards.</li>
                <li><strong>Enterprise Hardware Firewall:</strong> Protect your internal network from external threats and manage bandwidth usage. (Recommended: <em>Fortinet FortiGate or Sophos</em>).</li>
              </ul>

              <h2>2. End-User Hardware: Workstations & Peripherals</h2>
              <p>Your employees need the right tools tailored to their specific workflows. Buying the same laptop for every department is a costly mistake.</p>
              
              <p><strong>The Workstation Checklist:</strong></p>
              <ul>
                <li><strong>For Sales & Executives (Mobility):</strong> Lightweight business ultrabooks with 12+ hour battery life and robust security chips. (Recommended: <em>Lenovo ThinkPad series, HP EliteBook</em>).</li>
                <li><strong>For Design, Engineering & IT (Power):</strong> High-performance tower workstations or creator laptops featuring dedicated NVIDIA RTX GPUs and minimum 32GB RAM. (Recommended: <em>Dell Precision, HP Z-Series</em>).</li>
                <li><strong>For BPO & Admin Staff (Cost-Efficiency):</strong> Space-saving All-In-One (AIO) desktops or micro form-factor PCs. (Recommended: <em>Dell OptiPlex, Lenovo ThinkCentre</em>).</li>
                <li><strong>Ergonomic Peripherals:</strong> Dual monitor setups for maximum productivity, wireless mechanical keyboards, and docking stations to eliminate cable clutter on desks.</li>
              </ul>

              <h2>3. Security, Power Backup & Surveillance</h2>
              <p>Mumbai's power grid and commercial safety regulations require strict compliance. You must protect your hardware from power surges and secure your physical premises.</p>

              <p><strong>The Security & Power Checklist:</strong></p>
              <ul>
                <li><strong>Centralized Power Backup (UPS):</strong> A heavy-duty 10KVA to 20KVA Online UPS system to ensure servers and desktop networks never suffer an abrupt shutdown during power fluctuations.</li>
                <li><strong>Biometric Access Control:</strong> Restrict access to sensitive areas (like server rooms and HR departments) using fingerprint or RFID card systems. (Recommended: <em>Matrix or eSSL</em>).</li>
                <li><strong>IP CCTV Surveillance:</strong> High-definition network video recorders (NVR) with dome cameras covering all entry points, server rooms, and main work floors.</li>
                <li><strong>Secure Server Racks:</strong> Lockable 42U or 24U racks with built-in precision cooling and cable management trays.</li>
              </ul>
              
            </div>
            
            <div className="mt-12 p-8 bg-warm-bg1 border border-primary/10 rounded-2xl flex flex-col items-center text-center">
              <Typography variant="h3" className="mb-3">Ready to build your office infrastructure?</Typography>
              <p className="text-text-dark/80 mb-6 max-w-lg">
                Skip the hassle of dealing with multiple e-commerce sellers and incompatible hardware. Lalani Computers is Mumbai’s premier turnkey IT partner with over 30 years of enterprise deployment experience.
              </p>
              <p className="font-semibold text-text-dark mb-6">
                Need a turnkey office setup? Send us your floor plan and requirements, and our engineers will draft a custom IT hardware BOM (Bill of Materials) within 24 hours.
              </p>
              <a 
                href="https://wa.me/919323332850?text=Hi,%20I%20am%20looking%20for%20a%20new%20office%20IT%20setup%20quote" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button size="lg" className="flex items-center gap-2 bg-[#25D366] text-white hover:bg-[#20b858] border-none shadow-lg shadow-[#25D366]/20">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                  Chat with us on WhatsApp
                </Button>
              </a>
            </div>
          </FadeIn>
        </div>
      </article>
    </>
  );
}
