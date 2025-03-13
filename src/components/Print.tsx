import React from "react";
import breathe1 from '../assets/images/arch/breathe.png';
import breathe2 from '../assets/images/arch/breathe2.png';
import clay from '../assets/images/arch/clay.png';
import breathepdf from '../assets/pdfs/breathe.pdf';
import claypdf from '../assets/pdfs/clay.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faVideo} from "@fortawesome/free-solid-svg-icons";
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="print">
            <h1>3D Printing Projects</h1>
            <div className="projects-grid">
                <div className="project">
                        <a href={breathepdf} target="_blank" rel="noreferrer"><img src={breathe1} className="zoom" alt="thumbnail" width="100%" /></a>
                        <a href={breathepdf} target="_blank" rel="noreferrer"><h2>Breathe Bricks</h2></a>
                        <p> Group member: Xiujin Liu, Yuxin Lin, Zhijuan Liu</p>
                        <p>This project proposes an innovative solution to the growing issue of greenhouse gas emissions: a closed photobioreactor (PBR) façade system to mitigate greenhouse gas (GHG) concentrations.</p>
                </div>

                <div className="project">
                        <a href="https://arxiv.org/abs/2503.06769" target="_blank" rel="noreferrer"><img src={breathe2} className="zoom" alt="thumbnail" width="100%" /></a>
                        <a href="https://arxiv.org/abs/2503.06769" target="_blank" rel="noreferrer"><h2>Breathe Bricks 2.0</h2></a>
                        <p> Group member: Xiujin Liu, Zhijuan Liu</p>
                        <p>This paper proposes an innovative solution to the growing issue of greenhouse gas emissions: a closed photobioreactor (PBR) façade system to mitigate greenhouse gas (GHG) concentrations.</p>
                </div>

                <div className="project">
                        <a href={claypdf} target="_blank" rel="noreferrer"><img src={clay} className="zoom" alt="thumbnail" width="100%" /></a>
                        <a href={claypdf} target="_blank" rel="noreferrer"><h2>By Layer</h2></a>
                        <a href="https://youtu.be/z1W3Twtqbgc" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faVideo}/></a>
                        <p> Group member: Xiujin Liu, Zhijuan Liu, Zach Keller</p>
                        <p>This project explores the potential of clay pring, by printing interlocking components, we try to investigate the possibility
                            of self-support assembly-flexible wall.
                        </p>
                </div>
            </div>
        </div>
            
    );
}

export default Project;