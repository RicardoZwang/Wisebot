import { TypeAnimation } from 'react-type-animation';
import { Link } from "react-router-dom"
import { useState } from 'react';

const Homepage = () => {
    
    const [typingStatus, setTypingStatus] = useState("human1")
    return (
        <>
            <div className="relative flex flex-col items-center md:flex-row md:items-center md:gap-12 h-full ">
                <img src="/orbital.png" alt="" className="absolute bottom-0 left-0 opacity-5 animate-rotateOrbital z-[-1]" />
                
                <div className="flex-1 flex flex-col items-center justify-center gap-4 text-center">
                    <h1 className="text-[64px] bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent md:text-[64px] sm:text-[48px]">
                        Wisebot Ai
                    </h1>
                    <h2 className="font-medium">Supercharge your creativity and productivity</h2>
                    <h3 className="font-light max-w-[70%] md:max-w-full">
                        Any description here
                    </h3>
                    <Link to="/dashboard" className="px-6 py-3 mt-5 bg-blue-500 text-white rounded-full text-sm hover:bg-white hover:text-blue-500">
                        Get Started
                    </Link>
                </div>

                <div className="flex-1 flex items-center justify-center h-full">
                    <div className="flex items-center justify-center bg-[#140e2d] rounded-[50px] w-[80%] h-[50%] relative">
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-[50px]">
                            <div className="bg-[url('/bg.png')] opacity-20 w-[200%] h-full bg-auto bg-[100%] animate-slideBg"></div>
                        </div>
                        <img src="/bot.png" alt="" className="w-full h-full object-contain animate-botAnimate" />
                        
                        <div className="absolute bottom-[-30px] right-[-50px] flex items-center gap-2 p-5 bg-[#2c2937] rounded-[10px] lg:right-0">
                            <img src={typingStatus==="human1"
                                ?"/human1.jpeg"
                                :typingStatus==="human2" 
                                ? "/human2.jpeg" 
                                :"/bot.png"
                            } 
                            alt='' 
                            className="w-8 h-8 rounded-full object-cover"
                            />
                            <TypeAnimation
                                sequence={[
                                    'Human: We produce food for Mice',
                                    1000, () => {
                                        setTypingStatus("bot");
                                    },
                                    'Bot: We produce food for Hamsters',
                                    1000, () => {
                                        setTypingStatus("human2");
                                    },
                                    'Human: We produce food for Guinea Pigs',
                                    1000, () => {
                                        setTypingStatus("bot");
                                    },
                                    'Bot: We produce food for Chinchillas',
                                    1000, () => {
                                        setTypingStatus("human1");
                                    }
                                ]}
                                wrapper="span"
                                repeat={Infinity}
                                cursor={true}
                                omitDeletionAnimation={true}
                                className="text-sm md:text-base"
                            />
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 mb-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3 text-center">
                    <img src="/logo.png" alt="" className="w-4 h-4" />
                    <div className="flex gap-2 text-gray-500 text-xs">
                        <Link to="/">Terms of Service</Link>
                        <span>|</span>
                        <Link to="/">Privacy Policy</Link>
                    </div>
                </div>
          
            </div>
        </>
    );
}
export default Homepage;