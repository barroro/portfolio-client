import React from 'react';

import dynamic from "next/dynamic";
import DashboardLayout from '../../components/dashboard-layout';
import withAuth from '../../utils/withAuth';
import { withAuthSync } from '../../utils/auth';

const Typography = dynamic(import("@material-ui/core/Typography"));
// const Box = dynamic(import("@material-ui/core/Box"));
// const Link = dynamic(import("../../src/Link"));
// const Copyright = dynamic(import("../../src/Copyright"));

const Home = () => {
  return (
    <Typography variant="h4" component="h1" gutterBottom>Home page dashboard</Typography>
  );
}

export default withAuthSync(Home);