"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", "G-B9HKJXT1QL", {
        page_path: pathname,
      });
    }
  }, [pathname]);

  return null;
}
