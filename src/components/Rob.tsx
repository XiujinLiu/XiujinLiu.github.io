import React from "react";
import uas from '../assets/images/rob/uas.png';
import render from '../assets/images/rob/render.png';
import sym from '../assets/images/rob/sym.png';
import arnet from '../assets/images/rob/arnet.png';
import search from '../assets/images/rob/search.png';
import byte from '../assets/images/rob/byte.png';
import uaspdf from '../assets/pdfs/uas.pdf';
import sympdf from '../assets/pdfs/sym.pdf';
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCode, faVideo} from "@fortawesome/free-solid-svg-icons";
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="robotics">
            <h1>Robotics Projects</h1>
            <div className="projects-grid">
                <div className="project">
                        <a href={uaspdf} target="_blank" rel="noreferrer"><img src={uas} className="zoom" alt="thumbnail" width="100%" /></a>
                        <a href={uaspdf} target="_blank" rel="noreferrer"><h2>Human Tracking UAS</h2></a>
                        <a href="https://github.com/XiujinLiu/ROB599-Experimental-UAS" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faCode}/></a> &nbsp;
                        <a href="https://youtu.be/OgoUXdZDw4w" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faVideo}/></a>
                        <p> Group member: Xiujin Liu, Andy Qin, Kaho Lai, Hao Hu</p>
                        <p> In this project, we built a quadrotor from parts, performed system identification, and implemented attitude and position control. And proposed a workflow to 
                            recognize, track, and follow moving people along with an innovation in structure design.</p>
                </div>

                <div className="project">
                        <a href="https://github.com/XiujinLiu/Image-Rendering-Engine" target="_blank" rel="noreferrer"><img src={render} className="zoom" alt="thumbnail" width="100%" /></a>
                        <a href="https://github.com/XiujinLiu/Image-Rendering-Engine" target="_blank" rel="noreferrer"><h2>Mesh Render Engine</h2></a>
                        <a href="https://github.com/XiujinLiu/Image-Rendering-Engine" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faCode}/></a>
                        <p> In this project, we built a quadrotor from parts, performed system identification, and implemented attitude and position control. And proposed a workflow to 
                            recognize, track, and follow moving people along with an innovation in structure design.</p>
                </div>

                <div className="project">
                        <a href={sympdf} target="_blank" rel="noreferrer"><img src={sym} className="zoom" alt="thumbnail" width="100%" /></a>
                        <a href={sympdf} target="_blank" rel="noreferrer"><h2>E(n) Equivariant Graph Neural Network for 3D Object Detection in a
                        Point Cloud</h2></a>
                        <a href="https://github.com/XiujinLiu/computational-symmetry-in-AI-Robotics" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faCode}/></a>
                        <p>  In this project, we aim to project 3D point cloud onto a translation-invariant and permutation-invariant homogeneous space. After we encode 
                            the point cloud efficiently in a fixed radius near neighbors graph, by using the translation-invariant and rotation-invariant attributes of 3D 
                            objects, We design a Equivariant Graph Neural Network to predict the category and location of the object by predicting which category that each 
                            vertex in the graph belongs to based on previous work Point-GNN.</p>
                </div>

                <div className="project">
                        <a href="https://ieeexplore.ieee.org/document/10773333" target="_blank" rel="noreferrer"><img src={arnet} className="zoom" alt="thumbnail" width="100%" /></a>
                        <a href="https://ieeexplore.ieee.org/document/10773333" target="_blank" rel="noreferrer"><h2>Attention Regulation for Efficient Semantic Segmentation on Unstructured Terrain</h2></a>
                        <p>  For autonomous navigation in outdoor and unstructured environments, our AR-Net offers an efficient semantic segmentation pipeline. Using RGB images, AR-Net's encoder extracts multi-scale 
                            features, while its novel Attention-Regulation layer in the decoder ensures accurate pixel-level segmentation. Our model demonstrates superior performance and fast inference on two real-world 
                            datasets. We also include detailed ablation studies and parameter analysis.</p>
                </div>

                <div className="project">
                        <a href="https://github.com/XiujinLiu/si507" target="_blank" rel="noreferrer"><img src={search} className="zoom" alt="thumbnail" width="100%" /></a>
                        <a href="https://www.pinterest.com/pin/128493395617321118/" target="_blank" rel="noreferrer"><h6>Cover Image Reference Link</h6></a>
                        <a href="https://github.com/XiujinLiu/si507" target="_blank" rel="noreferrer"><h2> Search Engine</h2></a>
                        <a href="https://github.com/XiujinLiu/si507" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faCode}/></a>
                        <p>  This is a binary tree based search Engin. This project will guess users favorate movies based on their answers, if the users are not satisfied, 
                            the engine will update and adjust to match with users.
                        </p>
                </div>
                <div className="project">
                        <a href="https://github.com/XiujinLiu/multi-ByteTrack" target="_blank" rel="noreferrer"><img src={byte} className="zoom" alt="thumbnail" width="100%" /></a>
                        <a href="https://www.pinterest.com/pin/468867011209363258/" target="_blank" rel="noreferrer"><h6>Cover Image Link</h6></a>
                        <a href="https://github.com/XiujinLiu/multi-ByteTrack" target="_blank" rel="noreferrer"><h2> Multi-ByteTrack</h2></a>
                        <a href="https://github.com/XiujinLiu/multi-ByteTrack" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faCode}/></a>  &nbsp;
                        <a href="https://youtu.be/fNEqtkqPNXA" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faVideo}/></a>
                        <p>  This is a revised version of ByteTrack-CPP-ncnn. The main functionality revision is to change ByteTrack from single-class detection to multi_class detection. </p>
                </div>
            </div>
        </div>
    );
}

export default Project;