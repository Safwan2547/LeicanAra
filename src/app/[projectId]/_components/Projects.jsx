import React, { useRef,useState, useEffect } from 'react';


import LeicanAraPhoto from "../../Assets/Magazine.webp"
import SvavaPhoto from "../../Assets/svava placeholder.webp"
import leicanAraPortrait from "../../Assets/portrait uw.webp"

//LeicanAra Imports
import leicanAraSVG from "../../Assets/LeicanAra Project/VectorBraidedStar.svg"
import leicanAraThumbnail from "../../Assets/LeicanAra Project/LeicanAra Website thumbnail Backdrop.webp"
import leicanAraVideo1 from "../../Assets/LeicanAra Project/LeicanAra website Intro v2.mp4"
import leicanAraVideo2 from "../../Assets/LeicanAra Project/Logo Construction.mp4"
import leicanAraVideo3 from "../../Assets/LeicanAra Project/Minimal Initial Reveal widescreen.mp4"
import leicanAraImage1 from "../../Assets/LeicanAra Project/Artboard4.webp"
import leicanAraImage2 from "../../Assets/LeicanAra Project/Artboard3.webp"
import leicanAraImage3 from "../../Assets/LeicanAra Project/Asset 2.webp"
import leicanAraImage4 from "../../Assets/LeicanAra Project/COLOR leicanAra 3.webp"
import leicanAraImage5 from "../../Assets/LeicanAra Project/LeicanAra Narrow Board.webp"
import leicanAraImage6 from "../../Assets/LeicanAra Project/TYPOGRAPHY.webp"

//Starfall Imports
import starFallLogo from "../../Assets/StarFall logo.svg"
import starFallThumbnail from "../../Assets/Starfall Backgrop thumbnail.webp"
import starFallVideo from "../../Assets/StarFall insta reel blue.mp4"
import starFallPhoto from "../../Assets/Container-Mockup.webp"
import starFallImage1 from "../../Assets/Ecostellar v4.webp"
import starFallImage2 from "../../Assets/STARFALL MOBILE WEBSITE MOCKUP v1.webp"
import starFallVideo2 from "../../Assets/Laptop Mockup 1080 v2.mp4"
import starFallVideo3 from "../../Assets/StarFall Colors 6.mp4" 
import starFallImage3 from "../../Assets/Mockup 3.webp"
import starFallImage4 from "../../Assets/StarFall Thumbnail-4.webp"
import starFallImage5 from "../../Assets/Starfall Robots Lab Mockup 2.webp"
import starFallIntroVideo from "../../Assets/StarFall Introducing website2.mp4"
import starFallPrologue from "../../Assets/StarFall Founded Graphic v2.mp4"
import starFallVideo4 from "../../Assets/Logo Construct v1.mp4"
import starFallImage6 from "../../Assets/StarFall Logo Showcase v4.webp"
import starFallImage7 from "../../Assets/StarFall Rocket.webp"
 



const projects = [
    {
      key:"starfall",
      title: 'STARFALL',
      mainHeader: 'Humanity\'s future, Revolutionized.',
      secondaryHeader:"BEYOND THE STARS",
      
      type: 'image',
      thumbnail3d:starFallLogo,
      thumbnail3dW:"w-40",
      thumbnail: starFallThumbnail,
      
      thumbnailAlt:"image description",


      projectLink: '/ProjectPage',
      textColor:"text-LunarDawn",
  
      services:"|  Branding  ||  Vision  ||  Art Direction || Web Design |",

      //Mobile Content
      mainHeaderMobile:"Beyond the Stars",
      thumbnailPort:starFallVideo,
      textColorMobile:"text-[#efece3]",
      typeMobile:"video",


      //Project Page Content
      thumbnail2:starFallPhoto,

      prologueHead:"The year is 2051: ",
      prologueDescription:"Starfall is a revolutionary space mining company that aims to get resources from celestial bodies back to Earth. With projects like MoonForge and EcoStellar, it sets a benchmark for responsible resource extraction in the space industry. ",
  
      ambitionHead:"Aim for the Stars",
      ambitionDescription:"StarFall was crafted with the vision of setting a precedent in the space industry. \
      To achieve this goal, we needed to design StarFall in a manner that not only built upon the foundations \
      laid by current space industry leaders but also inspired future generations to continue the \
      mission.",
      
      challengeHead:"To create a revolution",
      challengeDescription:"Crafting an identity for StarFall posed a unique and formidable challenge — to meticulously reflect its audacious vision and resonate with a diverse audience, spanning investors to future astronauts.",
      
      approachHead:"The approach of brilliance",
      approachDescription:"Deeply understanding StarFall's ethos laid the critical groundwork. The design team, drawing inspiration from celestial phenomena and industry giants, embraced a deliberate and thoughtful minimalist approach, resulting in the birth of a unique brand identity named The Triangulum.",
      
      identityHead:"The Triangulum ",
      identityDescription:"At the heart of StarFall's brand identity lies a concept we term \"Triangulum\". Which Contains 3 base ideas: ",
      epilogueHead:"The Legacy ",



      image1:starFallImage1,
      image2:starFallImage2,
      image3:starFallImage3,
      
      introVideo:starFallIntroVideo,

      prologueLayout:1,
      prologueContent1:starFallPrologue,
      prologueContent2:starFallIntroVideo,

      ambitionContent1:starFallVideo2,
      ambitionContent2:starFallImage1,

      challengeLayout:2,
      challengeContent1:starFallVideo,
      challengeContent2:starFallImage7,
      
      approachLayout:3,
      approachContent1:starFallImage2,
      approachContent2:starFallImage6,
      approachContent3:starFallVideo,

      identityLayout:1,
      identityContent1:starFallVideo4,
      identityContent2:starFallVideo3,
      
      
      epilogueContent1:starFallImage3,
      epilogueContent2:starFallImage4,



      
      video1Alt:"video description",

      video2:starFallVideo,
      video3:starFallVideo3,
      video4:starFallVideo4,


      finalWords:"The End."


    },
    {
      key:"leicanara",
      title: 'LEICANARA',
      mainHeader: 'Stories that Bind us.',
      type: 'image',
      thumbnail: leicanAraThumbnail,
      thumbnail2: LeicanAraPhoto,
      thumbnail3d:leicanAraSVG,
      thumbnail3dW:"w-2/3",

      services:"",
      
      projectLink: 'https://www.leicanAra.com',
      textColor:"text-[#21323e]",

      
    

      //mobile Content
      mainHeaderMobile:"Stories that bind us",
      textColorMobile:"text-[#efece3]", 
      typeMobile:"image",
      thumbnailPort:leicanAraPortrait,

      //Project Page Content
      prologueHead:"StoryTellers for the visionaries",
      prologueDescription:"LeicanAra was born out of the belief that shared experiences shape human connections. We realized the power of compelling narratives and visuals and how they bridge businesses and audiences.",
      
      ambitionHead:"The Journey",
      ambitionDescription: 'Ambition Description',
    
      challengeHead: 'Creating unbreakable strings ',
      challengeDescription: 'Challenge Description',
    
      approachHead: 'Approach Headline',
      approachDescription: 'Approach Description',
    
      identityHead: 'Identity Headline',
      identityDescription: 'Identity Description',
    
      epilogueHead: 'Epilogue Headline',
    
      // Images or videos for project content
      
      introVideo: leicanAraVideo1,
      prologueContent1: leicanAraVideo3,
      prologueContent2: leicanAraVideo1,
      ambitionContent1: leicanAraImage1,
      ambitionContent2: "",
      challengeContent1: leicanAraImage5,
      challengeContent2: "",
      approachContent1: leicanAraVideo2,
      approachContent2: leicanAraImage3,
      identityLayout: 1,
      identityContent1: leicanAraImage4,
      identityContent2: leicanAraImage6,
      epilogueContent1: "",
      epilogueContent2: "",
    
      // Video descriptions if needed
      video1Alt: "Video 1 Description",
      
    
      // Final words or conclusion
      finalWords: "Final Words"
    

    },
    {
      key:"svava",
      title:'SVÄVA',
      mainHeader:'Skincare forever changed',
      type:'image',
      thumbnail:SvavaPhoto,
      thumbnailPort:starFallPhoto,
      thumbnail3d:leicanAraSVG,
      thumbnail3dW:"w-2/3",
      projectLink: 'https://www.starfallstudios.com/',
      textColor:"text-[#21323e]",
      typeMobile:"image"

    }
    // Add more projects here

    
  ];

  const projectTemplate = {
    key: "projectKey",
    title: 'Project Title',
    mainHeader: 'Main Header',
    type: 'image', // or 'video' if applicable
  
    // Main thumbnail
    thumbnail: "",
    thumbnailAlt: "Thumbnail Description",
    thumbnail3d:leicanAraSVG,
      thumbnail3dW:"w-2/3",
  
    // Link to the project page
    projectLink: '/project-page',
  
    // Text color classes
    textColor: "text-color-class",
    textColorMobile: "text-color-class-mobile",
  
    // Services or other details
    services: "| Service 1 || Service 2 || Service 3 |",
  
    // Mobile specific content
    mainHeaderMobile: 'Main Header Mobile',
    thumbnailPort: "", // or another image if type is 'image'
    typeMobile: 'video', // or 'image' if applicable
  
    // Project page content
    
  
    prologueHead: 'Prologue Headline',
    prologueDescription: 'Prologue Description',
  
    ambitionHead: 'Ambition Headline',
    ambitionDescription: 'Ambition Description',
  
    challengeHead: 'Challenge Headline',
    challengeDescription: 'Challenge Description',
  
    approachHead: 'Approach Headline',
    approachDescription: 'Approach Description',
  
    identityHead: 'Identity Headline',
    identityDescription: 'Identity Description',
  
    epilogueHead: 'Epilogue Headline',
  
    // Images or videos for project content
  
    introVideo: leicanAraVideo1,
    prologueContent1: "",
    prologueContent2: "",
    ambitionContent1: "",
    ambitionContent2: "",
    challengeContent1: "",
    challengeContent2: "",
    approachContent1: "",
    approachContent2: "",
    identityLayout: 1,
    identityContent1: "",
    identityContent2: "",
    epilogueContent1: "",
    epilogueContent2: "",
  
    // Video descriptions if needed
    video1Alt: "Video 1 Description",
    
    // Final words or conclusion
    finalWords: "Final Words"
  };
  
  export default projects;
  