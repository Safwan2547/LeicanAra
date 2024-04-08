"use client";
import {ReactLenis,useLenis} from '@studio-freight/react-lenis';

function SmoothScroll({children,horizontal}){
    
return <ReactLenis  options={{lerp:0.1,orientation:horizontal? "horizontal" :"vertical",gestureOrientation:horizontal? "both":"" }} root>{children}</ReactLenis>
}
export default SmoothScroll;