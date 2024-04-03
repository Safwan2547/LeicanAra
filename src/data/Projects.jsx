import React, { useRef,useState, useEffect } from 'react';






const projects = [
    {
      key:"starfall",
      title: 'STARFALL',
      mainHeader: 'Humanity\'s future, Revolutionized.',
      secondaryHeader:"BEYOND THE STARS",
      
      type: 'image',
      thumbnail3d:"/StarFall logo.svg",
      thumbnail3dW:"w-40",
      thumbnail: "/Starfall Backgrop thumbnail.webp",
      
      thumbnailAlt:"image description",


      projectLink: '/ProjectPage',
      textColor:"text-LunarDawn",
  
      services:"|  Branding  ||  Vision  ||  Art Direction || Web Design |",

      //Mobile Content
      mainHeaderMobile:"Beyond the Stars",
      thumbnailPort:"/StarFall insta reel blue.mp4",
      textColorMobile:"text-[#efece3]",
      typeMobile:"video",


      //Project Page Content
      thumbnail2:"/Container-Mockup.webp",

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



      image1:"/Container-Mockup.webp",
      image2:"/STARFALL MOBILE WEBSITE MOCKUP v1.webp",
      image3:"/Mockup 3.webp",
      
      introVideo:"/StarFall Introducing website2.mp4",

      prologueLayout:1,
      prologueContent1:"/StarFall Founded Graphic v2.mp4",
      prologueContent2:"/StarFall Introducing website2.mp4",

      ambitionContent1:"/Laptop Mockup 1080 v2.mp4",
      ambitionContent2:"/Ecostellar v4.webp",

      challengeLayout:2,
      challengeContent1:"/StarFall insta reel blue.mp4",
      challengeContent2:"/StarFall Rocket.webp",
      
      approachLayout:3,
      approachContent1:"/STARFALL MOBILE WEBSITE MOCKUP v1.webp",
      approachContent2:"/StarFall Logo Showcase v4.webp",
      approachContent3:"/StarFall insta reel blue.mp4",

      identityLayout:1,
      identityContent1: "/Logo Construct v1.mp4",
      identityContent2:"/StarFall Colors 6.mp4" ,
      
      
      epilogueContent1:"/Mockup 3.webp",
      epilogueContent2: "/StarFall Thumbnail-4.png",



      
      video1Alt:"video description",

      video2:"/StarFall insta reel blue.mp4",
      video3:"/StarFall Colors 6.mp4" ,
      video4:"/Logo Construct v1.mp4",


      finalWords:"The End."


    },
    {
      key:"leicanara",
      title: 'LEICANARA',
      mainHeader: 'Stories that Bind us.',
      type: 'image',
      thumbnail: "/LeicanAra Project/LeicanAra Website thumbnail Backdrop.webp",
      thumbnail2: "/Magazine.webp",
      thumbnail3d:"/LeicanAra Project/VectorBraidedStar.svg",
      thumbnail3dW:"w-2/3",

      services:"",
      
      projectLink: 'https://www.leicanAra.com',
      textColor:"text-[#21323e]",

      
    

      //mobile Content
      mainHeaderMobile:"Stories that bind us",
      textColorMobile:"text-[#efece3]", 
      typeMobile:"image",
      thumbnailPort: "/portrait uw.webp",

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
      
      introVideo: "/LeicanAra Project/LeicanAra website Intro v2.mp4",
      prologueContent1: "/LeicanAra Project/Minimal Initial Reveal widescreen.mp4",
      prologueContent2: "/LeicanAra Project/LeicanAra website Intro v2.mp4",
      ambitionContent1: "/LeicanAra Project/Artboard4.webp",
      ambitionContent2: "",
      challengeContent1: "/LeicanAra Project/LeicanAra Narrow Board.webp",
      challengeContent2: "",
      approachContent1: "",
      approachContent2: "leicnAraImage3",
      identityLayout: 1,
      identityContent1: "",
      identityContent2: "",
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
      thumbnail:"/svava placeholder.webp",
      thumbnailPort:"/Container-Mockup.webp",
      thumbnail3d:"/LeicanAra Project/VectorBraidedStar.svg",
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
    thumbnail3d:"",
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
  
    introVideo: "",
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
  