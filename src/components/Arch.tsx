import React from "react";
import cityF from '../assets/images/arch/city_forest.png';
import mvm from '../assets/images/arch/mvm.png';
import brick from '../assets/images/arch/brick.png';
import maze from '../assets/images/arch/maze.png';
import covid from '../assets/images/arch/covid.png';
import theater from '../assets/images/arch/theater.png';
import cityFpdf from '../assets/pdfs/city_forest.pdf';
import mazepdf from '../assets/pdfs/maze.pdf';
import covidpdf from '../assets/pdfs/covid.pdf';
import brickpdf from '../assets/pdfs/brick.pdf';
import theaterpdf from '../assets/pdfs/theater.pdf';
import mvmpdf from '../assets/pdfs/mvm.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faVideo} from "@fortawesome/free-solid-svg-icons";
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="arch">
            <h1>Architecture Projects</h1>
            <div className="projects-grid">
                <div className="project">
                    <a href={mazepdf} target="_blank" rel="noreferrer"><img src={maze} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href={mazepdf} target="_blank" rel="noreferrer"><h2>Emotional Maze</h2></a>
                    <p>The project, Body Labyrinthine is located in a fictioned site in Tokyo, Japan. It's a metaphor that start with the gambling between body and space, which represent my reflection on the everlasting debate in the field of architecture.</p>
                </div>
                <div className="project">
                    <a href={covidpdf} target="_blank" rel="noreferrer"><img src={covid} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href={covidpdf} target="_blank" rel="noreferrer"><h2>Under Covid</h2></a>
                    <p>Because of Covid-19, people have to stay at home, the communication between people is less and less, in this project, I try to find a special social
modes that is suitable for all kinds of social conditions. For the structure, I find out a changeble structure that could change the size of the space
according to graviy.</p>
                </div>
                <div className="project">
                    <a href={brickpdf} target="_blank" rel="noreferrer"><img src={brick} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href={brickpdf} target="_blank" rel="noreferrer"><h2>Plants Yard & Bricks Nursery</h2></a>
                    <a href="https://youtu.be/a-73ny_2YzI" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faVideo}/></a>
                    <p>In this project, I try to explore two life cycles: bricks life cycle and plants life cycle. The soil is the link between them: bricks are made of clay and return back to soil, plants need soil to support their life.
                    </p>
                </div>
                <div className="project">
                    <a href={theaterpdf} target="_blank" rel="noreferrer"><img src={theater} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href={theaterpdf} target="_blank" rel="noreferrer"><h2>Escape Negatif</h2></a>
                    <p>In this project, I learned the stacking idea from my precedence - ALESIA CINEMA. By using different shape of cinema inserting into a space and stacking on the top
                        of each other, several negetive spaces are produced, and these negative spaces are the main character of this project, I regard these negative spaces between theaters 
                        in a positive way, design them as a conjunction and public space, visitors go out from the auditoriums will gather together to activate the originally negative space, 
                        turing negative attribute into vivid vibe.</p>
                </div>
                <div className="project">
                    <a href={cityFpdf} target="_blank" rel="noreferrer"><img src={cityF} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href={cityFpdf} target="_blank" rel="noreferrer"><h2>City Forest</h2></a>
                    <p> In order to increase shadow without infringing on private space, in this project, we propose a innovative method, which utilize the street space to provide tree canopy, while maintainly its original function at the same time.</p>
                </div>
                <div className="project">
                    <a href={mvmpdf} target="_blank" rel="noreferrer"><img src={mvm} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href={mvmpdf} target="_blank" rel="noreferrer"><h2>MVM: Multiverse of Modules</h2></a>
                    <p>Group Member: Xiujin Liu, Varun Vashi, and Nick Xu</p>
                    <p>Our idea is to offer a fexible, adaptable, and universal collective building system in the form of cross-laminated timber (CLT) modules.</p>
                </div>
                
                
                
            </div>
        </div>
    );
}

export default Project;