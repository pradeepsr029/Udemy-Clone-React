import React, { memo } from 'react';
import '../styles/carousel.scss';

const Carousel = memo(() => {
    return (
        <div className='carousel-container'>
            <img src="https://img-c.udemycdn.com/notices/web_banner/slide_1_image_udlite/db24b94e-d190-4d5a-b1dd-958f702cc8f5.jpg" alt="Banner" className='shadowImage' />
        </div>
    );
});

export default Carousel;