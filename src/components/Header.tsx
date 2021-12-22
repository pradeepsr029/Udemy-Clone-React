import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { APP_HEADER_NAV } from '../shared/constants/appConstant';
import '../styles/header.scss';

const Header = memo((props: any) => {

    const authButtonRendered = () => {
        return (<React.Fragment>
            <div className='btn-menu card-btn'>
                <Link to="/home/cart" className='btn btn-outline-light' rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" /></svg>
                </Link>
            </div>
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