import "../../src/App.css"
import React from "react";
import Woman from "../images/coding.png"
import {SlSocialLinkedin , SlSocialGithub, SlSocialFacebook} from "react-icons/sl"
import {TbWorld} from "react-icons/tb"

// import Bio from "../images/bio.png"

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
                    <img className="h-auto max-w-full py-1" src={Woman} alt="woman-computer" draggable="false" />
         
                        </div>

                <div className="md:w-4/8 lg:w-5/12 lg:ml-20">
                    <h1 id="full-name" className="max-h-screen-lg text-center justify-center items-center mt-10 md:text-8xl sm: text-4xl">JESSICA SONG.
                    </h1>

                {/* grey border  */}
                <div className="h-5 border-b-4 border-grey"></div>
            
                <p id="bio" className="sm:text-sm md:text-xl mt-5 text-center justify-center items-center"> A full stack web developer empowered by <b className="italic text-blue-500"> building </b> highly granular code   
                and <b className="italic text-blue-500"> delivering </b> hyperscaling solutions.
                </p>

                {/* resume link */}
                <div className="flex text-center justify-center items-center mt-8">
                <a 
                    className="text-blue-500 hover:text-white border border-blue-500 hover:bg-blue-500 
                    focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center dark:border-blue-500 dark:text-blue-500 
                    dark:hover:text-white dark:hover:bg-blue-500"
                    href="https://docs.google.com/document/d/1KtbFgZj_dZ6uu4P9ycTLqT_DTbnaB5PlaWuuW88YAuc/edit" 
                    aria-label="resume" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    id="resume-btn"> Check out my resume
                </a>
             </div>
    
                    </div>
                </div>
            </div>
        </div>

    {/* ABOUT ME */}

        <div 
            id="about" 
            className="snap-start h-screen"> 
  
        <h1 id="about-me" className="flex ml-12 mt-5 md:text-5xl sm:text-4xl h-5 border-b-4 border-grey "> 01. ABOUT ME  </h1>
   
        
        <p id="hello" className="flex mt-12 ml-12 text-blue-500 text-8xl italic h-32 flex-col align-items"> Hello! </p>


        {/* about me bio */}
        <p id="about-bio" className="flex text-center justify-center items-center"> My name is Jessica and i'm a self-taught developer residing in 
        Atlanta, Georgia. I enjoy creating full stack web applications with immersive digital experiences using Javascript(ES6) and other supporting 
        libraries and languages.
        </p>
        <p id="intro"className="flex text-center justify-center items-center"> My main focus for future projects is to expand my experience with 
        familiar technologies and new ones. Below are some of my aquired skills and the technologies i've been loving/working with!</p>

        
      
        {/* <div className="flex text-center justify-center items-center">
            <div className="md: px-9">
                <img className="  " src={Bio} alt="skills-tech" width="950" id="skills"/>
            </div>
        </div> */}
    
        
        </div>





{/* PROJECTS */}

        <div 
            id="projects" 
            className="snap-start w-screen h-screen"> 
           <h1 id="projects" className="flex ml-12 mt-5 md:text-5xl sm:text-4xl h-5 border-b-4 border-grey "> 03. PROJECTS  </h1>
   

            <div className="flex justify-center items-center mt-12 py-12">

                {/* JOURNEZ */}
                <div 
                    className="block max-w-sm p-6 bg-white border border-white-200 rounded-lg shadow hover:bg-gray-100 dark:bg-white-800 
                    dark:border-gray-700 dark:hover:bg-gray-700">
        
                <h5 id="journez" className="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-gray"> journEZ </h5>
                    <p id="journez-bio" className="text-center font-normal text-gray-700 dark:text-gray-400">journEZ is a a travel website that 
                    allows users to easily create trips and organize their trip itineraries and costs all from one platform. This was created 
                    via the MERN + graphQL stack.  </p>

                    <a 
                        className="float-right text-3xl mt-3"
                        href="https://github.com/jsong73/journez-travel" 
                        aria-label="journez-repo" 
                        target="_blank" 
                        rel="noopener noreferrer"><SlSocialGithub /> 
                    </a>

                    <a 
                        className="float-left text-3xl mt-3"
                        href="https://journez-travel.herokuapp.com/" 
                        aria-label="journez-site" 
                        target="_blank" 
                        rel="noopener noreferrer"><TbWorld /> 
                    </a>

                </div>
    {/* SOCIAL NETWORK */}






        </div>
    </div>














{/* CONTACT */}
        <div 
            id="contact" 
            className="snap-start w-screen h-screen"> 
                <h1 id="contact" className="items-center justify-center text-center ml-12 mt-5 md:text-5xl sm:text-4xl h-5 border-b-4 border- 
                grey "> 03. CONTACT  </h1>

                <h1 id="contact-header" className="py-12 items-center justify-center text-center mt-12 text-blue-500 text-5xl hover:italic"> 
                Want to get in touch?</h1>

        {/* email button */}
                <div className="items-center justify-center text-center">
                    <a 
                        className="text-blue-500 hover:text-white border border-blue-500 hover:bg-blue-500 
                        focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center dark:border-blue-500 dark:text-blue-500 
                        dark:hover:text-white dark:hover:bg-blue-500"
                        href="mailto:jessicajinsong@gmail.com" 
                        aria-label="email" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        id="email-btn"> Let's connect!
                    </a>
                </div>


                <div className="items-center justify-center text-center">
                    <p id="or" className="flex-shrink-0 py-12 md:text-3xl sm: text-2xl text-gray-300">
                       ...or keep up with me at any of my socials.
                    </p>
                </div>


        {/* linkedin icon */}
        <div id="linkedin-icon" className="text-5xl flex items-center justify-center mb-12 text-gray-500 hover:text-gray-900">
            <a 
                href="https://www.linkedin.com/in/jessica-jin-song/" 
                aria-label="linkedin" 
                target="_blank" 
                rel="noopener noreferrer"><SlSocialLinkedin/>
            </a>
        </div>
    
        {/* github icon */}
        <div id="github-icon" className="text-5xl flex items-center justify-center mb-12 text-gray-500 hover:text-gray-900">
            <a 
                href="https://github.com/jsong73" 
                aria-label="github" 
                target="_blank" 
                rel="noopener noreferrer"><SlSocialGithub /> 
            </a>
        </div>

        {/* facebook icon */}
        <div id="facebook-icon" className="text-5xl flex items-center justify-center text-gray-500 hover:text-gray-900">
            <a 
                href="https://www.facebook.com/profile.php?id=100008571545306" 
                aria-label="github" 
                target="_blank" 
                rel="noopener noreferrer"><SlSocialFacebook /> 
            </a>
        </div>

        </div>
        
 
</div>
    )}
    
export default PortfolioContainer;
