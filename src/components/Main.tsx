import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Email from '@mui/icons-material/Email';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import avatar from '../assets/images/avatar.png';
import '../assets/styles/Main.scss';
import resume from '../assets/pdfs/resume.pdf';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={avatar} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/XiujinLiu" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/jean-liu-389b41300/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:jeanliu@umich.edu" target="_blank" rel="noreferrer"><Email/></a>
            <a href={resume} target="_blank" rel="noreferrer"><ContactPageIcon/> </a>
          </div>
          <h1>Jean Liu</h1>
          <p>Robotics, Architecture, and more</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/XiujinLiu" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/jean-liu-389b41300/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:jeanliu@umich.edu" target="_blank" rel="noreferrer"><Email/> </a>
            <a href={resume} target="_blank" rel="noreferrer"><ContactPageIcon/> </a>
            {/* <a href="https://www.linkedin.com/in/jean-liu-389b41300/" target="_blank" rel="noreferrer"><file/></a> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;