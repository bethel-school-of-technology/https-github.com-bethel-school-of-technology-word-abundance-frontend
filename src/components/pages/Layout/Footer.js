import React from 'react'
import './Footer.css'

function Footer() {
    return (
    <React.Fragment>
    <footer>
      Copyright &copy; {new Date().getFullYear()} Abundance App
    </footer>
    </React.Fragment>
    )
}

export default Footer;