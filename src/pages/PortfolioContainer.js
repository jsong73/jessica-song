import React from "react";
import Woman from "../images/woman.jpg"

function PortfolioContainer () {
    return(
        <div className="snap-y snap-mandatory h-screen w-screen">

        <div 
            id="home" 
            className="snap-start w-screen h-screen"> 

            <nav className="flex items-center justify-center flex-wrap p-6">
                <div className="flex items-center flex-shrink-0 mr-6">
                        <ul className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                            <div className="text-md lg:flex-grow ">
                                <li className="mr-5 inline-block hover:text-blue-500 hover:italic"> 01. <a href="#home">Home</a></li>
                                <li className="mr-5 inline-block hover:text-blue-500 hover:italic"> 02. <a href="#about">About</a></li>
                                <li className="mr-5 inline-block hover:text-blue-500 hover:italic"> 03. <a href="#projects">Projects</a></li>
                                <li className="mr-5 inline-block hover:text-blue-500 hover:italic"> 04. <a href="#contact">Contact</a></li>
                            </div>
                        </ul>
                </div>
            </nav>

            {/* grey border */}
            <div className="w-full border-b border-gray-300"></div>


            <h1 id="full-name" className="max-w-screen-lg mx-auto mt-8 flex
            text-8xl text-center justify-center items-center"> Jessica Song.
            </h1>

            <h1 id="title" className="flex text-3xl mt-8 text-center justify-center items-center"> — front-end & back-end developer —
            </h1>

            
            <p id="bio" className="text-xl mt-8 text-center justify-center items-center"> A 
            full stack web developer empowered by <b className="italic"> building</b> highly granular code and 
            <b className="italic"> delivering </b> hyperscaling solutions.
            </p>

            <div className="flex text-center justify-center items-center mt-8 ">
                <a 
                    className="text-blue-500 hover:text-white border border-blue-500 hover:bg-blue-500 
                    focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500"
                    href="https://docs.google.com/document/d/1KtbFgZj_dZ6uu4P9ycTLqT_DTbnaB5PlaWuuW88YAuc/edit" 
                    aria-label="email" 
                    target="_blank" 
                    rel="noopener noreferrer"> View my resume
                </a>
             </div>
      


            <div className="hero container max-w-screen-lg mx-auto pb-10 flex justify-center">
            <img src={Woman} width="520px" alt="woman- 
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
