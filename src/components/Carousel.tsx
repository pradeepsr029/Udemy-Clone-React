import React, { memo } from 'react';
import '../styles/carousel.scss';

const Carousel = memo(() => {
    return (
        <div className='carousel-container'>
            <img src="https://img-c.udemycdn.com/notices/web_banner/slide_1_image_udlite/c5f2c50e-c110-4dd6-b9a0-82e51b5b3232.jpg" alt="Banner" className='shadowImage' />
        </div>
    );
});

export default Carousel;