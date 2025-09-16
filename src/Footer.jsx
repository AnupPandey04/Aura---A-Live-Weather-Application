import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import EmailIcon from "@mui/icons-material/Email";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://www.instagram.com/ansh.__pvt__?igsh=aWdrYmg5MDFsdzV3" target="_blank" rel="noreferrer">
          <InstagramIcon />
        </a>
        <a href="https://pin.it/5tEoXLaWx" target="_blank" rel="noreferrer">
          <PinterestIcon />
        </a>
        <a href="mailto:ansh47822@gmail.com">
          <EmailIcon />
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} Aura — A Live Weather Application</p>
    </footer>
  );
}
