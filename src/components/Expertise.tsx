import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import { faRobot, faBuildingColumns, faTrowelBricks } from "@fortawesome/free-solid-svg-icons";
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Python",
    "C++",
    "PyTorch",
    "CUDA",
    "Data Structure",
    "SLAM"
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Docker",,
    "Linux",
    "ROS",
    "Matlab"
];

const labelsThird = [
    "Adobe Suit",
    "Enscape",
    "Microsoft Office Suite",
    "Rhino",
    "Grasshopper",
    "Processing"
];

const labelsForth = [
    "AutoCAD",
    "Revit",
    "Abaqus",
    "PKPM",
    "3D3S"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Robot Perception/3D Vision</h3>
                    <p>I have developed several 3D vision and robotic perception projects leveraging modern deep learning technologies, including 
                        Gaussian Splatting, NeRF, Scene Flow, and 6D Pose Estimation. Additionally, I built a vectorized mesh rendering engine from 
                        scratch using PyTorch.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faRobot} size="3x"/>
                    <h3>Robot Arm</h3>
                    <p>
                    I have contributed to projects integrating robotic arms with computer vision and active perception. Additionally, I have been involved
                     in projects related to robotic arm-based printing, where I explored various printing technologies and materials to produce different
                     building components.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faBuildingColumns} size="3x"/>
                    <h3>Architecture</h3>
                    <p>I have professional experience in architectural designing. My primary research focuses on the functions, boundaries, and integration of public and 
                        private spaces in various contexts.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faTrowelBricks} size="3x"/>
                    <h3>Structure/Construction</h3>
                    <p>With a Bachelor's degree in Civil Engineering, I have gained extensive experience in structural design and construction, including steel structures, 
                        reinforced concrete structures, wooden structures, and large-span structures.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsForth.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;