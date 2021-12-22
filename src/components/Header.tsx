import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { APP_HEADER_NAV } from '../shared/constants/appConstant';
import '../styles/header.scss';

const Header = memo((props: any) => {

    const authButtonRendered = () => {
        return (<React.Fragment>
            <div className='btn-menu login-btn'>
                <Link to="/auth" className='btn btn-outline-dark' rel="noopener noreferrer">
                    Log in
                </Link>
            </div>
            <div className='btn-menu sign-btn'>
                <Link to="/auth" className='btn btn-dark' rel="noopener noreferrer">
                    Sign up
                </Link>
            </div>
        </React.Fragment>)
    }

    return (
        <div className={`component--header ${props.auth ? 'auth-header' : ''}`}>
            <header className='dft'>
                <div className='_u-flex0 app-logo'>
                    <Link to="/home" title='Udemy Home' rel="noopener noreferrer">
                        <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" className='shadowImage' />
                    </Link>
                </div>
                <div className='search-form-autocompleter _u-flex1'>
                    <input type="text" placeholder="Search for anything" />
                </div>
                <div className='_u-flex0 menu-nav-list'>
                    {
                        APP_HEADER_NAV.map((nav, index) => {
                            return (<div key={index} className='btn-menu'>
                                <Link to="/auth/about" rel="noopener noreferrer">{nav.name}</Link>
                            </div>)
                        })
                    }

                    {props.auth ? null : authButtonRendered()}
                </div>
            </header>
        </div>
    );
});

export default Header;