import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import About from '../containers/About';
import Login from '../containers/Login';
import NotFound from '../containers/NotFound';

class UnAuthDashboard extends Component {
    constructor(props: any) {
        super(props);

    }

    render() {
        return (
            <React.Fragment>
                <div className='dashboard-layout'>
                    <Header auth={true} />
                    <div className='main-browser'>
                        <Routes>
                            <Route path="/" element={<Login />} />
                            <Route path="/about" element={<About />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </div>
                    <Footer />
                </div>
            </React.Fragment>
        );
    }
}

export default UnAuthDashboard;