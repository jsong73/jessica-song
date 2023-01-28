import React from "react";
import Woman from "../images/woman.jpg"

function PortfolioContainer () {
    return(
        <div className="snap-y snap-mandatory h-screen w-screen">

        <div 
            id="home" 
            className="snap-start w-screen h-screen"> 

            <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                        <ul className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                        <div class="text-sm lg:flex-grow">
                            <li className="mr-3 inline-block"> <a href="#home">Home</a></li>
                            <li className="mr-3 inline-block"> <a href="#about">About</a></li>
                            <li className="mr-3 inline-block"> <a href="#projects">Projects</a></li>
                            <li className="mr-3 inline-block"> <a href="#contact">Contact</a></li>
                            </div>
                        </ul>
               
                </div>
            </nav>

            <h1 id="full-name" className="max-w-screen-lg mx-auto mt-8
            text-8xl text-center justify-center items-center"> Jessica Song.
            </h1>

            <h1 id="title" className="text-3xl mt-8 text-center justify-center 
            items-center"> — front-end developer & back-end developer —
            </h1>

            
            <p id="bio" className="text-xl mt-8 text-center justify-center items-center"> A 
            full stack web developer empowered by <b>building</b> highly granular code and 
            <b> delivering </b> hyperscaling solutions.
            </p>


            <div className="hero container max-w-screen-lg mx-auto pb-10 flex justify-center">
            <img src={Woman} width="500px" alt="woman- 
            computer"/>
            </div>



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
