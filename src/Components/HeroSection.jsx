import { Parallax } from 'react-parallax';

import pic1 from '../assets/pic1.jpg';

const HeroSection = () => (
    <Parallax blur={0} className='image' bgImage={pic1} strength={800}>
        <div className="content">
            <span className ="img-text">
                A Trip to AI.
            </span>
        </div>
    </Parallax>
);
export default HeroSection;