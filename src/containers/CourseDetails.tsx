import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import CourseClipLead from '../components/CourseClipLead';
import CourseLandingCard from '../components/CourseLandingCard';
import { VIDEO_FULL_INFO } from '../shared/constants/appConstant';
import '../styles/courseDetails.scss';

class CourseDetails extends Component {
    constructor(props: any) {
        super(props);
        this.state = {
            details: null,
            isApiCallInProgress: true
        }
    }

    componentWillMount() {
        // const { id } = useParams();
        const breakUrl = window.location.pathname.split("/");
        const id = breakUrl[breakUrl.length - 1];
        this.getCourseFullDetails(id)
    }

    private getCourseFullDetails(id: any) {
        fetch(`https://fakestoreapi.com/products/${id}`).then(res => res.json()).then((result) => {
            this.setState({ details: result, isApiCallInProgress: false });
            console.log(this.state)
        }, (error) => {
            this.setState({ isApiCallInProgress: false })
        })
    }

    render() {
        const { details, isApiCallInProgress }: any = this.state;

        function videoFullDescription(data: any, key: number) {
            return (<li key={key} className='dft list-view-info'>
                <div className='_u-flex0'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" /></svg>
                </div>
                <div className='_u-flex1 full-v--info'>{data.name}</div>
            </li>)
        }

        function courseLoading() {
            return (
                <div className='course-module-loading'>Please Wait, Loading...</div>
            )
        }

        return (
            <React.Fragment>
                <div className='top-container'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-9'>
                                <div className='clp-component-render'>
                                    {isApiCallInProgress ? courseLoading() : <CourseClipLead course={details} />}
                                </div>
                            </div>
                            <div className='col-3 float-course-card'>
                                <div className='course-landing-rendered'>
                                    <CourseLandingCard course={details} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container about-course-full'>
                    <div className='row'>
                        {/*Rendering List 1 */}
                        <div className='col-9'>
                            <div className='what-you-will-learn'>
                                <h2>What you'll learn</h2>
                                <ul>
                                    {
                                        VIDEO_FULL_INFO.map((list, index) => {
                                            return videoFullDescription(list, index);
                                        })
                                    }
                                </ul>
                            </div>
                        </div>

                        {/*Rendering List 2 */}
                        <div className='col-9'>
                            <div className='what-you-will-learn'>
                                <h2>What you'll learn</h2>
                                <ul>
                                    {
                                        VIDEO_FULL_INFO.map((list, index) => {
                                            return videoFullDescription(list, index);
                                        })
                                    }
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default CourseDetails;