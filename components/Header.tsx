import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 flex items-center justify-between max-w-7xl mx-auto z-20">
      <div className="flex flex-row items-center">
        {/* Social icons */}

        <SocialIcon
          url="https://youtube.com"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://youtube.com"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://youtube.com"
          fgColor="gray"
          bgColor="transparent" 
        />   
      </div> 
      <div className="flex flex-row items-center text-gray-300 cursor-pointer">  
        <SocialIcon  
          className="cursor-pointer" 
          network="email"    
          fgColor="gray"  
          bgColor="transparent" 
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-500">Get In Touch</p>
      </div> 
    </header> 
  );
}
