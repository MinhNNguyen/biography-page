import React from 'react';
import { Typography } from '@mui/material';

function NavItem({ text }: { text: string }) {
  return (
    <Typography variant="h1" component="h2">
      {text}
    </Typography>
  );
}

function Header() {
  return (
    <div>
      <NavItem text="Home" />
      <NavItem text="Resume" />
      <NavItem text="Blog" />
      <NavItem text="Contact" />
    </div>
  );
}

export default Header;
