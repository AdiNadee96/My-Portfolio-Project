import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import React from 'react';
import LogoPreLoad from '../../assets/images/logoNav.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faSkype } from '@fortawesome/free-brands-svg-icons';

export const Sidebar = () => {
  return (
    <div className='nav-bar'>
        <Link className ="logo" to="/">
            <img src={LogoPreLoad} alt='Logo'/>
            {/* <img className='sub-logo' src={Logo_sub} alt='slobodan'/> */}
        </Link>
        <nav>
            <NavLink className={(props) => {return `${props.isActive ? 'isActive ' : ''}`;}}
            end
            to="/">
                <FontAwesomeIcon icon={faHome} color='#4d4d4d'/>
            </NavLink>

            <NavLink className={(props) => { return `${props.isActive ? 'isActive ' : ''}about-link`;}}
            end
            to="/about" >
                <FontAwesomeIcon icon={faUser} color='#4d4d4d'/>
            </NavLink>

            <NavLink   className={(props) => {return `${props.isActive ? 'isActive ' : ''}contact-link`;}}
            end
            to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4d'/>
            </NavLink>
        </nav>
         <ul>
            <li>
                <a target="_blank" rel='noreferrer' href="https://linkedin.com/in/adarshi-perera">
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href="https://github.com/adarshi96">
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/>
                </a>
            </li>
           
        </ul>

    </div>
  )
}
