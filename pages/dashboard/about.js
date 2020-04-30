import React from 'react';

import dynamic from "next/dynamic";
import DashboardLayout from '../../components/dashboard-layout';

const Typography = dynamic(import("@material-ui/core/Typography"));
// const Box = dynamic(import("@material-ui/core/Box"));
// const Link = dynamic(import("../../src/Link"));
// const Copyright = dynamic(import("../../src/Copyright"));

export default function About() {
  return (
    <Typography variant="h4" component="h1" gutterBottom>About dashboard</Typography>
  );
}