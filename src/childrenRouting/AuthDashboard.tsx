import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import CourseDetails from '../containers/CourseDetails';
import Home from '../containers/Home';
import NotFound from '../containers/NotFound';

class AuthDashboard extends Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <div className='dashboard-layout'>
                    <Header />

                    <div className='main-browser'>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/course/:id" element={<CourseDetails />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </div>
                    <Footer />
                </div>
            </React.Fragment>
        );
    }
}

export default AuthDashboard;