import { Parallax } from 'react-parallax';

import pic3 from '../assets/pic3.jpg';

const HeroSection2 = () => (
    <Parallax blur={0} className='image' bgImage={pic3} strength={800}>
        <div className="content">
            <span className ="img-text">
                Will AI Rule The World?????????.
            </span>
        </div>
    </Parallax>
);
export default HeroSection2;