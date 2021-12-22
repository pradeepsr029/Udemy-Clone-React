import React, { memo } from 'react';
import '../styles/courseClipLead.scss';

const CourseClipLead = memo((props: any) => {
    return (
        <div className='clp-lead'>
            <h1 className='clp-title'>{props?.course?.title}</h1>
            <p className='clp-dis'>{props?.course?.description}</p>
            <div className='clp-ratings-enrollment'>
                <div className='clp-lead__rating--row dft'>
                    <div className='rating-number'>{props?.course?.rating?.rate}*</div>
                    <div className='review-number'>({props?.course?.rating?.count})</div>
                </div>
            </div>
            <div className='clp-author-env'>
                <div>Category <span>{props?.course?.category}</span></div>
            </div>
        </div>
    );
});

export default CourseClipLead;