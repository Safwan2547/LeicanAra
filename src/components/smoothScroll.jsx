"use client";
import {ReactLenis,useLenis} from '@studio-freight/react-lenis';

function SmoothScroll({children}){
return <ReactLenis options={{lerp:0.1}} root>{children}</ReactLenis>
}
export default SmoothScroll;