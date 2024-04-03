import { useEffect } from "react";
import { animate,timeline,stagger } from "motion";
import img1 from "../Assets/Laptop Mockup 1080 v2.mp4"
import img2 from "../Assets/LeicanAra Project/Artboard5.webp"
import img3 from "../Assets/STARFALL MOBILE WEBSITE MOCKUP v1.webp"
import vid1 from "../Assets/StarFall insta reel blue.mp4"

function LandingExhibit(){

    const exhibitContent = [vid1,img1,img3]

    const exhibitAnimation = [
        ['.landingExhibit', { opacity: 1, transform: "scale(1)" }, { delay:0.3, easing: "ease-in-out" }],
        ]
    
    useEffect(() => {

        timeline(exhibitAnimation, {duration:1,delay:2},{
            defaultOptions: {easing:"ease-in-out" },
          })
    })

    return (
        <div data-speed="4" className="landingExhibit mouseParallax opacity-0  w-[95vw] h-[100vh]  absolute">
                {/* <div data-speed="3"  className="   w-full h-full relative flex border-black "> */}
                <div data-speed="5" className="  exhibit-1  w-36 left-90 bottom-[20vh] absolute">
                {exhibitContent[0] && (
            exhibitContent[0].endsWith('.mp4') ? (
              <video alt={exhibitContent[0]} autoPlay loop muted className={``}>
                <source src={exhibitContent[0]} type="video/mp4" />
              </video>
            ) : (
              <img className={``} src={exhibitContent[0]} alt={exhibitContent[0]} />
            )
          )}
                </div>
                <div data-speed="3.5"  className="w-64  exhibit-2  right-10 bottom-[50vh] absolute ">
                {exhibitContent[1] && (
            exhibitContent[1].endsWith('.mp4') ? (
              <video alt={exhibitContent[1]} autoPlay loop muted className={``}>
                <source src={exhibitContent[1]} type="video/mp4" />
              </video>
            ) : (
              <img className={``} src={exhibitContent[1]} alt={exhibitContent[1]} />
            )
          )}
                </div>
                <div data-speed="2" className="w-48   exhibit-3  right-[50vw] bottom-[70vh] absolute ">
                {exhibitContent[2] && (
            exhibitContent[2].endsWith('.mp4') ? (
              <video alt={exhibitContent[2]} autoPlay loop muted className={``}>
                <source src={exhibitContent[2]} type="video/mp4" />
              </video>
            ) : (
              <img className={``} src={exhibitContent[2]} alt={exhibitContent[2]} />
            )
          )}
                </div>
                

                </div>
               
        // </div>
    )






}



export default LandingExhibit;