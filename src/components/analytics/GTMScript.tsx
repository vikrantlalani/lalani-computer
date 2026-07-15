"use client";

import React, { useEffect, useState } from "react";
import Script from "next/script";
import { useCookieConsent } from "@/components/providers/CookieConsentProvider";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export function GTMScript() {
  const { consent } = useCookieConsent();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Push consent update to dataLayer whenever it changes
  useEffect(() => {
    if (!mounted || !GTM_ID) return;
    
    window.dataLayer = window.dataLayer || [];
    function gtag(){ window.dataLayer.push(arguments); }

    if (consent.given) {
      gtag("consent", "update", {
        analytics_storage: consent.analytics ? "granted" : "denied",
        ad_storage: consent.marketing ? "granted" : "denied",
        ad_user_data: consent.marketing ? "granted" : "denied",
        ad_personalization: consent.marketing ? "granted" : "denied",
      });
    }
  }, [consent, mounted]);

  if (!GTM_ID) return null;

  return (
    <>
      {/* Default Consent State (Runs before GTM loads) */}
      <Script
        id="gtm-consent-default"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            
            // Set default consent to denied (Consent Mode V2 standard)
            gtag('consent', 'default', {
              'analytics_storage': 'denied',
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'wait_for_update': 500
            });
            
            // Initialize GTM
            dataLayer.push({
              'gtm.start': new Date().getTime(), 
              event: 'gtm.js'
            });
          `,
        }}
      />

      {/* GTM Script — ALWAYS LOADED to capture cookieless pings */}
      <Script
        id="gtm-loader"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`}
      />

      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
    </>
  );
}
