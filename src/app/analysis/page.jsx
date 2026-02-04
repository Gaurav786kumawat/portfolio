"use client";

export default function AnalysisPage() {
  const fireEvent = (action, label) => {
    if (window.gtag) {
      window.gtag("event", action, {
        event_category: "analysis_page",
        event_label: label,
      });
    }
  };

  return (
    <main className="min-h-screen px-6 py-16 max-w-5xl mx-auto">
      {/* HERO */}
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Website Analytics & Performance Tracking
        </h1>
        <p className="text-slate-600 dark:text-slate-300 text-lg">
          This page demonstrates how Google Analytics (GA4) is integrated to
          track user behavior, page views, and conversion events across the
          website.
        </p>
      </section>

      {/* GA STATUS */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">
          Google Analytics Status
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-slate-700 dark:text-slate-300">
          <li>GA4 Measurement ID: <strong>G-B9HKJXT1QL</strong></li>
          <li>Automatic page view tracking enabled</li>
          <li>SPA route change tracking enabled</li>
          <li>Production-safe & SEO friendly</li>
        </ul>
      </section>

      {/* EVENTS */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          Analytics Event Testing
        </h2>
        <p className="mb-4 text-slate-600 dark:text-slate-300">
          Click the buttons below to trigger Google Analytics events.  
          These events will appear in <strong>GA → Realtime → Events</strong>.
        </p>

        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => fireEvent("analysis_click", "view_projects")}
            className="px-6 py-3 bg-slate-900 text-white rounded-lg"
          >
            View Projects Event
          </button>

          <button
            onClick={() => fireEvent("analysis_click", "contact_interest")}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg"
          >
            Contact Interest Event
          </button>

          <button
            onClick={() => fireEvent("analysis_click", "hire_me")}
            className="px-6 py-3 bg-green-600 text-white rounded-lg"
          >
            Hire Me Event
          </button>
        </div>
      </section>

      {/* SEO + DATA */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          What Data Is Being Tracked?
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-slate-700 dark:text-slate-300">
          <li>Page views and route changes</li>
          <li>User engagement time</li>
          <li>Button clicks and interactions</li>
          <li>Traffic sources and referrals</li>
          <li>Device, browser, and location data</li>
        </ul>
      </section>

      {/* PRIVACY */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">
          Privacy & Compliance
        </h2>
        <p className="text-slate-600 dark:text-slate-300">
          Analytics is implemented with performance and privacy in mind.
          No personally identifiable information (PII) is collected.
          Tracking is used strictly for understanding website usage
          and improving user experience.
        </p>
      </section>
    </main>
  );
}
