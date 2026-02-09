"use client";
import Script from "next/script";

export default function Analytics() {
  return (
    <>
      {/* Google Analytics - GA4 */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-B9HKJXT1QL"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-B9HKJXT1QL', {
            page_path: window.location.pathname,
            send_page_view: true
          });
        `}
      </Script>

      {/* Google Tag Manager (Optional - uncomment if you have GTM) */}
      {/* <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-XXXXXXX');
        `}
      </Script> */}

      {/* Microsoft Clarity (Optional - for heatmaps & session recordings) */}
      <Script id="microsoft-clarity" strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "YOUR_CLARITY_PROJECT_ID");
        `}
      </Script>

      {/* Facebook Pixel (Optional - for FB ads tracking) */}
      <Script id="facebook-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', 'YOUR_PIXEL_ID');
          fbq('track', 'PageView');
        `}
      </Script>

      {/* Hotjar (Optional - for user behavior analytics) */}
      <Script id="hotjar" strategy="afterInteractive">
        {`
          (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:YOUR_HOTJAR_ID,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `}
      </Script>

      {/* LinkedIn Insight Tag (Optional - for LinkedIn conversion tracking) */}
      <Script id="linkedin-insight" strategy="afterInteractive">
        {`
          _linkedin_partner_id = "YOUR_PARTNER_ID";
          window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
          window._linkedin_data_partner_ids.push(_linkedin_partner_id);
          (function(l) {
            if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
            window.lintrk.q=[]}
            var s = document.getElementsByTagName("script")[0];
            var b = document.createElement("script");
            b.type = "text/javascript";b.async = true;
            b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
            s.parentNode.insertBefore(b, s);
          })(window.lintrk);
        `}
      </Script>

      {/* Google Search Console Verification (Meta tag version via Script) */}
      <Script id="search-console-verification" strategy="afterInteractive">
        {`
          // Add your Google Search Console verification code here if needed
          // This is usually done via meta tag in the head, but can be handled here too
        `}
      </Script>

      {/* Custom Event Tracking Helper */}
      <Script id="custom-analytics-events" strategy="afterInteractive">
        {`
          // Custom event tracking function
          window.trackEvent = function(eventName, eventParams = {}) {
            if (typeof gtag !== 'undefined') {
              gtag('event', eventName, eventParams);
            }
            
            // Track to Facebook Pixel if available
            if (typeof fbq !== 'undefined') {
              fbq('trackCustom', eventName, eventParams);
            }
            
            // Track to other platforms as needed
            console.log('Event tracked:', eventName, eventParams);
          };

          // Track scroll depth
          let scrollDepth = 0;
          window.addEventListener('scroll', function() {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
            
            if (scrollPercent > scrollDepth) {
              scrollDepth = Math.floor(scrollPercent / 25) * 25;
              if (scrollDepth > 0 && scrollDepth <= 100) {
                window.trackEvent('scroll_depth', {
                  depth: scrollDepth + '%'
                });
              }
            }
          });

          // Track time on page
          let startTime = new Date();
          window.addEventListener('beforeunload', function() {
            const timeSpent = Math.round((new Date() - startTime) / 1000);
            window.trackEvent('time_on_page', {
              seconds: timeSpent
            });
          });
        `}
      </Script>

      {/* Performance Monitoring */}
      <Script id="performance-monitoring" strategy="afterInteractive">
        {`
          // Web Vitals tracking
          if ('PerformanceObserver' in window) {
            // Track Largest Contentful Paint (LCP)
            const lcpObserver = new PerformanceObserver((list) => {
              const entries = list.getEntries();
              const lastEntry = entries[entries.length - 1];
              window.trackEvent('web_vitals_lcp', {
                value: lastEntry.renderTime || lastEntry.loadTime,
                metric: 'lcp'
              });
            });
            lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

            // Track First Input Delay (FID)
            const fidObserver = new PerformanceObserver((list) => {
              const entries = list.getEntries();
              entries.forEach((entry) => {
                window.trackEvent('web_vitals_fid', {
                  value: entry.processingStart - entry.startTime,
                  metric: 'fid'
                });
              });
            });
            fidObserver.observe({ entryTypes: ['first-input'] });

            // Track Cumulative Layout Shift (CLS)
            let clsValue = 0;
            const clsObserver = new PerformanceObserver((list) => {
              for (const entry of list.getEntries()) {
                if (!entry.hadRecentInput) {
                  clsValue += entry.value;
                }
              }
            });
            clsObserver.observe({ entryTypes: ['layout-shift'] });
            
            window.addEventListener('beforeunload', () => {
              window.trackEvent('web_vitals_cls', {
                value: clsValue,
                metric: 'cls'
              });
            });
          }
        `}
      </Script>

      {/* Error Tracking */}
      <Script id="error-tracking" strategy="afterInteractive">
        {`
          // Global error handler
          window.addEventListener('error', function(event) {
            window.trackEvent('javascript_error', {
              message: event.message,
              source: event.filename,
              line: event.lineno,
              column: event.colno
            });
          });

          // Promise rejection handler
          window.addEventListener('unhandledrejection', function(event) {
            window.trackEvent('promise_rejection', {
              reason: event.reason
            });
          });
        `}
      </Script>

      {/* User Engagement Tracking */}
      <Script id="engagement-tracking" strategy="afterInteractive">
        {`
          // Track button clicks
          document.addEventListener('click', function(e) {
            const target = e.target.closest('a, button');
            if (target) {
              const text = target.textContent.trim();
              const href = target.href || '';
              
              window.trackEvent('click', {
                element: target.tagName,
                text: text.substring(0, 50),
                href: href
              });
            }
          });

          // Track form submissions
          document.addEventListener('submit', function(e) {
            const form = e.target;
            window.trackEvent('form_submission', {
              form_id: form.id || 'unknown',
              form_name: form.name || 'unknown'
            });
          });

          // Track video plays (if you have videos)
          document.addEventListener('play', function(e) {
            if (e.target.tagName === 'VIDEO') {
              window.trackEvent('video_play', {
                video_src: e.target.currentSrc
              });
            }
          }, true);
        `}
      </Script>
    </>
  );
}