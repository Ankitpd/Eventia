import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { isAuthenticated, logout } from '../helpers/auth';


const Header = ({ history }) => {
    const handleLogout = (evt) => {
        logout(() => {
            history.push('/signin');
        });
    };

    // views
    const showNavigation = () => (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <Link to='/' className='navbar-brand'>
                <h3>EVENTICA</h3>
            </Link>
            <button
                className='navbar-toggler'
                type='button'
                data-toggle='collapse'
                data-target='#navbarTogglerDemo02'
                aria-controls='navbarTogglerDemo02'
                aria-expanded='false'
                aria-label='Toggle navigation'
            >
                <span className='navbar-toggler-icon'></span>
            </button>

            <div className='collapse navbar-collapse' id='navbarTogglerDemo02'>
                <ul className='navbar-nav ml-auto mt-2 mt-lg-0'>
                    {!isAuthenticated() && (
                        <Fragment>
                            <li className='nav-item'>
                                <Link to='/' className='nav-link'>
                                    HOME
                                </Link>
                            </li>
                            <li className='nav-item'>
                                {/* <Route exact path="/events" component={Events}/> */}
                                <Link to='/Cards' className='nav-link'>
                                    EVENTS
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/about' className='nav-link'>
                                    ABOUT US
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/contact' className='nav-link'>
                                    CONTACT US
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/signin' className='nav-link'>
                                    <i className='fas '></i>{' '}
                                    LOGIN
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/signup' className='nav-link'>
                                <button type="button" class="btn btn-primary">REGISTER</button> 
                                </Link>
                            </li>
                            
                        </Fragment>
                    )}

                    {isAuthenticated() && isAuthenticated().role === 0 && (
                        <Fragment>
                            <li className='nav-item'>
                                <Link to='/user/dashboard' className='nav-link'>
                                    <i className='fas '></i> Dashboard
                                </Link>
                            </li>
                        </Fragment>
                    )}

                    {isAuthenticated() && isAuthenticated().role === 1 && (
                        <Fragment>
                            <li className='nav-item'>
                                <Link
                                    to='/admin/dashboard'
                                    className='nav-link'
                                >
                                    <i className='fas fa-home'></i> Dashboard
                                </Link>
                            </li>
                        </Fragment>
                    )}

                    {isAuthenticated() && (
                        <Fragment>
                            <li className='nav-item'>
                                <button
                                    className='btn btn-link text-secondary text-decoration-none pl-0'
                                    onClick={handleLogout}
                                >
                                    <i className='fas fa-sign-out-alt'></i>{' '}
                                    Logout
                                </button>
                            </li>
                        </Fragment>
                    )}
                </ul>
            </div>
        </nav>
    );

    // render
    return <header id='header'>{showNavigation()}</header>;
};

export default withRouter(Header);
