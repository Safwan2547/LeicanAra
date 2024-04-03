import { useEffect } from 'react';
import { animate, timeline } from 'motion';
// import frameImg from '../Assets/Layer 0.png';
// import frameImg2 from '../Assets/Layer 4.png';
// import backdrop from '../Assets/backgrop.png';

function Frame() {
  const exhibitAnimation = [
    ['.landingExhibit', { opacity: 1,  }, { delay: 0.3, easing: 'ease-in-out' }],
  ];

  useEffect(() => {
    timeline(exhibitAnimation, { duration: 1, delay: 2 }, { defaultOptions: { easing: 'ease-in-out' } });
  }, []);

  return (
    <div
      data-speed="4"
      className="landingExhibit frame overflow-hidden opacity-0  w-[100vw] h-[100vh] absolute  border-2 border-black flex justify-center items-center"
    >
      {/* Add rectangular frame */}
      {/* <div className=" -translate-x-1/2 -translate-y-1/2 top-1/2  flex items-center overflow-hidden justify-center left-1/2 absolute scale-125 w-4/12 h-1/3"> */}
      <div className='object-cover flex justify-center  items-center w-full '  > 
      {/* <img data-speed="0.5"  className='w-screen h-screen z-0 mouseParallax -translate-x-1/2  top-1/2    ' src={backdrop} alt="" /> */}

        {/* <img data-speed="0.8"  className='w-screen h-screen mouseParallax z-1  absolute top-48 translate-y-1/2   ' src={frameImg} alt="" />
        <img data-speed="0.6"  className='w-3/4 h-screen opacity-35 mouseParallax z-2  absolute top-24    ' src={frameImg2} alt="" /> */}



      {/* </div> */}</div>
    </div>
  );
}

export default Frame;
