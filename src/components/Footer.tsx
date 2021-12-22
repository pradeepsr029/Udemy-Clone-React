import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { APP_FOOTER_NAV } from '../shared/constants/appConstant';
import '../styles/footer.scss';

const Footer = memo(() => {
    return (
        <div className='main-footer'>
            <div className='footer__links'>

            </div>
            <footer>
                <div className='links-selector dft'>
                    {
                        APP_FOOTER_NAV.map((footer, index) => {
                            return <ul key={index} className='list-white-link'>
                                {footer.footerNav.map(value => {
                                    return <li key={value.id}>
                                        <Link to="/auth/about" title={value.name}>{value.name}</Link>
                                    </li>
                                })
                                }
                            </ul>
                        })
                    }
                </div>
            </footer>
        </div>
    );
});

export default Footer;