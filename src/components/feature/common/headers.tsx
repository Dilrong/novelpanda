"use client";

import Nav from "@/components/feature/common/nav";
import { Suspense } from "react";
import GoogleTagAnalytics from "@/components/feature/common/google-tag-analytics";
import MetaInfo from "@/components/feature/common/meta-info";
import { GoogleAnalytics } from "nextjs-google-analytics";

function Headers() {
  return (
    <header>
      <Suspense>
        <GoogleAnalytics />
        <GoogleTagAnalytics />
        <MetaInfo />
      </Suspense>
      <Nav />
    </header>
  );
}

export default Headers;
