import React, { Component } from 'react';
import Carousel from '../components/Carousel';
import CourseCard from '../components/CourseCard';
import Header from '../components/Header';
import '../styles/home.scss';

class Home extends Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            courses: [],
            isApiCallInProgress: true,
        }
    }

    componentWillMount() {
        this.getCoursesList();
    }

    /**
     * @function getCoursesList
     * @summary Get Courses listing from http
     */
    private getCoursesList() {
        fetch("https://fakestoreapi.com/products").then(res => res.json()).then((result) => {
            this.setState({ courses: result, isApiCallInProgress: false })
        }, (error) => {
            this.setState({ isApiCallInProgress: false })
        })
    }

    private courseComponentCallbackEvent(event: any, index: number) {
        switch (event.type) {
            case 'DELETE':
                this.deleteCourse(index);
                break;
            default:
                throw new Error(`Unknown Type of event trigger ${event.type}`);
        }
    }

    private deleteCourse(deleteIndex: number) {
        const courses = this.state.courses;
        courses.splice(deleteIndex, 1);
        this.setState({ course: courses });
    }

    private dataLoading() {
        return (<div className='course-loading'>
            Loading...
        </div>)
    }

    private courseComponentRendered(courses: any) {
        return courses.map((course: any, index: number) => {
            return <div key={course.id} className='col-3'>
                <CourseCard courseCallback={(body: any) => this.courseComponentCallbackEvent(body, index)} course={course} />
            </div>
        })
    }

    render() {
        const { courses, isApiCallInProgress }: any = this.state;
        return (
            <React.Fragment>
                <Header />
                <div className='container main-container'>
                    <div className='row'>
                        <Carousel />
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

export default Home;