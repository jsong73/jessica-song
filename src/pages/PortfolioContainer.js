import React from "react";
import Woman from "../images/woman.jpg"

function PortfolioContainer () {
    return(
        <div className="snap-y snap-mandatory h-screen w-screen">

        <div 
            id="home" 
            className="snap-start w-screen h-screen"> 

            <nav className="">
                <ul>
                    <li> <a href="#home">Home</a> </li>
                    <li> <a href="#about">About</a> </li>
                    <li> <a href="#projects">Projects</a> </li>
                    <li> <a href="#contact">Contact</a> </li>
                </ul>
            </nav>

            <h1 id="full-name" className="text-8xl text-center justify-center 
            items-center"> Jessica Song.
            </h1>

            <h1 id="title" className=" text-3xl mt-8 text-center justify-center 
            items-center"> — front-end developer & back-end developer —
            </h1>

            <img className="justify-center items-center" src={Woman} width="500px" alt="woman- 
            computer"/>

            <p id="bio" className="text-xl mt-8 text-center justify-center items-center"> A 
            full stack web developer empowered by <b>building</b> highly granular code and 
            <b> delivering </b> hyperscaling solutions.
            </p>

        </div>


        <div 
            id="about" 
            className="bg-blue-200 snap-start w-screen h-screen flex items-center     
            justify-center text-8xl"> About 
        </div>



        <div 
            id="projects" 
            className="bg-yellow-200 snap-start w-screen h-screen flex items- 
            center justify-center text-8xl"> Projects 
        </div>


        <div 
            id="contact" 
            className="bg-teal-200 snap-start w-screen h-screen flex items-    
            center justify-center text-8xl"> Contact 
        </div>
        
        
        
        
        
        
        
        
        
        
        </div>
    )}
    
export default PortfolioContainer;
