import React, { memo } from 'react';
import '../styles/courseCard.scss';

const CourseCard = memo((props: any) => {
    function deleteCourse(event: any) {
        props.courseCallback({ type: 'DELETE', body: props.course });
        event.preventDefault();
    }

    return (
        <div className='popper--popper'>
            <a href="http://" target="_blank" rel="noopener noreferrer">
                <div className='course-card'>
                    <div className='course-card--image'>
                        <img src={props.course.image} alt={props.course.title} className='shadowImage' />
                    </div>
                    <div className='course-card--main-content'>
                        <div className='course-title ellip'>{props.course.title}</div>
                        <div className='course-category ellip'>{props.course.category}</div>
                        <div className='star-rating dft'>
                            <span className='rating'>{props.course.rating.rate}</span>
                            <span className='review'>{props.course.rating.count} Reviews</span>
                        </div>
                        <div className='price-text dft'>
                            <span className='price-number'>₹{props.course.price}</span>
                            <span className='delete-card' onClick={deleteCourse}>
                                <button title='Delete Course' className='btn btn-danger btn-sm'>Delete</button>
                            </span>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
});

export default CourseCard;