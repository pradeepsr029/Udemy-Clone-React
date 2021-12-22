import React, { Component } from 'react';
import '../styles/about.scss';

class About extends Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className='about-main'>
                <div className='container'>
                    <div className='row'>
                        {
                            ['1', '2', '3', '4'].map(list => {
                                return (<div key={list} className='terms'>
                                    <h2>Terms of Use</h2>
                                    <p>These Terms of Use ("Terms") were last updated on May 20, 2021.</p>
                                    <p>Udemy’s mission is to improve lives through learning. We enable anyone anywhere to create and share educational content (instructors) and to access that educational content to learn (students). We consider our marketplace model the best way to offer valuable educational content to our users. We need rules to keep our platform and services safe for you, us, and our student and instructor community. These Terms apply to all your activities on the Udemy website, the Udemy mobile applications, our TV applications, our APIs, and other related services (“Services”).</p>
                                    <p>If you publish a course on the Udemy platform, you must also agree to the Instructor Terms. We also provide details regarding our processing of personal data of our students and instructors in our Privacy Policy. If you are using Udemy as part of your employer’s Udemy Business learning and development program, you can consult our Udemy Business Privacy Statement.</p>
                                    <p>If you live in the United States or Canada, by agreeing to these Terms, you agree to resolve disputes with Udemy through binding arbitration (with very limited exceptions, not in court), and you waive certain rights to participate in class actions, as detailed in the Dispute Resolution section.</p>
                                </div>)
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}


export default About;