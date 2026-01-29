"use client";

import Script from "next/script";

export default function GoogleTag() {
    return (
        <>
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=AW-17774738308"
                strategy="lazyOnload"
            />
            <Script id="google-analytics" strategy="lazyOnload">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'AW-17774738308');

          // Definition of the report conversion function
          window.gtag_report_conversion = function(url) {
            var callback = function () {
              if (typeof(url) != 'undefined') {
                window.location = url;
              }
            };
            gtag('event', 'conversion', {
                'send_to': 'AW-17774738308/yxidCN3Vle8bEIT305tC',
                'value': 1.0,
                'currency': 'BRL',
                'event_callback': callback
            });
            return false;
          }
        `}
            </Script>
        </>
    );
}

// Add type definition to global
declare global {
    interface Window {
        gtag_report_conversion: (url?: string) => boolean | void;
        dataLayer: any[];
    }
}
