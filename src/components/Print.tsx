import React from "react";
import breathe1 from '../assets/images/arch/breathe.png';
import breathe2 from '../assets/images/arch/breathe2.png';
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="print">
            <h1>3D Printing Projects</h1>
            <div className="projects-grid">
                <div className="project">
                        <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><img src={breathe1} className="zoom" alt="thumbnail" width="100%" /></a>
                        <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><h2>Breathe Bricks</h2></a>
                        <p>Designed, developed, and launched a 3D multiplayer racing game with C# and Unity. This is available on Itch.io for gamers worldwide to enjoy.</p>
                </div>

                <div className="project">
                        <a href="https://arxiv.org/abs/2503.06769" target="_blank" rel="noreferrer"><img src={breathe2} className="zoom" alt="thumbnail" width="100%" /></a>
                        <a href="https://arxiv.org/abs/2503.06769" target="_blank" rel="noreferrer"><h2>Breathe Bricks 2.0</h2></a>
                        <p>This paper proposes an innovative solution to the growing issue of greenhouse gas emissions: a closed photobioreactor (PBR) façade system to mitigate greenhouse gas (GHG) concentrations.</p>
                </div>
            </div>
        </div>
            
    );
}

export default Project;