import React from "react"
import { useHistory } from "react-router-dom"

import { SOCIAL,} from "../../utils/constants"
import "./Footer.css"

const Footer = () => {
    const history = useHistory()

    const handleOnClick = (pageName) => {
        history.push(`/${pageName}`)
        document.documentElement.scrollTop = 0
    }

    return (
        <footer className='footer' data-aos='slide-up'>
            <div className='footer__sections'>
                <div className='footer__section'>
                    <div className='footer__sectionHeader'>
                        <span>Contact</span>
                        <span></span>
                        <span></span>
                        <span>Information</span>
                    </div>
                    <p>I am always open to new opportunities and interesting collaborations. Feel free to reach out via email, and I look forward to connecting with you!</p>
                    
                    {/* Fixed Email Block */}
                    <p className='footer__contactInfo'>
                        <i className='fas fa-envelope'></i>
                        <span className="email-wrapper">
                            <strong>Email:</strong> utkarshsingha000@gmail.com
                        </span>
                    </p>
                </div>

                <div className='footer__section'>
                    <div className='footer__sectionHeader'>
                        <span>Portfolio</span>
                        <span></span>
                        <span></span>
                        <span>Menu Links</span>
                    </div>
                    <div className='footer__menuLinks'>
                        <p onClick={() => handleOnClick("")}>Home</p>
                        <p onClick={() => handleOnClick("projects")}>Projects</p>
                        <p onClick={() => handleOnClick("expertise")}>Expertise</p>
                        <p onClick={() => handleOnClick("about")}>About Me</p>
                        <p onClick={() => handleOnClick("contact")}>Contact Me</p>
                    </div>
                </div>

                <div className='footer__section'>
                    <div className='footer__sectionHeader'>
                        <span>Catch</span>
                        <span></span>
                        <span></span>
                        <span>Me Up On</span>
                    </div>
                    <div className='footer__socialLinks'>
                        <a href={SOCIAL.LINKEDIN} target='_blank' rel='noopener noreferrer' title={`Utkarsh Singh Linkedin`}>
                            <i className='fab fa-linkedin'></i> Linkedin
                        </a>
                        <a href={SOCIAL.GITHUB} target='_blank' rel='noopener noreferrer' title={`Utkarsh Singh Github`}>
                            <i className='fab fa-github'></i> GitHub
                        </a>
                        <a href={SOCIAL.TWITTER} target='_blank' rel='noopener noreferrer' title={`Utkarsh Singh Twitter`}>
    <i className='fab fa-x-twitter'></i> Twitter
</a>
                    </div>
                </div>
            </div>

            <div className='footer__creditsWrapper'>
    			<p>
       				 Copyright &copy; 2026 | Made with <i className='fas fa-heart'></i> by Utkarsh
    			</p>
			</div>
        </footer>
    )
}

export default Footer