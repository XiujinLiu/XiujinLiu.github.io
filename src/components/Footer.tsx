import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import resume from '../assets/pdfs/resume.pdf';
import '../assets/styles/Footer.scss';
import Email from '@mui/icons-material/Email';

function Footer() {
  return (
    <footer>
      <div>
      <a href="https://github.com/XiujinLiu" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/jean-liu-389b41300/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:jeanliu@umich.edu" target="_blank" rel="noreferrer"><Email/></a>
            <a href={resume} target="_blank" rel="noreferrer"><ContactPageIcon/> </a>
      </div>
      <p>A portfolio designed & built by <a href="https://github.com/yujisatojr/react-portfolio-template" target="_blank" rel="noreferrer">Yuji Sato</a> with 💜</p>
    </footer>
  );
}

export default Footer;