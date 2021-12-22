import React, { Component } from 'react';
import { Link, useNavigate } from "react-router-dom";
import '../styles/login.scss';

class Login extends Component {
    constructor(props: any) {
        super(props);
    }

    login() {
        // const navigate = useNavigate()

    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='loginbox-v4__content'>
                        <div className='modal-content-wrapper'>
                            <div className="form-group">
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <Link to="/home">
                                <button type="submit" onClick={() => this.login()} className="btn btn-primary">Submit</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;