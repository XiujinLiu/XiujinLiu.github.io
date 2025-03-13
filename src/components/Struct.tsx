import React from "react";
import wood from '../assets/images/struct/wood.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faVideo} from "@fortawesome/free-solid-svg-icons";
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="struct">
            <h1>Structure/Construction Projects</h1>
            <div className="projects-grid">
                <div className="project">
                        <a href="https://deepblue.lib.umich.edu/bitstream/handle/2027.42/191187/Ruan_Adel_2023_RoboticFabricationOfNailLaminatedTimber.pdf?sequence=1" target="_blank" rel="noreferrer"><img src={wood} className="zoom" alt="thumbnail" width="100%" /></a>
                        <a href="https://deepblue.lib.umich.edu/bitstream/handle/2027.42/191187/Ruan_Adel_2023_RoboticFabricationOfNailLaminatedTimber.pdf?sequence=1" target="_blank" rel="noreferrer"><h2>Robotic Fabrication of
                        Nail-Laminated Timber</h2></a>
                        <p> Group member: Daniel Ruan, Abdallah Kamhawi, Ali Fahmy, Tharanesh Varadharajan, Xiujin Liu</p>
                        <p> Instructor: Arash Adel</p>
                        <p>The case study involves a three-story structure supported by two curved walls, showcasing a nonstandard NLT (Nail Laminated Timber) multistory housing construction system that would be challenging to achieve using conventional methods.</p>
                </div>
            </div>
        </div>
            
    );
}

export default Project;