import React from 'react'

const Header = ({title}) => {

    return (
            <nav className="na-wrapper light-blue darken-3">
                <a href="#!" className="brand-logo center">{title}</a>
            </nav>
    );

}

export default Header;