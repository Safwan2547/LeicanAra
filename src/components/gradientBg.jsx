// components/GradientBackground.js
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import Image from 'next/image';

const GradientBackground = ({ colors, bg, blobCount }) => {
    // Create an array with the length of blobCount to map over
    const blobs = Array.from({ length: blobCount }, (_, index) => ({
        colors: colors[index % colors.length],
        top: Math.random() * 100,
        left: Math.random() * 100,
        scale: [1, 1 + Math.random() * 0.5, 1],
        x: [0, (Math.random() - 0.5) * 1000,(Math.random() - 0.5) * 1000, 0],
        y: [0, (Math.random() - 0.5) * 1000,(Math.random() - 0.5) * 1000, 0],
        duration: 12 + Math.random() * 10,
        delay: Math.random() * 5,
    }));

    return (
        <div className="w-full  h-full absolute overflow-hidden" style={{ backgroundColor: bg }}>
            <div
                className="absolute top-0 left-0 w-full h-full"
                style={{
                    backgroundImage: `url('/grain-1.png')`,
                    backgroundRepeat: 'repeat',
                    backgroundSize: 'cover', // or 'contain', depending on your preference
                    mixBlendMode: 'plus-lighter', // This can be applied if needed
                }}
            />
            {blobs.map((blob, index) => (
                <motion.div
                    key={index}
                    className="absolute rounded-full filter blur-3xl  grainy-overlay opacity-70 w-[48rem] h-[48rem]"
                    style={{
                        background: `linear-gradient(135deg, ${blob.colors.join(', ')})`,
                        top: `${blob.top}%`,
                        left: `${blob.left}%`,
                    }}
                    animate={{
                        scale: blob.scale,
                        x: blob.x,
                        y: blob.y,
                    }}
                    transition={{
                        duration: blob.duration,
                        repeat: Infinity,
                        repeatType: 'mirror',
                        ease:'easeInOut',
                        delay: blob.delay,
                    }}
                />
            ))}
        </div>
    );
};

GradientBackground.propTypes = {
    colors: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
    bg: PropTypes.string,
    blobCount: PropTypes.number,
};

GradientBackground.defaultProps = {
    bg: '#000', // Default background color if not provided
    blobCount: 5, // Default number of blobs if not provided
};

export default GradientBackground;