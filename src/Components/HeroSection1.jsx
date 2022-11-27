import { Parallax } from 'react-parallax';

import pic2 from '../assets/pic2.jpg';

const HeroSection1 = () => (
    <Parallax blur={0} className='image' bgImage={pic2} strength={800}>
        <div className="content">
            <span className="img-text">
                <h3>Will it Replace Humans ?</h3>
                Around 1,160,000 people are out of work in Canada alone. Although AI helps reduce business costs, it’s set to create some significant problems. As per The Guardian, customer service jobs (85%) will face the highest AI threat by 2021.  
            </span>
        </div>
    </Parallax>
);
export default HeroSection1;