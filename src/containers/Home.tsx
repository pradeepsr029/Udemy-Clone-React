import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ICallbackEvent, ICourse } from '../model';
import axios, { AxiosResponse } from 'axios';
import Carousel from '../components/Carousel';
import CourseCard from '../components/CourseCard';
import '../styles/home.scss';
import { connect } from 'react-redux';

class Home extends Component<any, { courses: ICourse[], isApiCallInProgress: boolean }> {

    constructor(props: any) {
        super(props);
        this.state = {
            courses: [],
            isApiCallInProgress: true,
        }
    }

    componentWillMount() {
        this.getCoursesList();
        // console.log(this.props, "===prod")
    }

    /**
     * @function getCoursesList
     * @summary Get Courses listing from http
     */
    private getCoursesList() {
        axios.get('https://fakestoreapi.com/products').then((response: AxiosResponse) => {
            this.setState({ courses: response.data, isApiCallInProgress: false })
            //this.props.dispatch({type:"Home", this.state.course})
        }).catch(err => {
            this.setState({ isApiCallInProgress: false })
        });
    }

    //Course component all callback events
    private courseComponentCallbackEvent(event: ICallbackEvent, index: number) {
        switch (event.type) {
            case 'DELETE':
                this.deleteCourse(index);
                break;
            default:
                throw new Error(`Unknown Type of event trigger ${event.type}`);
        }
    }

    //Delete Course base on index
    private deleteCourse(deleteIndex: number) {
        const courses = this.state.courses;
        courses.splice(deleteIndex, 1);
        this.setState({ courses: courses });
    }

    //Return Loader text
    private dataLoading() {
        return (<div className='course-loading'>
            Loading...
        </div>)
    }

    /**
     * @function courseComponentRendered
     * @param courses 
     * @returns {Render All course card}
     */
    private courseComponentRendered(courses: ICourse[]) {
        return courses.map((course: ICourse, index: number) => {
            return <div key={course.id} className='col-3'>
                <Link to={`course/${course.id}`} title={course.title} rel="noopener noreferrer">
                    <CourseCard courseCallback={(body: any) => this.courseComponentCallbackEvent(body, index)} course={course} />
                </Link>
            </div>
        })
    }

    render() {
        const { courses, isApiCallInProgress } = this.state;
        return (
            <React.Fragment>
                <div className='container main-container'>
                    <div className='row'>
                        <Carousel />
                        <div className='headshot-banner outer-box-heading'>
                            <h2 className='lite-heading-xl'>A broad selection of courses</h2>
                            <p className='lite-text-md'>Choose from 183,000 online video courses with new additions published every month</p>
                        </div>
                        <div className='skills-hub-unit'>
                            <div className='headshot-banner'>
                                <h2 className='lite-heading-xl'>Expand your career opportunities with Python</h2>
                                <p className='lite-text-md'>Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to both beginners and advanced developers alike.</p>
                            </div>
                            <div className='row course-unit-container'>
                                {isApiCallInProgress ? this.dataLoading() : this.courseComponentRendered(courses)}
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state: any) => ({
    homeState: state.homeState
});

export default connect(mapStateToProps)(Home);
// export default Home;