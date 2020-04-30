import React from 'react';

import dynamic from "next/dynamic";

const Typography = dynamic(import("@material-ui/core/Typography"));
const Button = dynamic(import("@material-ui/core/Button"));
const Box = dynamic(import("@material-ui/core/Box"));
const Link = dynamic(import("../../src/Link"));
const Copyright = dynamic(import("../../src/Copyright"));

export default function Index() {
  return (
    <div className="section-100vh">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Load Dashboard component
        </Typography>
        <Button variant="contained" color="primary" component={Link} naked href="/">
          Go to the main page
        </Button>
        <Copyright />
      </Box>
    </div>
  );
}
