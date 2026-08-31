# LALANI COMPUTERS — CHANGES LOG
# Unpushed changes as of Aug 31, 2026 (NOT yet live on lalanicomputers.com)

================================================================================
SESSION 1 — AUG 25, 2026
================================================================================

CHANGE 1: /solutions/repairs/page.tsx — REBUILT
----------------------------------------------
What changed: Full page rebuild to Split-View architecture.
Left side (checklist):
  1. Chip-Level Repair (Motherboards & Internal Components)
  2. Screen, Keyboard & Battery Replacement
  3. Body Fabrication (Laptops broken due to fall)
  4. Liquid Damage Restoration (Broken due to spillage)
  5. Speed & Storage Upgrades (SSD/RAM)
  6. Server & Network Troubleshooting
  7. Secure Data Recovery Services

Right side (5 trust boxes):
  - For Individuals: Fast, affordable, chip-level repairs for personal & gaming laptops.
  - For Corporate: Fleet refurbishments, secure data wiping, and SLA-driven maintenance.
  - Enterprise Security: Strict data privacy protocols during all upgrades.
  - Genuine Parts: 100% authentic OEM replacements.
  - Certified Engineers: Deep component-level diagnostic expertise.

Related Guide linked: "IT Hardware: Repair vs Replace Guide 2026"
URL: /solutions/repairs/repair-vs-replace-guide

CONTENT REVIEW NOTE:
[OK]  Dual-intent trust boxes work well. Both audiences clearly addressed.
[OK]  Capabilities list now includes physical damage (fall, spillage, battery).
[WATCH] Only 1 CTA button: "Book a Diagnostic Check" (goes to /contact).
        No explicit "Request Fleet Quote" path for corporate buyers.
        Recommendation: Add a second B2B CTA or WhatsApp button.

---

CHANGE 2: /solutions/repairs/repair-vs-replace-guide/page.tsx — NEW FILE
-------------------------------------------------------------------------
Guide title: "IT Hardware: Repair vs. Replace Guide 2026"
Sections:
  1. The 5-Year Rule for IT Hardware
  2. Cost vs. Value Analysis (CapEx vs OpEx)
  3. Common Hardware Failures (Motherboard, Battery, Liquid Spills)
  4. The Security Factor (Data wiping, TPM 2.0, Windows 11)

Conclusion: "Final Verdict"
CTA: "Book a Diagnostic Check" (WhatsApp)

CONTENT REVIEW NOTE:
[OK]  Content is accurate and dual-intent throughout.
[OK]  Conclusion is honest — mentions ?3,000 SSD upgrade vs buying new. Builds trust.
[OK]  Liquid spillage and physical damage are mentioned in Section 3.
[WATCH] Guide does not link back to the main repairs page from within the body text.
        Recommendation: Add an internal link inside Section 3 pointing back to /solutions/repairs.

---

CHANGE 3: /products/accessories/page.tsx — UPGRADED
----------------------------------------------------
What changed: "Why Buy From Lalani" section upgraded from plain text to 4-card grid.
Cards:
  - User icon: Individual Power-Users
  - Building icon: Corporate & Bulk Deployments
  - Package icon: Same-Day Mumbai Dispatch
  - ShieldCheck icon: 100% Genuine Guarantee

Related Guide linked: "The Complete Corporate Workstation & Accessories Guide 2026"
URL: /products/accessories/workstation-buying-guide

CONTENT REVIEW NOTE:
[OK]  4-card grid clearly shows both B2C and B2B audiences.
[OK]  Guide link title on page MATCHES actual guide title exactly.
[OK]  Dual-intent signaling is clear with explicit User and Building icons.

---

CHANGE 4: /products/accessories/workstation-buying-guide/page.tsx — NEW FILE
-----------------------------------------------------------------------------
Guide title: "The Complete Corporate Workstation & Accessories Guide 2026"
Sections:
  1. OEM Docking Stations (Dell WD19, Lenovo Smart Docks, Targus DisplayLink)
  2. Dual Monitors vs. Ultrawides (24-inch 1080p vs 34-inch ultrawide)
  3. Ergonomics & Input Devices (Logitech MX Master 3S, MX Keys)
  4. Audio & Communication — BPO Standard (Jabra Evolve2, Poly Blackwire)

Conclusion: "Bulk Procurement vs. Single Buys"
CTA: "Whether you need a single monitor for your home office or a BOM for 200 workstations..."

CONTENT REVIEW NOTE:
[OK]  Highly specific brand names and model numbers — excellent for SEO.
[OK]  CTA is perfectly dual-intent.
[WATCH] "Corporate" in the guide title may deter individual buyers on the homepage section.
        Recommendation: Monitor CTR. Consider renaming to "Ultimate Workstation Setup Guide"
        if individual traffic underperforms after going live.

================================================================================
SESSION 2 — AUG 31, 2026
================================================================================

CHANGE 5: src/components/sections/home/HeroSection.tsx — UPDATED
-----------------------------------------------------------------
Element         | Before                                    | After
----------------|-------------------------------------------|----------------------------------
Eyebrow         | "Enterprise IT Partner"                   | "Mumbai's Premier IT Hardware Supplier"
Subheadline     | Generic B2B-only delivery copy            | Dual-intent: home offices + data centers
SEO Links Row 1 | Office Network, Enterprise Servers, Colocation | SAME — preserved exactly
SEO Links Row 2 | DID NOT EXIST                             | Laptops & Desktops, Custom PC Builds, Hardware Repairs
CTA Buttons     | NONE                                      | NONE — text links only (no buttons)

CONTENT REVIEW NOTE:
[OK]  Eyebrow is now inclusive — does not scare individual buyers.
[OK]  Subheadline is dual-intent.
[OK]  Row 1 enterprise links preserved — no B2B regression.
[OK]  Row 2 individual links added — repairs, laptops, custom PCs discoverable from hero.
[WATCH] "faster than e-commerce" claim in subheadline is bold. Must ensure delivery SLA
        consistently meets this expectation or soften the wording.

---

CHANGE 6: src/components/sections/home/GuidesOverviewSection.tsx — NEW FILE
----------------------------------------------------------------------------
New section placed between ClientsStrip and Testimonials in homepage.
Section eyebrow: "Expert IT Guides & Resources"
Section title: "Read Before You Buy"

4 guide cards:
  Card 1: Tag="Repairs, Individual & Corporate"
          Title="IT Hardware: Repair vs. Replace Guide 2026"
          URL=/solutions/repairs/repair-vs-replace-guide
  Card 2: Tag="Accessories, Individual & Corporate"
          Title="The Complete Corporate Workstation & Accessories Guide 2026"
          URL=/products/accessories/workstation-buying-guide
  Card 3: Tag="Servers, Corporate"
          Title="Enterprise Server Buying Guide 2026"
          URL=/solutions/enterprise-servers-mumbai/server-buying-guide
  Card 4: Tag="Custom PCs, Individual & Corporate"
          Title="2026 IT Hardware Buying Guide"
          URL=/solutions/custom-pc-builds/hardware-buying-guide

CONTENT REVIEW NOTE:
[OK]  3 out of 4 cards tagged "Individual & Corporate" — dual-intent respected.
[OK]  1 card (Servers) tagged "Corporate" only — honest, does not mislead individuals.
[OK]  Card descriptions are benefit-driven, not keyword-stuffed.
[OK]  Follows same Section + FadeIn + Link pattern as all other homepage sections.
[WATCH] Section placement (after ClientsStrip, before Testimonials) may be too deep in page.
        Recommendation: Leave as-is initially; review scroll depth analytics after going live.
[WATCH] "Corporate Workstation" guide card title may not appeal to individual homepage visitors.
        Same issue as CHANGE 4 above. Watch and adjust if needed.

================================================================================
PENDING — PHASE 3 (NOT YET DONE)
================================================================================

PENDING: /products/computing/page.tsx — NEEDS UPGRADE
The computing/laptops hub still uses a plain-text advantages list.
GSC shows this page lost 100% of its click traffic.
The "Dual-Intent Trust Boxes" (Individual / Corporate / Genuine Parts) were
never applied to this page on Aug 25.
Action: Apply same visual upgrade we did for /products/accessories and /solutions/repairs.

================================================================================
OVERALL CONTENT HEALTH SUMMARY
================================================================================

WATCHPOINT 1 (Low risk): Guide title "Corporate Workstation & Accessories Guide"
             may deter individual visitors. Monitor after going live.
WATCHPOINT 2 (Medium risk): Repairs page has only 1 CTA — no explicit corporate fleet path.
             Should add a second CTA for B2B fleet inquiries.
WATCHPOINT 3 (Medium risk): "faster than e-commerce" claim in Hero needs consistent
             delivery performance to back it up.

Total files changed in this batch (not yet pushed):
  1. src/app/solutions/repairs/page.tsx
  2. src/app/solutions/repairs/repair-vs-replace-guide/page.tsx (NEW)
  3. src/app/products/accessories/page.tsx
  4. src/app/products/accessories/workstation-buying-guide/page.tsx (NEW)
  5. src/components/sections/home/HeroSection.tsx
  6. src/components/sections/home/GuidesOverviewSection.tsx (NEW)
  7. src/app/page.tsx (GuidesOverviewSection imported and injected)
