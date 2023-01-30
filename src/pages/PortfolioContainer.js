import React from "react";
import Woman from "../images/coding.png"

function PortfolioContainer () {
    return(
   
        <div className="snap-y snap-mandatory h-screen w-screen">

    {/* HOME */}
        <div 
            id="home" 
            className="snap-start w-screen h-screen "> 

            {/* navbar */}
            <nav className="flex items-center justify-center flex-wrap p-6">
                <div className="flex-shrink-0 mr-6">
                        <ul className="w-full block flex-grow lg:flex lg:items-center lg:h-auto">
                            <div className="text-md lg:flex-grow ">
                                <li className="mr-5 inline-block hover:text-blue-500 hover:italic"> 01. <a href="#home">Home</a>
                                </li>
                                <li className="mr-5 inline-block hover:text-blue-500 hover:italic"> 02. <a href="#about">About</a>
                                </li>
                                <li className="mr-5 inline-block hover:text-blue-500 hover:italic"> 03. <a href="#projects">Projects</a>
                                </li>
                                <li className="inline-block hover:text-blue-500 hover:italic"> 04. <a href="#contact">Contact</a>
                                </li>
                            </div>
                        </ul>
                </div>
            </nav>

                <div className="px-6">
                    <div className="flex justify-center items-center flex-wrap">
                        <div className="md:w-8/12 lg:w-4/12 lg:ml-20">
                    {/* Home image  */}
                    <img className="h-auto max-w-full py-1" src={Woman} alt="woman-computer"/>
         
                        </div>

                <div className="md:w-4/8 lg:w-5/12 lg:ml-20">
                    <h1 id="full-name" className="max-h-screen-lg text-center justify-center items-center mt-10 md:text-8xl sm: text-4xl">JESSICA SONG.
                    </h1>

                {/* grey border  */}
                <div className="h-5 border-b-4 border-grey"></div>
            
                <p id="bio" className="md:text-xl mt-5 text-center justify-center items-center"> A full stack web developer empowered by <b className="italic text-blue-500"> building </b> highly granular code   
                and <b className="italic text-blue-500"> delivering </b> hyperscaling solutions.
                </p>

                {/* resume link */}
                <div className="flex text-center justify-center items-center mt-8">
                <a 
                    className="text-blue-500 hover:text-white border border-blue-500 hover:bg-blue-500 
                    focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center dark:border-blue-500 dark:text-blue-500 
                    dark:hover:text-white dark:hover:bg-blue-500"
                    href="https://docs.google.com/document/d/1KtbFgZj_dZ6uu4P9ycTLqT_DTbnaB5PlaWuuW88YAuc/edit" 
                    aria-label="email" 
                    target="_blank" 
                    rel="noopener noreferrer"> Check out my resume
                </a>
             </div>
    
                    </div>
                </div>
            </div>
        </div>

    {/* ABOUT ME */}

        <div 
            id="about" 
            className="snap-start w-screen h-screen "> 
  
        <h1 id="about-me" className="flex ml-12 mt-5 md:text-5xl sm: text-4xl h-5 border-b-4 border-grey"> 01. ABOUT ME  </h1>
   
        
        <p id="hello" className="flex mt-12 ml-12 text-blue-500 text-8xl italic"> Hello! </p>

        <p className="flex text-center items-center justify-center"> My name is Jessica and i'm a self-taught developer residing in Atlana, Georgia. I enjoy creating full stack web applications with immersive 
            digital experiences using Javascript(ES6) and other supporting libraries and languages. My main focus for future projects is to expand my 
            experience with familiar technologies or even new ones. Below are some skills and technologies i've been working with!
        </p>

        {/* <div>
        ➤
        </div>
         */}
        
        
        
        
        
        
        </div>








        <div className="ml-3 border-2 border-gray"></div>

        <div 
            id="projects" 
            className=" snap-start w-screen h-screen flex"> 
         <h1 id="projects" className="flex ml-12 mt-5 md:text-5xl sm: text-4xl"> 03. PROJECTS </h1>
         <div className="ml-3 border-2 border-gray "></div>
   

        </div>







        <div 
            id="contact" 
            className="bg-teal-200 snap-start w-screen h-screen flex items-    
            center justify-center text-8xl"> Contact 
        </div>
        
        
        
        
        
        
        
        
        
        
        </div>
    )}
    
export default PortfolioContainer;
