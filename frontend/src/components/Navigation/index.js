import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import logo from '../../assets/PicturePerfectLogo.png';

function Navigation({ isLoaded }) {
    const [myPage, setMyPage] = useState(0);

    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        );
    } else {
        sessionLinks = (
            <>
                <NavLink to="/login" style={{ textDecoration: "none" }}>Log In</NavLink>
                <NavLink to="/signup" style={{ textDecoration: "none" }}>Sign Up</NavLink>
            </>
        );
    }

    useEffect(() => {
        if (sessionUser) {
            setMyPage(sessionUser.id || 0)
        }
    })

    return (
        <nav className="navbar">
            <a href="/"><img className="logo" src={logo} alt="logo" /></a>
            <br></br>
            <NavLink className="navbar-link" exact to={`/users/${myPage}`} style={{ textDecoration: "none", padding: "0 0 0 10px" }}>My Page</NavLink>
            <NavLink className="navbar-link" exact to="/pictures" style={{ textDecoration: "none", padding: "0 0 0 10px" }}>Upload a picture!</NavLink>
            {isLoaded && sessionLinks}
        </nav>
    );
}

export default Navigation;

// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import ProfileButton from './ProfileButton';
// import './Navigation.css';

// function Navigation({ isLoaded }) {
//     const sessionUser = useSelector(state => state.session.user);

//     let sessionLinks;
//     if (sessionUser) {
//         sessionLinks = (
//             <ProfileButton user={sessionUser} />
//         );
//     } else {
//         sessionLinks = (
//             <>
//                 <i class="fas fa-glass-cheers"></i>
//                 <NavLink to="/login"><i class="fas fa-lock"></i></NavLink>
//                 <NavLink to="/signup"><i class="fas fa-user-plus"></i></NavLink>
//             </>
//         );
//     }

//     return (
//         <ul>
//             <li>
//                 <NavLink exact to="/" className="navbar">Home</NavLink>
//                 {isLoaded && sessionLinks}
//             </li>
//         </ul>
//     );
// }

// export default Navigation;