import React, { memo } from 'react';
import { APP_HEADER_NAV } from '../shared/constants/appConstant';
import '../styles/header.scss';

const Header = memo(() => {
    return (
        <div className='component--header'>
            <header className='dft'>
                <div className='_u-flex0 app-logo'>
                    <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" className='shadowImage' />
                </div>
                <div className='search-form-autocompleter _u-flex1'>
                    <input type="text" placeholder="Search for anything" />
                </div>
                <div className='_u-flex0 menu-nav-list'>
                    {
                        APP_HEADER_NAV.map((nav, index) => {
                            return (<div key={index} className='btn-menu'>
                                <a href="#" rel="noopener noreferrer">{nav.name}</a>
                            </div> )
                        })
                    }
                    <div className='btn-menu login-btn'>
                        <a href="#" className='btn btn-outline-dark' rel="noopener noreferrer">Log in</a>
                    </div>
                    <div className='btn-menu sign-btn'>
                        <a href="#" className='btn btn-dark' rel="noopener noreferrer">Sign up</a>
                    </div>
                </div>
            </header>
        </div>
    );
});

export default Header;