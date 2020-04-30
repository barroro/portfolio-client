import React from 'react';

import dynamic from "next/dynamic";
import PublicLayout from '../components/public-layout';

const Container = dynamic(import("@material-ui/core/Container"));
const Typography = dynamic(import("@material-ui/core/Typography"));
const Box = dynamic(import("@material-ui/core/Box"));
const ProTip = dynamic(import("../src/ProTip"));
const Link = dynamic(import("../src/Link"));
const Copyright = dynamic(import("../src/Copyright"));

export default function Index() {
  return (
    <PublicLayout>
      <div className="section-100vh">
        <h1>Main page title</h1>
      </div>
    </PublicLayout>
  );
}
