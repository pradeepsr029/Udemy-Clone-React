import React, { memo } from 'react';
import { VIDEO_NEUTRAL_LIST } from '../shared/constants/appConstant';
import '../styles/courseLandingCard.scss';

const CourseLandingCard = memo((props: any) => {
    function neutralListRender(data: any, key: number) {
        return (
            <li key={key}>
                <div className='dft neutral-list'>
                    <div className='video-icon _u-flex0 dft'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M9 7v8l7-4zm12-4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z" /></svg>
                    </div>
                    <div className='video-content-txt _u-flex1 ellip'>{data.name}</div>
                </div>
            </li>
        )
    }

    return (
        <div className='sidebar-container-group'>
            <div className='intro-asset--wrapper'>
                <div className='intro-asset--asset'>
                    <img src={props?.course?.image} alt="Course image" className='shadowImage' />
                </div>
                <div className='purchase-section'>
                    <div className='purchase-section--main'>
                        <div className='price-section'>₹{props?.course?.price}</div>
                        <div className='buy-card-section'>
                            <button type='button' className='btn btn-primary'>Go to cart</button>
                            <button type='button' className='btn-buy-now btn btn-outline-secondary'>Buy now</button>
                        </div>
                        <div className='money-back-guarantee'>
                            <span>30-Day Money-Back Guarantee</span>
                        </div>
                        <div className='incentives--incentives'>
                            <h4 className='incentives--header'>This course includes:</h4>
                            <ul>
                                {
                                    VIDEO_NEUTRAL_LIST.map((list, index) => {
                                        return neutralListRender(list, index)
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default CourseLandingCard;