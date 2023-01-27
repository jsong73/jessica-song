import React from "react";


function PortfolioContainer () {
    return(
        <div className="snap-y snap-mandatory h-screen w-screen">
        <div 
            id="home" 
            className="bg-red-200 snap-start w-screen h-screen"> 

            <ul>
                <li> <a href="#home">Home</a> </li>
                <li> <a href="#about">About</a> </li>
                <li> <a href="#projects">Projects</a> </li>
                <li> <a href="#contact">Contact</a> </li>
            </ul>

            <h1> Hi, i'm Jessica Song </h1>
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
