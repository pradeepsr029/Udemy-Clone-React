import React, { Component } from 'react';

class About extends Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className='about-main'>
                <div className='container'>
                    <div className='row' style={{height:"60vh", paddingTop:"5rem"}}>
                        <h2>Changing learning for the better</h2>
                        <p>Whether you want to learn or to share what you know, you've come to the right place. As a global destination for online learning, we connect people through knowledge.</p>
                        <h2>Udemy fit us like a glove. Their team curates fresh, up-to-date courses from their marketplace and makes them available to customers.</h2>
                        <p>At Udemy, we’re all learners and instructors. We live out our values every day to create a culture that is diverse, inclusive, and committed to helping employees thrive.</p>
                    </div>
                </div>
            </div>
        );
    }
}


export default About;